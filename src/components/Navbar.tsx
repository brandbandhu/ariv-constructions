import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, CONTACT_PHONE_DISPLAY } from "@/data/siteData";
import arivLogo from "@/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="gradient-primary py-2 hidden md:block">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <span>📧 office@arivbuildcon.com</span>
            <span>📍 Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-semibold">{CONTACT_PHONE_DISPLAY}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={arivLogo} alt="ARIV BUILDCON PVT. LTD. Logo" className="h-12 w-auto rounded" />
            <div>
              <span className="text-xl font-heading font-bold text-primary block leading-tight">
                ARIV BUILDCON PVT. LTD.
              </span>
              <span className="text-[10px] uppercase tracking-[3px] text-muted-foreground">
                Building For Values
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-up">
            <nav className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    location.pathname === link.path
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;




