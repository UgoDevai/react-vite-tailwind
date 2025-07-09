import { useState, useEffect } from 'react'

function HeroCarousel({ language }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  
  // Hero carousel images
  const heroImages = [
    { 
      id: 1,
      src: '/1.jpg',
      title: language === 'th' ? 'บ้านที่ดินเพื่อคุณ' : 'Modern Style House'
    },
    {
      id: 2,
      src: '/2.jpg',
      title: language === 'th' ? 'คิดจะมีบ้าน คิดถึงเรา' : 'Contemporary Style House'
    }
  ]
  
  const content = {
    th: {
      title: '"Land For You" ยินดีต้อนรับ',
      subtitle: ''
    },
    en: {
      title: '"Land For You" Welcome',
      subtitle: ''
    }
  }

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % heroImages.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + heroImages.length) % heroImages.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Handle scrubbing (dragging across indicators)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setShowBackground(true);
    handleScrub(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleScrub(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setShowBackground(false), 1000);
  };

  const handleScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const index = Math.round((x / width) * (heroImages.length - 1));
    
    if (index >= 0 && index < heroImages.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Handle touch events for mobile scrubbing
  const handleTouchStart = (e) => {
    try {
      setIsDragging(true);
      setShowBackground(true);
      handleTouchScrub(e);
    } catch (error) {
      console.warn('Touch start error:', error);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      // Only prevent default if we're actually dragging and not scrolling
      if (Math.abs(e.touches[0]?.clientX - (e.currentTarget?.getBoundingClientRect()?.left || 0)) > 10) {
        try {
          e.preventDefault();
          handleTouchScrub(e);
        } catch (error) {
          console.warn('Touch event prevented:', error);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setShowBackground(false), 1000);
  };

  const handleTouchScrub = (e) => {
    try {
      const touch = e.touches[0] || e.changedTouches[0];
      if (!touch || !e.currentTarget) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const width = rect.width;
      const index = Math.round((x / width) * (heroImages.length - 1));
      
      if (index >= 0 && index < heroImages.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    } catch (error) {
      console.warn('Touch scrub error:', error);
    }
  };

  // Auto rotation with pause during interaction
  useEffect(() => {
    if (isDragging) return; // Pause auto-rotation during scrubbing
    
    const timer = setTimeout(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, isTransitioning, isDragging]);

  // Add global mouse events for scrubbing
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();
      
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="relative h-[70vh] md:h-[65vh] overflow-hidden">
      {/* Hero Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-linear ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Simple Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
          
          {/* Overlay - ลดความมืดลง */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h2 className="text-xl md:text-3xl font-bold mb-2">{image.title}</h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-center max-w-4xl text-white">
              {content[language].title}
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
              {content[language].subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Page Control - Apple Style */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center z-20">
        {/* Page Control Container */}
        <div 
          className={`relative transition-all duration-300 rounded-full px-4 py-3 flex items-center space-x-2 select-none ${
            showBackground || isDragging
              ? 'bg-black bg-opacity-30 backdrop-blur-md shadow-lg' 
              : 'bg-transparent hover:bg-black hover:bg-opacity-20 hover:backdrop-blur-md'
          }`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {heroImages.map((_, index) => {
            // Calculate size based on distance from active index
            const distance = Math.abs(index - activeIndex);
            let sizeClass = 'w-2 h-2'; // Default size
            
            if (index === activeIndex) {
              sizeClass = 'w-3 h-3'; // Active indicator
            } else if (distance === 1) {
              sizeClass = 'w-2.5 h-2.5'; // Adjacent indicators
            }
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ease-out ${sizeClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 rounded-full`}
                aria-label={`Go to page ${index + 1} of ${heroImages.length}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
                disabled={isTransitioning}
              >
                {/* Indicator Dot */}
                <div 
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg shadow-green-800/30 scale-100' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400 hover:from-green-700 hover:to-green-800 hover:scale-110'
                  }`}
                />
                
                {/* Ripple effect for active state */}
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-green-800 bg-opacity-40 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full"
        disabled={isTransitioning}
      >
        ❮
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full"
        disabled={isTransitioning}
      >
        ❯
      </button>
    </div>
  )
}

export default HeroCarousel
