import Link from "next/link"; 
import Image from "next/image"; 
import { useState } from "react"; 
import BrandIcon from "../../public/logo.png"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header 
        className="w-full shadow-sm fixed top-0 z-50" 
        style={{ 
          height: "72px",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.93)0%, rgba(0, 0, 0, 0.21) 100%)"
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-full text-[16px]">
          {/* Empty div for left spacing */}
          <div className="w-20"></div>
          
          {/* Centered Logo */}
          <Link href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="relative h-3 w-20">
              <Image src={BrandIcon} alt="MGF logo" />
            </div>
          </Link>
          
          {/* Contact Us Text Button - Hidden on mobile */}
          <Link 
            href="/contact" 
            className="hidden md:block text-white font-bold hover:text-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white w-full py-4 px-4 shadow-md">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-purple-500 hover:text-purple-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 hover:text-purple-700 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>           
            </nav>
          </div>
        )}
      </header>

      {/* Floating Contact Button - Visible only on mobile */}
      <Link 
        href="/contact"
        className="md:hidden fixed bottom-4 right-4 bg-black text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
      >
        Contact us
      </Link>
    </>
  );
}