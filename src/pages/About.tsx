import { Link } from "react-router-dom";
import { Eye, Target, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import aboutHero from "@/assets/images/about-hero.jpg";
import ceoImg from "@/assets/images/ceo-sangram.jpg";

const About = () => {
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
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0}>
            <div className="glass-card-light p-10 h-full">
              <div className="gradient-accent w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Eye className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Ariv Buildcon, our vision is to be the foremost leader in the construction industry, known for our innovative solutions, exceptional quality, and unwavering commitment to sustainability. We aspire to build not just structures, but lasting legacies that enhance the landscapes of India and improve the lives of the communities we serve.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card-light p-10 h-full">
              <div className="gradient-accent w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Target className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to transform visions into reality by providing exceptional construction services that exceed client expectations. We are committed to building sustainable, high-quality structures that contribute to the development and growth of the communities we serve.
              </p>
            </div>
          </AnimatedSection>
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
