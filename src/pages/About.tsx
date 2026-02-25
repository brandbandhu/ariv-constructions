import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Target, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import aboutHero from "@/assets/images/about-hero.jpg";
import ceoImg from "@/assets/images/ceo-sangram.jpg";

const About = () => {
  const [activeFlip, setActiveFlip] = useState<number | null>(null);
  const visionMissionCards = [
    {
      title: "Our Vision",
      description:
        "At Ariv Buildcon, our vision is to be the foremost leader in the construction industry, known for our innovative solutions, exceptional quality, and unwavering commitment to sustainability. We aspire to build not just structures, but lasting legacies that enhance the landscapes of India and improve the lives of the communities we serve.",
      Icon: Eye,
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to transform visions into reality by providing exceptional construction services that exceed client expectations. We are committed to building sustainable, high-quality structures that contribute to the development and growth of the communities we serve.",
      Icon: Target,
    },
  ];

  return (
    <>
      <PageBreadcrumb title="About Us" subtitle="Building Legacies Since Day One" bgImage={aboutHero} />

      {/* Welcome */}
      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={ceoImg} alt="Sangram Gunjal CEO Ariv Buildcon" className="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-accent font-semibold uppercase text-sm tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-5">
              Welcome To Our Company
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ariv Buildcon is a premier construction company specializing in the development of large-scale projects across various regions in India. With a strong emphasis on quality, innovation, and efficiency, we deliver comprehensive turnkey solutions that cater to the diverse needs of our clients.
            </p>
            <div className="glass-card-light p-6 mb-6">
              <p className="font-heading text-xl font-bold text-primary">Sangram Gunjal</p>
              <p className="text-accent font-semibold text-sm">CEO & Founder</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 section-light">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          {visionMissionCards.map((card, i) => {
            const isFlipped = activeFlip === i;

            return (
              <AnimatedSection key={card.title} delay={i * 0.15}>
                <button
                  type="button"
                  onClick={() => setActiveFlip(isFlipped ? null : i)}
                  onMouseLeave={() => setActiveFlip((prev) => (prev === i ? null : prev))}
                  className="group w-full [perspective:1200px] text-left"
                >
                  <div
                    className={`relative h-[360px] w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    } group-hover:[transform:rotateY(180deg)]`}
                  >
                    <div className="absolute inset-0 glass-card-light rounded-2xl p-10 [backface-visibility:hidden] overflow-hidden">
                      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/10" />
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                        <div className="gradient-accent w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg mb-8">
                          <card.Icon className="h-12 w-12 text-accent-foreground" />
                        </div>
                        <h3 className="font-heading text-4xl font-bold text-primary">{card.title}</h3>
                        <p className="mt-4 text-sm font-semibold uppercase tracking-[2px] text-primary/60">
                          Hover or tap to flip
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl p-10 section-dark [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                      <div className="h-full flex flex-col">
                        <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-5">{card.title}</h3>
                        <p className="text-primary-foreground/85 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Want to Work With Us?</h2>
            <Link to="/contact" className="gradient-accent px-8 py-3.5 rounded-lg font-bold text-accent-foreground inline-flex items-center gap-2 shadow-md">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
