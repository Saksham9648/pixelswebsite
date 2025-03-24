import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Create particle elements
    for (let i = 0; i < 50; i++) {
      const span = document.createElement("span");
      
      // Random positioning and size
      span.style.left = `${Math.random() * 100}vw`;
      span.style.top = `${Math.random() * 100}vh`;
      const size = Math.random() * 8 + 2;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      
      // Random animation timing
      span.style.animationDelay = `${Math.random() * 15}s`;
      span.style.animationDuration = `${Math.random() * 15 + 15}s`;
      
      // Add styling
      span.style.position = "absolute";
      span.style.background = "rgba(138, 43, 226, 0.2)";
      span.style.borderRadius = "50%";
      span.style.animation = "move 15s linear infinite";
      
      // Append to container
      backgroundRef.current.appendChild(span);
    }

    // Define animation keyframes in a style element
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes move {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(100vw);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleElement);

    // Clean up
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <motion.div
      ref={backgroundRef}
      className="absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default AnimatedBackground;
