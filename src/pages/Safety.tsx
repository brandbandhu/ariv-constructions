import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import safetyHero from "@/assets/images/safety-hero.jpg";

const safteyFolderModules = import.meta.glob("@/assets/images/saftey/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const safteyFolderImages = Object.entries(safteyFolderModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const Safety = () => {
  return (
    <>
      <PageBreadcrumb title="Safety" subtitle="Committed to Safe Construction Practices" bgImage={safetyHero} />

      <section className="py-20">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-accent font-semibold uppercase text-sm tracking-wider">Safety First</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
                Our Safety Standards
              </h2>
              <p className="text-muted-foreground">
                At ARIV BUILDCON PVT. LTD., safety is not just a priority - it's a core value. We maintain the highest safety standards across all our construction sites, ensuring every worker goes home safe.
              </p>
            </div>
          </AnimatedSection>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {safteyFolderImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`ARIV BUILDCON PVT. LTD. construction safety practices ${i + 1}`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment banner */}
      <section className="relative py-24 overflow-hidden">
        <img src={safetyHero} alt="Safety commitment at ARIV BUILDCON PVT. LTD." className="absolute inset-0 w-full h-full object-cover" />
        <div className="gradient-hero-overlay absolute inset-0" />
        <div className="container mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Zero Compromise on <span className="text-gradient-accent">Safety</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Every project. Every worker. Every day. Safety is our foundation.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </>
  );
};

export default Safety;
