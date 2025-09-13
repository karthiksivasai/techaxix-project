import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const navigate = useNavigate();

  const handleLeadershipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first
    navigate('/');
    // Then scroll to leadership section after a short delay
    setTimeout(() => {
      const element = document.getElementById('leadership');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer
      id="contact"
      className="text-white border-t border-primary/20"
    >
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 footer-grid-responsive">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <Logo variant="footer" />
            <p className="text-fluid-sm sm:text-fluid-base text-white/80 leading-relaxed">
              Leading IT solutions and consulting company specializing in
              digital transformation, Oracle services, and cloud solutions. We
              drive innovation and business excellence across industries.
            </p>
            <div className="flex space-x-4 sm:space-x-6 pt-2 sm:pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-secondary/20 h-8 w-8 sm:h-10 sm:w-10"
                asChild
              >
                <a href="https://www.linkedin.com/company/techaxis-consulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-secondary/20 h-8 w-8 sm:h-10 sm:w-10"
                asChild
              >
                <a href="https://twitter.com/techaxis_consult" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-secondary/20 h-8 w-8 sm:h-10 sm:w-10"
                asChild
              >
                <a href="https://facebook.com/techaxisconsulting" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Industries</h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                { name: "Insurance", href: "/industries" },
                { name: "Financial Services", href: "/industries" },
                { name: "Manufacturing", href: "/industries" },
                { name: "Telecommunications", href: "/industries" },
                { name: "Retail & E-commerce", href: "/industries" },
                { name: "Energy & Utilities", href: "/industries" },
                { name: "Healthcare", href: "/industries" },
                { name: "Education", href: "/industries" },
                { name: "Public Sector", href: "/industries" },
                { name: "Transportation & Logistics", href: "/industries" },
              ].map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.href}
                    className="p-0 h-auto text-white/80 hover:text-accent text-left transition-colors duration-200 block text-fluid-sm sm:text-fluid-base"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                {
                  name: "Digital Transformation",
                  href: "/services/digital-transformation",
                },
                {
                  name: "Oracle Fusion Cloud",
                  href: "/services/oracle-fusion-cloud",
                },
                { name: "Oracle EBS", href: "/services/oracle-ebs" },
                {
                  name: "Custom Cloud Solutions",
                  href: "/services/custom-cloud",
                },
                {
                  name: "Mobile Development",
                  href: "/services/mobile-development",
                },
                {
                  name: "Staff Augmentation",
                  href: "/services/staff-augmentation",
                },
                {
                  name: "Project Management",
                  href: "/services/project-management",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="p-0 h-auto text-white/80 hover:text-accent justify-start text-left block transition-colors duration-200 text-fluid-sm sm:text-fluid-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Company</h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                { name: "About Techaxis", href: "/about", isExternal: false },
                { name: "Leadership", href: "/#leadership", isExternal: true },
              ].map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      onClick={link.name === 'Leadership' ? handleLeadershipClick : undefined}
                      className="p-0 h-auto text-white/80 hover:text-accent text-left transition-colors duration-200 block text-fluid-sm sm:text-fluid-base cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="p-0 h-auto text-white/80 hover:text-accent text-left transition-colors duration-200 block text-fluid-sm sm:text-fluid-base"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-fluid-sm sm:text-fluid-base text-white/60 text-center sm:text-left">
              © 2025 Techaxis Consulting Private Limited. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <Link
                to="/privacy-policy"
                className="p-0 h-auto text-white/60 hover:text-accent text-fluid-sm sm:text-fluid-base transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="p-0 h-auto text-white/60 hover:text-accent text-fluid-sm sm:text-fluid-base transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
