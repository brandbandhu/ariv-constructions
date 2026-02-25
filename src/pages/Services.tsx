import { Building2, ClipboardCheck, Truck, PenTool, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { services } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-2.jpg";

const iconMap: Record<string, any> = { Building2, ClipboardCheck, Truck, PenTool };

const Services = () => {
  return (
    <>
      <PageBreadcrumb title="Our Services" subtitle="Comprehensive Construction Solutions" bgImage={heroImg} />

      <section className="py-20">
        <div className="container mx-auto grid sm:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="glass-card-light p-10 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
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
