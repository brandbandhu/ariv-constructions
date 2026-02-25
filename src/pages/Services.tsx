import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { services } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-2.jpg";

const Services = () => {
  return (
    <>
      <PageBreadcrumb title="Our Services" subtitle="Comprehensive Construction Solutions" bgImage={heroImg} />

      <section className="py-20 section-light">
        <div className="container mx-auto mb-12">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[2px] text-accent">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4">
                Complete Construction Services
              </h2>
              <p className="text-muted-foreground mt-3">
                Built for industrial projects with quality, speed, and precision at every stage.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            return (
              <AnimatedSection
                key={s.title}
                delay={i * 0.1}
                className={services.length % 2 !== 0 && i === services.length - 1 ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""}
              >
                <div className="rounded-2xl border border-border/70 bg-card shadow-[0_14px_35px_rgba(14,42,71,0.08)] hover:shadow-[0_20px_50px_rgba(14,42,71,0.14)] hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={s.image}
                      alt={`${s.title} service`}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-dark py-16">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Need Our Services?</h2>
            <Link to="/contact" className="gradient-accent px-8 py-3.5 rounded-lg font-bold text-accent-foreground inline-flex items-center gap-2">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
