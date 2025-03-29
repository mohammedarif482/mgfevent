import React, { useRef, useEffect, useState } from 'react';

const MasonryGallery = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const animationRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(0);

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

    // Setup manual scrolling event listeners
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      // Pause auto-scrolling while dragging
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      
      const dx = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      
      // Update positions
      topPositionRef.current += dx;
      bottomPositionRef.current += dx;
      
      // Apply transforms
      topRow.style.transform = `translateX(${topPositionRef.current}px)`;
      bottomRow.style.transform = `translateX(${bottomPositionRef.current}px)`;
      
      // Handle wrapping for infinite scroll effect
      const containerWidth = topRow.scrollWidth / 2;
      if (Math.abs(topPositionRef.current) >= containerWidth) {
        topPositionRef.current = topPositionRef.current % containerWidth;
      }
      if (Math.abs(bottomPositionRef.current) >= containerWidth) {
        bottomPositionRef.current = bottomPositionRef.current % containerWidth;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
      // Resume auto-scrolling
      startAutoScroll(topRow, bottomRow);
    };

    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        container.style.cursor = 'grab';
        // Resume auto-scrolling
        startAutoScroll(topRow, bottomRow);
      }
    };

    // Add touch support
    const handleTouchStart = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].clientX;
      // Pause auto-scrolling while dragging
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      
      const dx = e.touches[0].clientX - startXRef.current;
      startXRef.current = e.touches[0].clientX;
      
      // Update positions
      topPositionRef.current += dx;
      bottomPositionRef.current += dx;
      
      // Apply transforms
      topRow.style.transform = `translateX(${topPositionRef.current}px)`;
      bottomRow.style.transform = `translateX(${bottomPositionRef.current}px)`;
      
      // Handle wrapping for infinite scroll effect
      const containerWidth = topRow.scrollWidth / 2;
      if (Math.abs(topPositionRef.current) >= containerWidth) {
        topPositionRef.current = topPositionRef.current % containerWidth;
      }
      if (Math.abs(bottomPositionRef.current) >= containerWidth) {
        bottomPositionRef.current = bottomPositionRef.current % containerWidth;
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      // Resume auto-scrolling
      startAutoScroll(topRow, bottomRow);
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    // Set initial cursor style
    container.style.cursor = 'grab';

    // Function to start auto-scrolling
    const startAutoScroll = (topRow, bottomRow) => {
      const animate = () => {
        if (!isDraggingRef.current) {
          topPositionRef.current -= 1.5; // Top row scroll speed
          bottomPositionRef.current -= 1; // Bottom row scroll speed

          topRow.style.transform = `translateX(${topPositionRef.current}px)`;
          bottomRow.style.transform = `translateX(${bottomPositionRef.current}px)`;

          // Reset positions when fully scrolled
          const containerWidth = topRow.scrollWidth / 2;
          if (Math.abs(topPositionRef.current) >= containerWidth) {
            topPositionRef.current = 0;
          }
          if (Math.abs(bottomPositionRef.current) >= containerWidth) {
            bottomPositionRef.current = 0;
          }

          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start auto-scrolling initially
    startAutoScroll(topRow, bottomRow);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
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
        Our journey ever since we started,
      </p>
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-16">Our journey</h2>
      {/* Tagline */}
      <p className="text-center text-gray-600 mb-16 text-lg px-4 sm:px-6 lg:px-8">
        Our journey began with a simple belief that every event deserves to be extraordinary. We understood that behind every celebration, there's a unique story waiting to be told. And we dedicated ourselves to becoming the masters of those narratives. (photos of past events, showcasing diversity of events hosted in the past) Over the years, we've had the privilege of transforming countless visions into breathtaking realities. From intimate gatherings to grand-scale productions, our portfolio reflects our unwavering commitment to excellence. We've managed events that have broken attendance records, launched groundbreaking products.
      </p>
      
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