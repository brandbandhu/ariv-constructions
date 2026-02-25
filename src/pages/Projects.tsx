import { useState } from "react";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { projects } from "@/data/siteData";
import heroImg from "@/assets/images/hero-construction-1.jpg";

type Filter = "All" | "Ongoing" | "Completed";
type Sort = "none" | "high" | "low";

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("none");

  let filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.valueNum - a.valueNum);
  if (sort === "low") filtered = [...filtered].sort((a, b) => a.valueNum - b.valueNum);

  return (
    <>
      <PageBreadcrumb title="Our Projects" subtitle="Delivered with Precision & Excellence" bgImage={heroImg} />

      <section className="py-20">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {(["All", "Ongoing", "Completed"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  filter === f
                    ? "gradient-accent text-accent-foreground shadow-md"
                    : "bg-card text-foreground border border-border hover:border-accent"
                }`}
              >
                {f}
              </button>
            ))}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-card border border-border text-foreground"
            >
              <option value="none">Sort by Value</option>
              <option value="high">Highest First</option>
              <option value="low">Lowest First</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.05}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={p.image}
                    alt={`Ariv Buildcon ${p.name} industrial construction project`}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${p.status === "Ongoing" ? "bg-accent text-accent-foreground" : "bg-card text-primary"}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/90 text-accent-foreground">{p.value}</span>
                    <h3 className="font-heading text-lg font-bold text-primary-foreground mt-2">{p.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-primary-foreground/70 mt-1">
                      <MapPin className="h-3 w-3" /> {p.location}
                      {p.year && <span className="ml-2">• {p.year}</span>}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
