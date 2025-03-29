// components/CatalogSection.jsx
import { useEffect, useRef } from 'react';

export default function CatalogSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video autoplays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
        // Many browsers require user interaction before autoplay
        // This is a fallback for those cases
      });
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        {/* Section Tagline */}
        <p className="text-center text-gray-600 mb-5 text-lg">Design Catalog</p>
        
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-5">Our digital catalog</h2>
        
        {/* Description */}
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
          We offer over 10,000 professionally hand-picked wedding designs.
        </p>
        
        {/* Catalog Preview with Video */}
        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-auto"
          >
            <source src="/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>              
      </div>
    </section>
  );
}