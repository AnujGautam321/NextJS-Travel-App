import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Explore Nepal Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore Nepal</h3>
            <p className="text-sm mb-4">
              Discover the beauty of Nepal, from its majestic mountains to its
              rich culture and heritage. Let us guide you through the journey
              of a lifetime.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </Link>
              <Link href="https://www.pinterest.com" target="_blank">
                <FaPinterest className="text-2xl hover:text-red-500" />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube className="text-2xl hover:text-red-600" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutnepal" className="hover:underline">
                  About Nepal
                </Link>
              </li>
              <li>
                <Link href="/destinationslists" className="hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">
              Get the latest updates and travel tips directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Explore Nepal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;