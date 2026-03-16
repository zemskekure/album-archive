import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface ThumbnailProps {
  src: string;
  clip: string;
  className?: string;
  delay?: number;
}

const Thumbnail = ({
  src,
  clip,
  className = "",
  delay = 0,
}: ThumbnailProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  return (
    <motion.div
      className={`group cursor-default ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div className="aspect-square w-full overflow-hidden shadow-paper relative">
        <img
          src={src}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
          draggable={false}
        />
        <video
          ref={videoRef}
          src={clip}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-foreground/[0.02] pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default Thumbnail;
