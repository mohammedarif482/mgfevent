// components/OnlinePackageSection.jsx
import { useRef, useEffect } from 'react';

export default function OnlinePackageSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
        // Many browsers require user interaction before autoplay
        // This is a fallback for those cases
      });
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#f5f0ff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="max-w-xl">
              <p className="text-gray-700 mb-4 text-lg">Online Package</p>
              
              <h2 className="text-5xl md:text-6xl font-semibold text-purple-600 italic leading-tight mb-8">
                Get an online package
              </h2>
              
              <div className="text-3xl md:text-4xl text-gray-800 leading-tight">
                customized to your <br /> 
                design preferences <br />
                and budget.
              </div>
            </div>
          </div>
          
          {/* Right Content - Video/Image Interface */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Main Video/Image */}
              <div className="relative pt-[100%] w-full">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/file2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay for tabs */}
                <div className="absolute top-0 left-0 right-0 p-3 z-10">
                  <div className="flex gap-2">
                    <span className="px-4 py-1 bg-white rounded-full text-gray-700 text-sm font-medium">Haldi</span>
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-gray-500 text-sm">Reception</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-2 p-3">
                <div className="relative pt-[75%]">
                  <img 
                    src="/package-thumb-1.jpg" 
                    alt="Package Option 1" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 left-1 text-xs font-bold bg-white bg-opacity-80 px-2 py-1 rounded-md">
                    ₹28,000
                  </div>
                </div>
                
                <div className="relative pt-[75%]">
                  <img 
                    src="/package-thumb-2.jpg" 
                    alt="Package Option 2" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 left-1 text-xs font-bold bg-white bg-opacity-80 px-2 py-1 rounded-md">
                    ₹20,000
                  </div>
                </div>
                
                <div className="relative pt-[75%]">
                  <img 
                    src="/package-thumb-3.jpg" 
                    alt="Package Option 3" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 left-1 text-xs font-bold bg-white bg-opacity-80 px-2 py-1 rounded-md">
                    ₹25,000
                  </div>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="p-3">
                <div className="bg-purple-600 text-white rounded-full py-3 px-6 flex justify-between items-center">
                  <span className="text-sm font-medium">Total package</span>
                  <span className="text-xl font-bold">₹2,20,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}