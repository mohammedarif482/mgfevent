// components/Footer.js
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Corporate Information Column */}
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.png" 
                alt="mgf Logo" 
                width={120} 
                height={40} 
                className="mr-4"
              />
            </div>
            {/* <h3 className="font-bold text-[#FFFBF5] mb-4">Corporate Information</h3>
            <p className="text-[#FFFBF5]">Board</p> */}
          </div>
          
          {/* Address Column */}
          <div>
            <h3 className="font-bold text-[#FFFBF5] mb-4">Address</h3>
            <p className="text-[#7A7A7A] leading-relaxed">
              V Panoli Road,<br/> opposite Eurokids Play School,<br/> Kozhikode, Kerala 673004
            </p>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-[#FFFBF5] mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-[#7A7A7A]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-[#e35c26]" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 9387039393 | +91 9388039393 | +91 0495 4040393</span>
              </div>
              <div className="flex items-center text-[#7A7A7A]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-[#e35c26]" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@mgfevent.com</span>
              </div>
              {/* <a 
                href="#" 
                className="inline-block text-[#e35c26] hover:underline transition-colors"
              >
                Feedback Form
              </a> */}
            </div>
          
            <p className="text-[#7A7A7A] mt-4 text-sm">
              © 2024-2025 MGF Events. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;