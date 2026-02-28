import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Target, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import aboutHero from "@/assets/images/about-hero.jpg";
import ceoImg from "@/assets/images/ceo-sangram.jpg";

const About = () => {
  const [activeFlip, setActiveFlip] = useState<number | null>(null);
  const leadershipTeam = [
    {
      name: "Rajendra Parman Gunjal",
      designation: "Director",
      description:
        "Leads strategic growth, governance, and delivery excellence across the organization.",
      image: ceoImg,
    },
    {
      name: "Sangram Rajendra Gunjal",
      designation: "Director",
      description:
        "Oversees project execution, client coordination, and operational performance.",
      image: ceoImg,
    },
    {
      name: "Omkar Rajendra Gunjal",
      designation: "Director",
      description:
        "Drives engineering quality, planning discipline, and continuous improvement.",
      image: ceoImg,
    },
  ];

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
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
            <span className="text-accent font-semibold uppercase text-sm tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-5">
              Welcome To Our Company
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ariv Buildcon is a premier construction company specializing in the development of large-scale projects across various regions in India. With a strong emphasis on quality, innovation, and efficiency, we deliver comprehensive turnkey solutions that cater to the diverse needs of our clients.
            </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {leadershipTeam.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="glass-card-light p-5 h-full">
                  <img
                    src={member.image}
                    alt={`${member.name} ${member.designation}`}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                  <p className="text-left font-heading text-xl font-bold text-primary">{member.name}</p>
                  <p className="mt-1 text-left text-sm font-semibold text-accent">{member.designation}</p>
                  <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
