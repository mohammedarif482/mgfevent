import React, { useRef, useState, useEffect } from 'react';

// Sample media URLs (replace with your actual image and video paths)
const media = [
  { type: 'image', src: '/img1.jpg' },
  { type: 'video', src: '/vid1.mp4' },
  { type: 'image', src: '/img2.jpg' },
  { type: 'video', src: '/vid2.mp4' },
  { type: 'image', src: '/img3.jpg' },
  { type: 'video', src: '/vid3.mp4' }
];

const testimonials = [
  {
    text: "We were so stressed about wedding planning, but MGF took all the pressure off. They were incredibly organized, responsive, and creative. They truly made our dream wedding a reality which we never expected. From the moment we met MGF, we knew we were in good hands. They took our scattered ideas and created the most magical wedding we could have ever imagined.",
    client: "Client 1"
  },
  {
    text: "Our annual conference was a huge success thanks to MGF. They handled all the logistics flawlessly, and the event ran smoothly from start to finish. Their professionalism and attention to detail were outstanding.",
    client: "Client 2"
  },
  {
    text: "I was so impressed with the level of service and creativity that MGF provided for my surprise birthday party. They took all the stress out of planning, and I was able to relax and enjoy my special day. The team at MGF is incredibly responsive and professional and did a terrific job.",
    client: "Client 3"
  },
  {
    text: "We highly recommend MGF to anyone looking for a reliable and talented event management company. Their communication was fantastic. We were always kept in the loop, and they were very responsive to our questions and requests. They even took time to answer our silliest questions.",
    client: "Client 4"
  },
  {
    text: "The party was amazing. The decorations were incredible and the music was perfect. I couldn't have asked for a better event. The MGF team is incredibly professional and organized. They are a pleasure to work with, and they consistently deliver exceptional results. We were impressed with MGF's creativity and attention to detail. They truly went above and beyond to make our event special.",
    client: "Client 5"
  }
];

const Testimonial = () => {
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const FullscreenModal = () => {
    const mediaRef = useRef(null);

    useEffect(() => {
      if (fullscreenMedia && mediaRef.current) {
        const media = mediaRef.current;
        if (isPlaying) {
          media.play();
        } else {
          media.pause();
        }
      }
    }, [isPlaying, fullscreenMedia]);

    if (!fullscreenMedia) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-[80vh]">
          {/* Close Button */}
          <button 
            onClick={() => setFullscreenMedia(null)}
            className="absolute top-4 right-4 z-60 text-white hover:bg-white/20 rounded-2xl p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Media Container */}
          <div className="w-full h-full flex items-center justify-center">
            {fullscreenMedia.type === 'video' ? (
              <video
                ref={mediaRef}
                src={fullscreenMedia.src}
                className="max-w-full max-h-full object-contain"
                loop
                controls={false}
              />
            ) : (
              <img 
                src={fullscreenMedia.src} 
                alt="Fullscreen" 
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Controls */}
          {fullscreenMedia.type === 'video' && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-2xl flex items-center space-x-4 p-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20 rounded-2xl p-2"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <p className="text-center text-gray-600 mb-1 text-lg">
          Testimonials
        </p>
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-16">
          Let’s listen from our clients,
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Media Masonry Grid */}
          <div className="grid grid-cols-2 gap-4">
            {media.map((item, index) => (
              <div 
                key={index}
                className={`
                  bg-white shadow-lg rounded-2xl overflow-hidden
                  ${index % 3 === 0 ? 'row-span-2' : 'row-span-1'}
                  hover:scale-105 transition-transform duration-300 cursor-pointer
                `}
                onClick={() => setFullscreenMedia(item)}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video 
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                )}
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-800 text-right mt-auto">
                  {testimonial.client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FullscreenModal />
    </section>
  );
};

export default Testimonial;