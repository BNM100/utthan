"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Workshops", href: "/workshops" },
    { name: "Projects", href: "/projects", submenu: ["Student", "Industry"] },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={
        "w-full z-50 transition-all duration-500 bg-[#2187ab] text-white"
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animated border */}
          <Link href="/" className="flex items-center group relative">
            <div
              className={`absolute -inset-1 rounded-full 
               group-hover:scale-110 transition-transform duration-300`}
            ></div>
            <Image
              src="/assets/images/utthan-logo-arm-transparent.png"
              alt="Utthan Labs Logo"
              width={60}
              height={60}
              className="w-10 h-10 object-contain z-10"
            />
            <span className={"ml-2 text-xl font-bold tracking-tight z-10 "}>
              <span className="font-extrabold">UTTHAN </span>
              <span className="font-light">Robotics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={
                    "px-4 py-2 rounded-lg flex items-center transition-all "
                  }
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      size={16}
                      className="ml-1 transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>
                {link.submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 $`}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item}
                        href={`${link.href}/${item.toLowerCase()}`}
                        className={`block px-4 py-2 text-sm `}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/register"
              className={`ml-4 px-5 py-2 rounded-full flex items-center font-medium transition-all `}
            >
              <Rocket size={16} className="mr-2" />
              Register Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className={`p-2 rounded-lg `}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-6 transition-all duration-300 `}>
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg `}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-6">
                    {link.submenu.map((item) => (
                      <Link
                        key={item}
                        href={`${link.href}/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 text-sm`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className={`mt-4 mx-4 block text-center px-5 py-3 rounded-full font-medium `}
            >
              <Rocket size={16} className="inline mr-2" />
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
