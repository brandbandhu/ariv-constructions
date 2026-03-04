import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import arivLogo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="section-dark mt-10 md:mt-14">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={arivLogo} alt="ARIV BUILDCON PVT. LTD. Logo" className="h-10 w-auto rounded" />
              <span className="text-xl font-heading font-bold text-primary-foreground">ARIV BUILDCON PVT. LTD.</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A construction company specializing in large-scale industrial projects across India with unwavering commitment to quality and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Fleet & Machinery", path: "/fleet" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Heavy Machinery Rental
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Design & Build
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                Maharashtra, India
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                +91 XXXXXXXXXX
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                office@arivbuildcon.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex items-center justify-center border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/50">
            &copy; 2026 ARIV BUILDCON PVT. LTD. All rights reserved by{" "}
            <a
              href="https://webakoof.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Webakoof
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







