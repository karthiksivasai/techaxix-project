import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const SimpleMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "ABOUT US", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "INDUSTRIES", href: "/industries" },
  ];

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 text-slate-800 hover:text-blue-700 hover:bg-blue-100/50 rounded-md transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed left-0 right-0 top-0 z-[999999] bg-white border-b border-gray-200 shadow-lg">
          <nav className="py-4 px-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-left w-full text-lg font-medium transition-colors duration-200 hover:text-blue-700 p-4 rounded-lg hover:bg-blue-50 text-slate-800"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SimpleMobileMenu;
