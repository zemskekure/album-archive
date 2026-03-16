import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface ThumbnailProps {
  frames: string[];
  metadata?: string;
  className?: string;
  aspectRatio?: "portrait" | "square";
  delay?: number;
}

const Thumbnail = ({
  frames,
  metadata,
  className = "",
  aspectRatio = "portrait",
  delay = 0,
}: ThumbnailProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (!isHovering || frames.length <= 1) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 220);

    return () => clearInterval(interval);
  }, [isHovering, frames.length]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setFrameIndex(0);
  }, []);

  const aspect = aspectRatio === "square" ? "aspect-square" : "aspect-[3/4]";

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
      <div className={`${aspect} w-full overflow-hidden shadow-paper relative`}>
        <img
          src={frames[frameIndex]}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-200"
          draggable={false}
        />
        <div className="absolute inset-0 bg-foreground/[0.02]" />
      </div>
      {metadata && (
        <p className="mt-2 text-meta-sm text-muted-foreground opacity-50">
          {metadata}
        </p>
      )}
    </motion.div>
  );
};

export default Thumbnail;
