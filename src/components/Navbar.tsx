"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", submenu: [] },
    { name: "Workshops", href: "/workshops", submenu: [] },
    { name: "Our Team", href: "/team", submenu: [] },
    { name: "Contact", href: "/contact", submenu: [] },
  ];

  return (
    <nav
      className={` w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              <div className="relative flex items-center">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">
                    <Image
                      src="/assets/images/utthan-logo-arm-transparent.png"
                      alt="Utthan Robotics Logo"
                      width={60}
                      height={60}
                      className="w-15 h-15 object-contain group-hover:rotate-12 transition-transform duration-300"
                    />
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] bg-clip-text text-transparent">
                    UTTHAN
                  </span>
                  <span className="text-2xl font-light text-gray-700 ml-2">
                    Robotics
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="relative px-6 py-3 text-lg font-medium text-gray-700 hover:text-[#2187ab] transition-all duration-300 rounded-xl group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2187ab]/5 to-[#1a6d8a]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] transition-all duration-300 group-hover:w-8 transform -translate-x-1/2"></div>
                </a>

                {link.submenu && link.submenu.length > 0 && (
                  <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href={`${link.href}/${item}`}
                        className="block px-6 py-3 text-gray-700 hover:text-[#2187ab] hover:bg-[#2187ab]/5 transition-all duration-200 text-base"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="/contact"
              className="ml-6 px-8 py-3 bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-[#2187ab]/25 transition-all duration-300 hover:scale-105 flex items-center group"
            >
              <Rocket
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-[#2187ab] hover:bg-[#2187ab]/5 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "rotate-45 opacity-100" : "opacity-100"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 pt-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-lg font-medium text-gray-700 hover:text-[#2187ab] hover:bg-[#2187ab]/5 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </a>

                {link.submenu && (
                  <div className="ml-6 mt-2 space-y-1">
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href={`${link.href}/${item}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-base text-gray-600 hover:text-[#2187ab] transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 px-6">
              <a
                href="/register"
                onClick={() => setIsOpen(false)}
                className=" w-full px-8 py-4 bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] text-white text-lg font-semibold rounded-full text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Rocket size={20} className="mr-2" />
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
