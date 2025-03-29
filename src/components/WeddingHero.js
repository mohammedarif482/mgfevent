import Image from "next/image";
import Marriage from "../../public/bg.jpeg";
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
                Weddings <br />
                Made Easy
              </h1>
              <p className="text-xl md:text-2xl max-w-xl mx-auto md:mx-0 mt-4">
                Plan your perfect day with our professional services
              </p>
            </div>

            {/* Right Column - CTA Buttons */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="flex flex-col space-y-4 max-w-md">
              <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Have a limited budget?<br/> Connect with us today
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  View Our Portfolio
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Download Our Event Planning Checklist
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Get Your Free Event Budget Template
                </button>
                <button className="bg-[#e35c26]/30 text-white backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-[#e35c26]/50 hover:backdrop-blur-md transition-all jump-button">
                  Reserve Your Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/50 rounded-full px-6 py-3 flex items-center space-x-4">
          {/* Instagram Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-.975 1.24-2.242 1.301-3.608.058-1.266.07-1.646.07-4.85 0-3.204-.012-3.584-.07-4.85-.062-1.366-.326-2.633-1.301-3.608-.975-.975-2.242-1.24-3.608-1.301-1.266-.058-1.646-.07-4.85-.07-3.204 0-3.584.012-4.85.07-1.366.062-2.633.326-3.608 1.301-.975.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.758.385-3.788 1.415s-1.349 2.335-1.415 3.788c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.453.385 2.758 1.415 3.788s2.335 1.349 3.788 1.415c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.758-.385 3.788-1.415s1.349-2.335 1.415-3.788c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.385-2.758-1.415-3.788s-2.335-1.349-3.788-1.415c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>

          {/* YouTube Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.112C19.665 3.5 12 3.5 12 3.5s-7.665 0-9.386.574a2.997 2.997 0 0 0-2.112 2.112C.002 7.865 0 12 0 12s.002 4.135.502 5.814a2.997 2.997 0 0 0 2.112 2.112c1.721.574 9.386.574 9.386.574s7.665 0 9.386-.574a2.997 2.997 0 0 0 2.112-2.112c.5-1.679.502-5.814.502-5.814s-.002-4.135-.502-5.814zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/>
            </svg>
          </a>

          {/* Facebook Icon */}
          <a href="#" className="text-white hover:text-gray-300 jump-animation">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
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