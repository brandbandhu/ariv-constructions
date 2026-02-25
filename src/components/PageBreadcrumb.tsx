import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageBreadcrumbProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageBreadcrumb = ({ title, subtitle, bgImage }: PageBreadcrumbProps) => {
  return (
    <div className="breadcrumb-banner">
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-4">
            {subtitle}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent font-semibold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;
