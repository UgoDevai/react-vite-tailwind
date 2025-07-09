import { useEffect, useRef, useState } from 'react';

function BlurScroll({ content }) {
  const blurRef = useRef(null);
  const ulRef = useRef(null);
  const [debug] = useState(false);
  
  useEffect(() => {
    if (!blurRef.current) return;
    
    // ตั้งค่า CSS variables
    const config = {
      layers: 5,
      blur: 40,
      mask: 25,
      padding: 50,
      saturate: 1.0  // เปลี่ยนจาก 0.1 เป็น 1.0 เพื่อให้รูปมีสีธรรมชาติ
    };
    
    // กำหนดค่าตัวแปร CSS
    document.documentElement.dataset.debug = debug ? 'true' : 'false';
    document.documentElement.style.setProperty('--layers', config.layers);
    document.documentElement.style.setProperty('--blur-max', config.blur);
    document.documentElement.style.setProperty('--mask-stop', config.mask);
    document.documentElement.style.setProperty('--padding', config.padding);
    document.documentElement.style.setProperty('--saturate', config.saturate);
    
    // สร้าง divs สำหรับ blur layers
    blurRef.current.innerHTML = '';
    for (let i = 0; i < config.layers; i++) {
      const div = document.createElement('div');
      div.style.setProperty('--i', i + 1);
      blurRef.current.appendChild(div);
    }
  }, [debug]);

  // Scroll to center on mobile after component mounts
  useEffect(() => {
    if (!ulRef.current) return;
    
    const scrollToCenter = () => {
      // Only on mobile devices
      if (window.innerWidth <= 768) {
        const container = ulRef.current;
        if (container) {
          const itemWidth = 220 + 16; // width + gap
          const centerIndex = Math.floor(content.images.length / 2);
          const scrollPosition = centerIndex * itemWidth;
          
          // Immediate scroll to center without delay
          requestAnimationFrame(() => {
            container.scrollTo({
              left: scrollPosition,
              behavior: 'instant' // Use instant for immediate positioning
            });
          });
        }
      }
    };

    // Initial scroll to center
    scrollToCenter();

    // Re-center on window resize with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(scrollToCenter, 150);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [content.images.length]);

  // Use only the original 6 images without duplication
  const infiniteImages = content.images;
  
  return (
    <div className="blur-section">
      <div className="content">
        <header>
          <div className="font-mixed">
            <p className="font-english-heading">{content.heading}</p>
            <p className="font-thai-body">{content.text}</p>
            
            <a className="clear font-english-body" href={content.buttonLink || "#"}>
              {content.button}
            </a>
          </div>
          
          <div className="label"></div>
          
          <ul ref={ulRef} className="infinite-scroll">
            {infiniteImages.map((img, index) => (
              <li key={`${img.src}-${index}`}>
                <div className="image-card">
                  <img src={img.src} alt={img.alt} />
                  <div className="image-content">
                    <h3 className="image-title font-thai-heading">{img.title}</h3>
                    <p className="image-description font-thai-body">{img.description}</p>
                    <a href={img.link} className="image-link font-english-body">
                      เข้าไปดูเพิ่ม <span className="arrow">›</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <div ref={blurRef} className="blur"></div>
        </header>
      </div>
    </div>
  );
}

export default BlurScroll;
