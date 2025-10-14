import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "INDUSTRIES", href: "/industries" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const MobileMenuOverlay = () => {
    if (!isOpen) return null;
    
    return createPortal(
      <div 
        className="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-800/80 backdrop-blur-sm"
        style={{ 
          zIndex: 999999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onClick={closeMenu}
      >
        {/* Menu Content */}
        <div 
          className="bg-gradient-to-br from-white via-blue-50/30 to-white h-full w-full overflow-y-auto shadow-2xl"
          style={{ 
            zIndex: 1000000,
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-gradient-to-r from-blue-200 to-transparent">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                  Menu
                </h2>
              </div>
              <button
                onClick={closeMenu}
                className="p-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 group"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-slate-600 group-hover:text-red-600 transition-colors" />
              </button>
            </div>

            {/* Main Navigation Items */}
            <div className="mb-12">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between w-full px-6 py-5 text-left text-slate-800 hover:text-white rounded-2xl transition-all duration-300 font-semibold border border-slate-200 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="pt-8 border-t border-gradient-to-r from-transparent via-slate-200 to-transparent">
              <Link to="/contact" onClick={closeMenu}>
                <button className="group w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 text-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>CONTACT US</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="xl:hidden group flex items-center justify-center w-14 h-14 text-slate-800 hover:text-blue-700 rounded-2xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu Overlay - Rendered via Portal */}
      <MobileMenuOverlay />
    </>
  );
};

export default MobileMenu;