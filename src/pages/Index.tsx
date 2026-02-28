import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Leaf, Award, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterNumber from "@/components/CounterNumber";
import { getProjectSlug, services, projects } from "@/data/siteData";

import hero1 from "@/assets/images/hero-construction-1.jpg";
import hero2 from "@/assets/images/hero-construction-2.jpg";
import hero3 from "@/assets/images/hero-construction-3.jpg";
import aboutCompanyImg from "@/assets/images/about company.png";
import valuesImg from "@/assets/images/values-bg.jpg";

const heroSlides = [
  { image: hero1, title: "Building For", highlight: "Values", sub: "The Backbone of Progress" },
  { image: hero2, title: "Engineering", highlight: "Excellence", sub: "Industrial Construction at Scale" },
  { image: hero3, title: "Powering", highlight: "Infrastructure", sub: "Heavy Machinery & Turnkey Solutions" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrent((p) => (p + 1) % heroSlides.length);

  return (
    <>
      {/* HERO CAROUSEL */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={heroSlides[current].image} alt="ARIV BUILDCON PVT. LTD. construction site" className="w-full h-full object-cover" />
            <div className="gradient-hero-overlay absolute inset-0" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
                  {heroSlides[current].title}{" "}
                  <span className="text-gradient-accent">{heroSlides[current].highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-lg">
                  {heroSlides[current].sub}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/projects" className="gradient-accent px-8 py-3.5 rounded-lg font-bold text-accent-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="px-8 py-3.5 rounded-lg font-bold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors text-primary-foreground">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors text-primary-foreground">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"}`} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section-dark py-14">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
          <CounterNumber target={12} label="Industrial Clients" />
          <CounterNumber target={17} label="Staff Members" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 section-light">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={aboutCompanyImg} alt="ARIV BUILDCON PVT. LTD. company overview" className="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-accent font-semibold uppercase text-xl md:text-2xl tracking-wider block mb-5">
              Welcome To ARIV BUILDCON PVT. LTD.
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ARIV BUILDCON PVT. LTD. is a construction company specializing in the development of large-scale projects across various regions in India. With a strong emphasis on quality, innovation, and efficiency, we deliver comprehensive turnkey solutions that cater to the diverse needs of our clients.
            </p>
            <div className="mt-6">
              <Link to="/about" className="gradient-accent px-6 py-3 rounded-lg font-bold text-accent-foreground inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 section-light">
        <div className="container mx-auto text-center mb-12">
          <AnimatedSection>
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[2px] text-accent">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-3">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A high-performance service stack built to keep industrial projects on time and on budget.
            </p>
          </AnimatedSection>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/70 bg-card h-full shadow-[0_14px_35px_rgba(14,42,71,0.08)] hover:shadow-[0_20px_50px_rgba(14,42,71,0.14)] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={s.image}
                    alt={`${s.title} service`}
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 overflow-hidden">
        <img src={valuesImg} alt="ARIV BUILDCON PVT. LTD. construction values" className="absolute inset-0 w-full h-full object-cover" />
        <div className="gradient-hero-overlay absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Building For <span className="text-gradient-accent">Excellence</span>
              </h2>
              <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
                At ARIV BUILDCON PVT. LTD., we recognize that heavy construction is more than just the assembly of steel and concrete; it is the backbone of progress.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Delivering outstanding quality in every project" },
              { icon: Shield, title: "Integrity", desc: "Transparent and honest business practices" },
              { icon: Shield, title: "Safety", desc: "Zero compromise on workplace safety standards" },
              { icon: Leaf, title: "Sustainability", desc: "Building for a greener, better tomorrow" },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
                  <v.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 section-light">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase text-sm tracking-wider">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Featured Projects</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <Link to={`/projects/${getProjectSlug(p.name)}`} className="block">
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img src={p.image} alt={`ARIV BUILDCON PVT. LTD. ${p.name} project`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading text-lg font-bold text-primary-foreground">{p.name}</h3>
                      <p className="text-xs text-primary-foreground/70">{p.location}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="gradient-accent px-8 py-3.5 rounded-lg font-bold text-accent-foreground inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Build Your <span className="text-gradient-accent">Next Project?</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss your construction requirements and deliver excellence together.
            </p>
            <Link to="/contact" className="gradient-accent px-10 py-4 rounded-lg font-bold text-accent-foreground inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow text-lg">
              Get In Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;



