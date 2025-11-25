"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#FAF8F5] py-12 px-6 md:px-16">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#C19A6B] mb-3">
            KhatauliGud
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            KhatauliGud is your trusted destination for premium quality products
            and reliable services. We believe in quality, integrity, and
            customer satisfaction.
          </p>
         
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-[#C19A6B] text-lg font-semibold mb-4">
            Quick Links
          </h5>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/term-and-condition">Term And Conditions</Link>
            </li>
            <li>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-[#C19A6B] text-lg font-semibold mb-4">
            Contact Us
          </h5>
          <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center gap-2">
            <FaMapMarkerAlt className="text-[#C19A6B]" /> Khatauli,
            Muzaffarnagar, Uttar Pradesh, India
          </p>
          <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center gap-2 mt-2">
            <FaPhoneAlt className="text-[#C19A6B]" /> +91 8864905840 ,
            7678186358
          </p>
          <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center gap-2 mt-2">
            <FaEnvelope className="text-[#C19A6B]" /> support@KhatauliGud.com
          </p>

           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.208248980042!2d77.74168077531426!3d29.27621397531933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1359c3cf1e29%3A0xa72fcef8d6f933af!2sBhatia%20Dairy!5e0!3m2!1sen!2sin!4v1763557976289!5m2!1sen!2sin"
            width="350"
            height="170"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade "
            className="mt-3"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#C19A6B]/30 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-4 md:mb-0">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/khatauligud?igsh=MTljbmt4emt4cTRhMw=="
            target="_blank"
            className="text-[#C19A6B] text-lg hover:text-white transition-colors duration-200"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/khatauli-gud-432b69399?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="text-[#C19A6B] text-lg hover:text-white transition-colors duration-200"
          >
            <FaLinkedinIn />
          </a>

          {/* Facebook (placeholder — update if you have actual link) */}
          <a
            href="https://www.linkedin.com/in/khatauli-gud-432b69399/?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="text-[#C19A6B] text-lg hover:text-white transition-colors duration-200"
          >
            <FaFacebookF />
          </a>

          {/* Twitter/X (placeholder — update if you have actual link) */}
          <a
            href="https://www.linkedin.com/in/khatauli-gud-432b69399/?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="text-[#C19A6B] text-lg hover:text-white transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} <strong>KhatauliGud</strong> — All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
