import Image from "next/image";
import Marriage from "../../public/bg.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF,faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function WeddingHero() {
  return (
    <section className="relative w-full" style={{ height: "calc(100vh - 72px)" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Marriage}
          alt="Wedding Venue"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      </div>

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