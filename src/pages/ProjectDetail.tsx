import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CircleCheckBig, MapPin } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getProjectSlug, projects } from "@/data/siteData";
import datwayler1Img from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-1.png";
import datwayler2Img from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-2.png";
import datwayler3Img from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-3.png";
import datwayler4Img from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-4.png";
import datwayler5Img from "@/assets/images/DATWAYLER PHARMA/DATWAYLER PHARMA-5.png";
import balasaheb1Img from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-1.png";
import balasaheb2Img from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-2.png";
import balasaheb3Img from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-3.png";
import balasaheb4Img from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-4.png";
import balasaheb5Img from "@/assets/images/Balasheb Deoras Rugnalay/Balasheb Deoras Rugnalay-5.png";
import nichino2Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-2.png";
import nichino3Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-3.png";
import nichino4Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-4.png";
import nichino5Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-5.png";
import nichino6Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-6.png";
import nichino7Img from "@/assets/images/NICHINO INDIA PRIVATE LIMITED/NICHINO INDIA PRIVATE LIMITED-7.png";
import srims1Img from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-1.png";
import srims2Img from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-2.png";
import srims3Img from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-3.png";
import srims4Img from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-4.png";
import srims5Img from "@/assets/images/SRIMS Medical College Sambhajinagar/SRIMS Medical College Sambhajinagar-5.png";
import monin1Img from "@/assets/images/Monin Hyderabad/Monin Hyderabad-1.png";
import monin2Img from "@/assets/images/Monin Hyderabad/Monin Hyderabad-2.png";
import monin3Img from "@/assets/images/Monin Hyderabad/Monin Hyderabad-3.png";
import monin4Img from "@/assets/images/Monin Hyderabad/Monin Hyderabad-4.png";
import monin5Img from "@/assets/images/Monin Hyderabad/Monin Hyderabad-5.png";
import bridgestone1Img from "@/assets/images/Bridgestone Chakan/Bridgestone Chakan-1.png";
import bridgestone2Img from "@/assets/images/Bridgestone Chakan/Bridgestone Chakan-2.png";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const project = useMemo(
    () => projects.find((item) => getProjectSlug(item.name) === slug),
    [slug],
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!project) {
    return (
      <section className="py-24">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold text-primary">Project Not Found</h1>
          <p className="mt-3 text-muted-foreground">The project page you requested does not exist.</p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" /> Back To Projects
          </Link>
        </div>
      </section>
    );
  }

  const gallery =
    project.name === "Datwayler Pharma"
      ? [datwayler1Img, datwayler2Img, datwayler3Img, datwayler4Img, datwayler5Img]
      : project.name === "Balasaheb Deoras Rugnalay"
        ? [balasaheb1Img, balasaheb2Img, balasaheb3Img, balasaheb4Img, balasaheb5Img]
        : project.name === "Nichino India Pvt Ltd"
          ? [nichino2Img, nichino3Img, nichino4Img, nichino5Img, nichino6Img, nichino7Img]
        : project.name === "SRIMS Medical College"
          ? [srims1Img, srims2Img, srims3Img, srims4Img, srims5Img]
        : project.name === "Monin Hyderabad"
          ? [monin1Img, monin2Img, monin3Img, monin4Img, monin5Img]
        : project.name === "Bridgestone Chakan"
          ? [bridgestone1Img, bridgestone2Img]
        : [project.image];

  return (
    <section className="pb-20 pt-10">
      <div className="container mx-auto">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide text-accent">
            <span>Project Showcase</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{project.status}</span>
          </div>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-6xl">{project.name}</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-primary/15 shadow-lg">
                <Carousel setApi={setApi} opts={{ loop: gallery.length > 1 }} className="w-full">
                  <CarouselContent className="ml-0">
                    {gallery.map((image, index) => (
                      <CarouselItem key={`${project.name}-${index}`} className="pl-0">
                        <div className="relative h-[42vh] min-h-[300px] w-full md:h-[56vh]">
                          <img
                            src={image}
                            alt={`${project.name} construction view ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {gallery.length > 1 && (
                    <>
                      <CarouselPrevious className="left-4 top-1/2 h-10 w-10 -translate-y-1/2 border-0 bg-primary/80 text-primary-foreground hover:bg-primary" />
                      <CarouselNext className="right-4 top-1/2 h-10 w-10 -translate-y-1/2 border-0 bg-primary/80 text-primary-foreground hover:bg-primary" />
                    </>
                  )}
                </Carousel>
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {gallery.map((_, idx) => (
                    <button
                      key={`${project.name}-dot-${idx}`}
                      onClick={() => api?.scrollTo(idx)}
                      className={`h-2 rounded-full transition-all ${
                        selectedIndex === idx ? "w-8 bg-accent" : "w-2 bg-muted"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-primary/10">
                <div className="bg-primary px-5 py-4 text-primary-foreground">
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">Ongoing Project</p>
                  <p className="mt-1 text-2xl font-bold leading-tight">{project.name.toUpperCase()}</p>
                </div>

                <div className="space-y-5 p-5 md:p-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground">
                      <MapPin className="h-4 w-4 text-accent" /> {project.location}
                    </span>
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        project.status === "Ongoing" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Price: {project.value}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <p>Executed with strong quality controls and strict site safety compliance.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <p>Optimized workflow planning to support timely and efficient project delivery.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <p>Delivered by Ariv Buildcon&apos;s experienced industrial construction team.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back To Projects
        </Link>
      </div>

      <div className="container mx-auto mt-8">
        
      </div>
    </section>
  );
};

export default ProjectDetail;
