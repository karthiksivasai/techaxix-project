import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
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

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="p-0 h-auto text-white/80 hover:text-accent text-left transition-colors duration-200 block text-fluid-sm sm:text-fluid-base"
                  >
                    {link.name}
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

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-fluid-sm sm:text-fluid-base text-white/80 leading-relaxed">
                  admin@techaxisconsulting.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-fluid-sm sm:text-fluid-base text-white/80 leading-relaxed">
                  +91 9937033526
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-fluid-sm sm:text-fluid-base text-white/60 text-center sm:text-left">
              © 2024 Techaxis Consulting Private Limited. All rights reserved.
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
