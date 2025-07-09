import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Utthan Labs</h2>
          <p className="text-sm">
            Empowering innovation through robotics, AI, and automation. Join our
            workshops and build the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Workshops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:info@utthanlabs.com" className="hover:text-white">
                info@utthanlabs.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+9771234567890" className="hover:text-white">
                +977 123-456-7890
              </a>
            </li>
            <li>
              Address:{" "}
              <span className="block">Baneshwor, Kathmandu, Nepal</span>
            </li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-3">
            Stay updated with our latest events and courses.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-lg"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mt-6 text-xl">
            <a href="#">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Utthan Robotics and Automation Labs.
        All rights reserved.
      </div>
    </footer>
  );
}
