import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export const useLenis = () => {
  useEffect(() => {
    // สร้าง Lenis instance เพียงครั้งเดียว
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing แบบเดียวกับ CodePen
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // ฟังก์ชัน animation loop
      const raf = (time) => {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      // เพิ่ม CSS class สำหรับ Lenis
      document.documentElement.classList.add('lenis', 'lenis-smooth');
    }

    return () => {
      // ไม่ทำลาย instance เพื่อให้ smooth scrolling ทำงานต่อเนื่อง
    };
  }, []);

  return lenisInstance;
};

// Function สำหรับ scroll to element
export const scrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  }
};

// Function สำหรับหยุด/เริ่ม smooth scrolling
export const stopLenis = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

export const startLenis = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

// Function สำหรับได้ instance
export const getLenisInstance = () => {
  return lenisInstance;
};
