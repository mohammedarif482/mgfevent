import React, { useRef, useEffect, useState } from 'react';

const MasonryGallery = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Clone items to create infinite scroll effect
    const clonedItems = [...items, ...items];
    container.innerHTML = '';

    // Create two rows
    const topRow = document.createElement('div');
    const bottomRow = document.createElement('div');
    topRow.className = 'flex';
    bottomRow.className = 'flex';

    clonedItems.forEach((item, index) => {
      const targetRow = index % 2 === 0 ? topRow : bottomRow;
      
      const itemElement = document.createElement('div');
      itemElement.className = 'flex-shrink-0 w-[300px] h-[400px] mr-4 rounded-2xl overflow-hidden cursor-pointer';
      
      const mediaWrapper = document.createElement('div');
      mediaWrapper.className = 'w-full h-full';

      let mediaElement;
      if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = item.src;
        mediaElement.className = 'w-full h-full object-cover';
        mediaElement.muted = true;
        mediaElement.autoplay = true;
        mediaElement.loop = true;
        mediaElement.playsInline = true;
      } else {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.className = 'w-full h-full object-cover';
      }

      // Add click event listener
      itemElement.addEventListener('click', () => {
        setFullscreenMedia(item);
      });

      mediaWrapper.appendChild(mediaElement);
      itemElement.appendChild(mediaWrapper);
      targetRow.appendChild(itemElement);
    });

    container.appendChild(topRow);
    container.appendChild(bottomRow);

    // Animation for continuous horizontal scrolling
    let topPosition = 0;
    let bottomPosition = 0;
    
    const animate = () => {
      topPosition -= 1.5; // Top row scroll speed
      bottomPosition -= 1; // Bottom row scroll speed (slightly different for parallax effect)

      topRow.style.transform = `translateX(${topPosition}px)`;
      bottomRow.style.transform = `translateX(${bottomPosition}px)`;

      // Reset positions when fully scrolled
      const containerWidth = topRow.scrollWidth / 2;
      if (Math.abs(topPosition) >= containerWidth) {
        topPosition = 0;
      }
      if (Math.abs(bottomPosition) >= containerWidth) {
        bottomPosition = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [items]);

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
  <div className="bg-white py-16">
    <p className="text-center text-gray-600 mb-1 text-lg">
    Our journey ever since we started,</p>
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-16">Our journey </h2>
    {/* Tagline */}
    <p className="text-center text-gray-600 mb-5 text-lg px-4 sm:px-6 lg:px-8">Our journey began with a simple belief that every event deserves to be extraordinary. We understood that behind every celebration, there's a unique story waiting to be told. And we dedicated ourselves to becoming the masters of those narratives. (photos of past events, showcasing diversity of events hosted in the past) Over the years, we've had the privilege of transforming countless visions into breathtaking realities. From intimate gatherings to grand-scale productions, our portfolio reflects our unwavering commitment to excellence. We've managed events that have broken attendance records, launched groundbreaking products.</p>
    
    <div className="w-full overflow-hidden relative">
        <div 
            ref={scrollContainerRef}
            className="flex flex-col space-y-4"
        >
            {/* Content dynamically added via JavaScript */}
        </div>
    </div>

    <FullscreenModal />
</div>
  );
};

// Example usage
const App = () => {
  const galleryItems = [
    { type: 'image', src: '/img1.jpg' },
 
    { type: 'image', src: '/img2.jpg' },
    { type: 'video', src: '/vid2.mp4' },
    { type: 'video', src: '/vid1.mp4' },
    { type: 'video', src: '/vid3.mp4' },
    { type: 'image', src: '/img3.jpg' },
    // Add more items as needed
  ];

  return <MasonryGallery items={galleryItems} />;
};

export default App;