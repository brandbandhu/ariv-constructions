import AnimatedSection from "@/components/AnimatedSection";
import CounterNumber from "@/components/CounterNumber";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Factory, Hammer, Shovel, Truck, Wrench } from "lucide-react";
import { machinery, staff } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-3.jpg";
import rmcImg from "@/assets/images/rmc-plant.jpg";
import excavatorImg from "@/assets/images/excavator.jpg";
import machineImg from "@/assets/images/machine .png";

const fleetImages = [rmcImg, machineImg, excavatorImg];

const getMachineryIcon = (name: string) => {
  if (name.includes("RMC Plant")) return Factory;
  if (name.includes("Tipper")) return Truck;
  if (name.includes("Excavator")) return Shovel;
  if (name.includes("Breaker")) return Hammer;
  return Wrench;
};

const Fleet = () => {
  return (
    <>
      <PageBreadcrumb title="Fleet & Machinery" subtitle="State-of-the-Art Heavy Construction Equipment" bgImage={heroImg} />

      {/* Machinery info */}
      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase text-sm tracking-wider">Our Equipment</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Plant & Machinery</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Our extensive inventory of heavy construction equipment enables us to tackle the most challenging tasks with precision and efficiency.
              </p>
            </div>
          </AnimatedSection>

          {/* Equipment images */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {fleetImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <img src={img} alt="ARIV BUILDCON PVT. LTD. heavy machinery equipment" className="rounded-2xl shadow-lg w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
              </AnimatedSection>
            ))}
          </div>

          {/* Machinery cards */}
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {machinery.map((m, i) => {
              const Icon = getMachineryIcon(m.name);
              return (
                <AnimatedSection key={m.name} delay={i * 0.04}>
                  <div className="group rounded-xl border border-primary/10 bg-card px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mb-1 text-3xl font-heading font-bold leading-none text-accent">{m.count}</div>
                    <p className="text-center text-sm font-semibold text-primary">{m.name}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staff counters */}
      <section className="py-16 pb-24">
        <div className="relative w-full overflow-hidden border-y border-primary/15 bg-primary px-6 py-10 shadow-[0_24px_60px_-30px_rgba(14,44,79,0.65)] md:px-10 md:py-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-accent/15 blur-3xl" />
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold text-primary-foreground text-center mb-10">Our Team Strength</h2>
            </AnimatedSection>
            <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
              {staff.map((s) => (
                <CounterNumber key={s.role} target={s.count} suffix="" label={s.role} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;


