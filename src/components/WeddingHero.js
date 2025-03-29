import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Marriage from "../../public/bg.jpeg";
import Marriage2 from "../../public/bg2.jpeg";
import Marriage3 from "../../public/bg3.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function WeddingHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Marriage, Marriage2, Marriage3];
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <section className="relative w-full" style={{ height: "calc(100vh - 72px)" }}>
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Wedding Venue ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        </div>
      ))}

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 z-10">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Wedding Text */}
            <div className="text-white mb-10 md:mb-0 md:w-1/2 text-center md:text-left">
              <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-tight mb-4">
                Events <br />
                Made Easy
              </h1>
              <p className="text-xl md:text-2xl max-w-xl mx-auto md:mx-0 mt-4">
                Plan your perfect day with our professional services
              </p>
            </div>

            {/* Right Column - CTA Buttons */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="flex flex-col space-y-4 max-w-md">
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Have a limited budget?<br/> Connect with us today
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  View Our Portfolio
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Download Our Event Planning Checklist
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Get Your Free Event Budget Template
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Reserve Your Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Social Media Container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/50 rounded-2xl px-6 py-3 flex items-center space-x-4">
          {/* Instagram Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>

          {/* YouTube Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
          </a>

          {/* Facebook Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .jump-animation {
          transition: transform 0.2s ease-in-out;
        }
        .jump-animation:hover {
          transform: translateY(-4px);
          animation: jump 0.4s ease-in-out;
        }
        .jump-button {
          transition: all 0.2s ease-in-out;
        }
        .jump-button:hover {
          transform: translateY(-2px);
          animation: buttonJump 0.3s ease-in-out;
        }
        @keyframes jump {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(-4px); }
        }
        @keyframes buttonJump {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(-2px); }
        }
      `}</style>
    </section>
  );
}