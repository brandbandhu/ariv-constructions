import { useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getProjectSlug, projects } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-1.jpg";

type Filter = "All" | "Ongoing" | "Completed";

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");

  let filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <PageBreadcrumb title="Our Projects" subtitle="Delivered with Precision & Excellence" bgImage={heroImg} />

      <section className="py-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {(["All", "Ongoing", "Completed"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  filter === f
                    ? "gradient-accent text-accent-foreground shadow-md"
                    : "border border-border bg-card text-foreground hover:border-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.05}>
                <Link to={`/projects/${getProjectSlug(p.name)}`} className="block">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <img
                      src={p.image}
                      alt={`Ariv Buildcon ${p.name} industrial construction project`}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute right-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          p.status === "Ongoing" ? "bg-accent text-accent-foreground" : "bg-card text-primary"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading text-lg font-bold text-primary-foreground">{p.name}</h3>
                      <div className="mt-1 flex items-center gap-1 text-xs text-primary-foreground/70">
                        <MapPin className="h-3 w-3" /> {p.location}
                        {p.year && <span className="ml-2">&bull; {p.year}</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
