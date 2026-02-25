import AnimatedSection from "@/components/AnimatedSection";
import CounterNumber from "@/components/CounterNumber";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { machinery, staff } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-3.jpg";
import rmcImg from "@/assets/images/rmc-plant.jpg";
import excavatorImg from "@/assets/images/excavator.jpg";
import concretePumpImg from "@/assets/images/concrete-pump.jpg";

const fleetImages = [rmcImg, concretePumpImg, excavatorImg];

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
                <img src={img} alt="Ariv Buildcon heavy machinery equipment" className="rounded-2xl shadow-lg w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
              </AnimatedSection>
            ))}
          </div>

          {/* Machinery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {machinery.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.05}>
                <div className="glass-card-light p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">{m.count}</div>
                  <p className="text-sm font-semibold text-primary">{m.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Staff counters */}
      <section className="section-dark py-16">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground text-center mb-10">Our Team Strength</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {staff.map((s) => (
              <CounterNumber key={s.role} target={s.count} suffix="" label={s.role} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;
