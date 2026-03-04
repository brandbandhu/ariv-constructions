import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectSlug, projects } from "@/data/siteData";

const SITE_NAME = "ARIV BUILDCON PVT. LTD.";
const PRIMARY_SITE_URL = "https://arivbuildcon.com";
const DEFAULT_DESCRIPTION =
  "ARIV BUILDCON PVT. LTD. is an industrial construction company in India offering turnkey solutions, project management, structural work, and heavy machinery services.";
const DEFAULT_KEYWORDS =
  "ARIV BUILDCON PVT. LTD., Ariv Buildcon, industrial construction company India, turnkey construction, project management, heavy machinery rental, structural work, Maharashtra construction company";

type SeoData = {
  title: string;
  description: string;
  keywords?: string;
  noindex?: boolean;
};

const upsertMeta = (key: "name" | "property", value: string, content: string) => {
  let tag = document.head.querySelector(`meta[${key}="${value}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const getSeoForPath = (pathname: string): SeoData => {
  if (pathname === "/") {
    return {
      title: `${SITE_NAME} | Industrial Construction Company India`,
      description:
        "ARIV BUILDCON PVT. LTD. delivers industrial construction excellence across India with turnkey solutions, trusted project execution, and high safety standards.",
      keywords:
        "ARIV BUILDCON PVT. LTD., construction company India, industrial projects, turnkey solutions, heavy construction",
    };
  }

  if (pathname === "/about") {
    return {
      title: `About Us | ${SITE_NAME}`,
      description:
        "Learn about ARIV BUILDCON PVT. LTD., our vision, mission, leadership, and commitment to quality-driven industrial construction projects.",
      keywords: `about ${SITE_NAME}, construction company profile, industrial construction expertise`,
    };
  }

  if (pathname === "/services") {
    return {
      title: `Construction Services | ${SITE_NAME}`,
      description:
        "Explore ARIV BUILDCON PVT. LTD. services including turnkey solutions, project management, design-build, structural work, and machinery support.",
      keywords: `${SITE_NAME} services, turnkey construction services, project management services, design and build`,
    };
  }

  if (pathname === "/projects") {
    return {
      title: `Our Projects | ${SITE_NAME}`,
      description:
        "View completed and ongoing industrial construction projects delivered by ARIV BUILDCON PVT. LTD. across multiple locations in India.",
      keywords: `${SITE_NAME} projects, industrial project portfolio, completed construction projects India`,
    };
  }

  if (pathname.startsWith("/projects/")) {
    const slug = pathname.split("/projects/")[1] ?? "";
    const project = projects.find((p) => getProjectSlug(p.name) === slug);

    if (project) {
      return {
        title: `${project.name} | ${SITE_NAME}`,
        description: `${project.name} in ${project.location}. ${project.status} project delivered by ARIV BUILDCON PVT. LTD. with quality and safety-focused execution.`,
        keywords: `${project.name}, ${project.location} construction project, ${SITE_NAME} project`,
      };
    }
  }

  if (pathname === "/fleet") {
    return {
      title: `Fleet & Machinery | ${SITE_NAME}`,
      description:
        "Discover ARIV BUILDCON PVT. LTD. fleet and machinery capabilities supporting high-performance industrial and infrastructure construction.",
      keywords: `${SITE_NAME} fleet, heavy machinery rental, construction equipment India`,
    };
  }

  if (pathname === "/safety") {
    return {
      title: `Safety Standards | ${SITE_NAME}`,
      description:
        "ARIV BUILDCON PVT. LTD. follows strict safety protocols and site practices to ensure zero compromise on workforce and workplace safety.",
      keywords: `${SITE_NAME} safety, construction safety standards, site safety practices`,
    };
  }

  if (pathname === "/contact") {
    return {
      title: `Contact Us | ${SITE_NAME}`,
      description:
        "Contact ARIV BUILDCON PVT. LTD. for industrial construction projects, turnkey solutions, and engineering support.",
      keywords: `contact ${SITE_NAME}, construction company contact India, industrial project enquiry`,
    };
  }

  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    noindex: true,
  };
};

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const hostname = window.location.hostname.toLowerCase();
    const isPreviewHost =
      hostname.endsWith(".vercel.app") || hostname === "localhost" || hostname === "127.0.0.1";

    const canonicalUrl = `${PRIMARY_SITE_URL}${pathname}`;
    const imageUrl = new URL("/preview.png", window.location.origin).toString();

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords ?? DEFAULT_KEYWORDS);
    upsertMeta(
      "name",
      "robots",
      seo.noindex || isPreviewHost ? "noindex, nofollow" : "index, follow"
    );

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
};

export default SEOManager;

