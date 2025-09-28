import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLeadershipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first
    navigate('/');
    // Then scroll to mission & values section after a longer delay to ensure page is loaded
    setTimeout(() => {
      const element = document.getElementById('mission-values');
      if (element) {
        // Add some offset to account for any fixed headers
        const elementPosition = element.offsetTop - 100;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  return (
    <footer
      id="contact"
      className="text-white border-t border-primary/20"
    >
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">

          {/* Industries */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-fluid-lg sm:text-fluid-xl font-semibold text-white">Industries</h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                "Insurance",
                "Financial Services",
                "Manufacturing",
                "Telecommunications",
                "Retail & E-commerce",
                "Energy & Utilities",
                "Healthcare",
                "Education",
                "Public Sector",
                "Transportation & Logistics",
              ].map((industry) => (
                <li key={industry}>
                  <span className="text-white/80 text-left block text-fluid-sm sm:text-fluid-base">
                    {industry}
                  </span>
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
                {
                  name: "Data, Automation & AI",
                  href: "/services/data-automation-ai",
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
                { name: "About Techaxis", href: "/", isExternal: false },
                { name: "Leadership", href: "/", isExternal: false, isLeadership: true },
              ].map((link) => (
                <li key={link.name}>
                  {link.isLeadership ? (
                    <button
                      onClick={handleLeadershipClick}
                      className="p-0 h-auto text-white/80 hover:text-accent text-left transition-colors duration-200 block text-fluid-sm sm:text-fluid-base cursor-pointer"
                    >
                      {link.name}
                    </button>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:justify-between">
              <p className="text-fluid-sm sm:text-fluid-base text-white/60 text-center">
                © 2025 Techaxis Consulting Private Limited. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
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
      </div>
    </footer>
  );
};

export default Footer;
