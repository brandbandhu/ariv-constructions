import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import safetyHero from "@/assets/images/safety-hero.jpg";
import safety1 from "@/assets/images/safety-1.jpg";
import safety2 from "@/assets/images/safety-2.jpg";
import safety3 from "@/assets/images/safety-3.jpg";
import safety4 from "@/assets/images/safety-4.jpg";
import safety5 from "@/assets/images/safety-5.jpg";
import safety6 from "@/assets/images/safety-6.jpg";

const safetyImages = [safety1, safety2, safety3, safety4, safety5, safety6];

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
                At Ariv Buildcon, safety is not just a priority — it's a core value. We maintain the highest safety standards across all our construction sites, ensuring every worker goes home safe.
              </p>
            </div>
          </AnimatedSection>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {safetyImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Ariv Buildcon construction safety practices ${i + 1}`}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-primary-foreground font-heading font-bold text-lg">Safety First</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment banner */}
      <section className="relative py-24 overflow-hidden">
        <img src={safetyHero} alt="Safety commitment at Ariv Buildcon" className="absolute inset-0 w-full h-full object-cover" />
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
