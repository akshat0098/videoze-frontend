import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Videoze from "../assets/Videoze.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#f9f9f9] text-gray-700 pt-32 mt-12 pb-6">
      {/* Call to Action Box Overlapping Footer */}
      <div className="absolute -top-20 inset-x-6 sm:inset-x-10 md:inset-x-16 bg-gradient-to-br from-[#4e00c2] to-[#f255e6] text-white rounded-2xl shadow-lg py-14 px-6 sm:px-10 md:px-12 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-full md:max-w-3xl leading-snug">
            Experience Amazing Features of our AI video Creation Platform
          </h2>
          <button className="bg-white text-[#7B27FF] font-semibold px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg md:text-xl rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4.5rem)] md:max-w-[calc(100%-12rem)] px-6 sm:px-10 md:px-12 mt-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Main content aligned to the left */}
          <div className="flex-1 md:max-w-md">
            <div className="flex flex-col items-start space-y-5">
              <Link to="/" className="flex items-center space-x-2 mb-2">
                <img
                  src={Videoze}
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed">
                Videoze is a leading AI services provider, offering custom
                software development and innovative AI integration to enhance
                efficiency, scalability, and user experiences across diverse
                industries.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-black text-white p-1.5 hover:bg-gray-800 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-1.5 hover:bg-gray-800 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-1.5 hover:bg-gray-800 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-1.5 hover:bg-gray-800 transition"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-1.5 hover:bg-gray-800 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links aligned to the right */}
          <div className="flex-1 md:flex md:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-25 text-sm text-gray-800">
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Affiliate TOS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Features</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Faceless Video
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      AI Avatar Video
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Ad Maker Video
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline cursor-pointer">
                      Blog to Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center text-sm text-black font-bold">
          Copyright © 2025 Videoze AI LLC. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
