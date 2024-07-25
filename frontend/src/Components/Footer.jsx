import React from "react";
import { Link } from "react-router-dom";
import KromaApps from "../assets/KromaApps.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="inset-x-0 bottom-0 flex flex-col md:flex-row md:justify-between p-4 bg-white shadow-lg"
          id="upper-footer"
        >
          <div className="footer-container flex flex-wrap justify-between w-full bg-yellow-950 text-white py-10 px-5">
            <div className="footer-section about-us mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">About Us</h4>
              <p className="m-0">
                Our mission is to provide the best products at the best prices.
              </p>
              <a href="#" className="text-white hover:underline">
                Learn more
              </a>
            </div>
            <div className="footer-section customer-service mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Customer Service</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Link to="/contact" className="text-white hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faq" className="text-white hover:underline">
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/returns" className="text-white hover:underline">
                    Returns & Refunds
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/shipping" className="text-white hover:underline">
                    Shipping Information
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/track-order"
                    className="text-white hover:underline"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section information mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Information</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Link to="/privacy" className="text-white hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms" className="text-white hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section account mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Account</h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Link to="/signin" className="text-white hover:underline">
                    Sign In
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/signup" className="text-white hover:underline">
                    Sign Up
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/account" className="text-white hover:underline">
                    My Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/orders" className="text-white hover:underline">
                    Order History
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/wishlist" className="text-white hover:underline">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section social-media mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Follow Us</h4>
              <ul className="list-none p-0 flex">
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section newsletter mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 p-2 rounded-l-md border-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="footer-section mobile-app mb-5 md:mb-0">
              <h4 className="mb-2 text-yellow-400">Download Our App</h4>
              <a href="#" className="block mb-2">
                <img
                  src="https://via.placeholder.com/120x40"
                  alt="App Store"
                  className="h-auto"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://via.placeholder.com/120x40"
                  alt="Google Play"
                  className="h-auto"
                />
              </a>
            </div>
            <div className="footer-section legal w-full text-center border-t border-gray-600 pt-5">
              <p>&copy; 2024 Animal. All rights reserved.</p>
            </div>
            <div className="footer-image w-full flex justify-center mt-8">
              <img src={KromaApps} alt="Kroma-Apps" className="h-9" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
