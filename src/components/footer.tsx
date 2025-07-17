import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaRobot,
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-8">
        {/* Decorative Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#2187ab] to-transparent mb-16"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Floating Robot Illustration */}
          <div className="hidden lg:block absolute -top-24 right-8 text-[#2187ab] text-6xl opacity-20">
            <FaRobot />
          </div>

          {/* Company Info */}
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-[#2187ab] to-transparent"></div>
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-3 text-[#2187ab]">
                <Image
                  src="/assets/images/utthan-logo-arm-transparent.png"
                  alt="Utthan Labs Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Utthan <span className="text-[#2187ab]">Labs</span>
              </h2>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Pioneering robotics education with cutting-edge workshops and
              hands-on training to build the innovators of tomorrow.
            </p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61559276979184"
                className="text-gray-400 hover:text-[#2187ab] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-[#2187ab] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#2187ab] rounded-full mr-2"></span>
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "Workshops", href: "#" },
                { name: "Student Projects", href: "#" },
                { name: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-[#2187ab] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-[#2187ab] transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#2187ab] rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MdEmail className="text-[#2187ab] text-xl mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:utthanroboticslab01@gmail.com"
                    className="hover:text-[#2187ab] transition-colors"
                  >
                    utthanroboticslab01@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MdPhone className="text-[#2187ab] text-xl mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+977980-0961247"
                    className="hover:text-[#2187ab] transition-colors"
                  >
                    +977 980-0961247
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MdLocationOn className="text-[#2187ab] text-xl mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>Baneshwor, Kathmandu</p>
                  <p>Nepal</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#2187ab] rounded-full mr-2"></span>
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest courses and workshop
              updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#2187ab] text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2187ab] to-[#4fb3d1] hover:from-[#1a6f8a] hover:to-[#2187ab] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all"
              >
                <IoMdRocket className="mr-2" />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900/50 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Utthan Robotics Labs. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-[#2187ab] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-[#2187ab] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-[#2187ab] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
