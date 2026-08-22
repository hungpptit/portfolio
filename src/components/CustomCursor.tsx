import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    handleElementHover();

    // Re-bind when DOM changes
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Expanding Ring */}
      <div
        className="fixed rounded-full pointer-events-none transition-transform duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '44px' : '24px',
          height: isHovered ? '44px' : '24px',
          transform: 'translate(-50%, -50%)',
          border: isHovered ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.4)',
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(212, 175, 55, 0.2)' : 'none',
        }}
      />
      {/* Center 8px Gold Dot */}
      <div
        className="fixed rounded-full pointer-events-none bg-[#D4AF37]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '4px' : '6px',
          height: isHovered ? '4px' : '6px',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </div>
  );
};
