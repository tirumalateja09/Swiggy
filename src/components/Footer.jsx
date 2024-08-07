import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 md:py-16 lg:py-20 mt-14">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-wrap justify-evenly">
        {/* Company Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-gray-400 font-bold text-lg mb-4">COMPANY</h3>
          <div className="space-y-2">
            {["About Us", "Team", "Careers", "Swiggy Blog", "Bug Bounty", "Swiggy One", "Swiggy Corporate", "Swiggy Instamart"].map(item => (
              <div key={item} className="cursor-default text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-gray-400 font-bold text-lg mb-4">CONTACT</h3>
          <div className="space-y-2">
            {["Help & Support", "Partner with us", "Ride with us"].map(item => (
              <div key={item} className="cursor-default text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-gray-400 font-bold text-lg mb-4">LEGAL</h3>
          <div className="space-y-2">
            {["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy", "Offer Terms", "Phishing & Fraud"].map(item => (
              <div key={item} className="cursor-default text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* App Download Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
          <h3 className="text-gray-400 font-bold text-lg mb-4">DOWNLOAD</h3>
          <div className="flex flex-col space-y-4">
            <Link to="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer">
              <img className="w-40 sm:w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="Download on Google Play" />
            </Link>
            <Link to="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920" target="_blank" rel="noopener noreferrer">
              <img className="w-40 sm:w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-200" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Download on App Store" />
            </Link>
          </div>
        </div>
      </div>
      {/* Optional Horizontal Line */}
      <hr className="border-t border-gray-700 my-6 md:my-8 lg:my-10" />
    </footer>
  );
}

export default Footer;