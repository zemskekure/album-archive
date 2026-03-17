import { motion } from "framer-motion";
import { usePlayerState } from "@/hooks/PlayerContext";

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const MiniPlayer = () => {
  const {
    isPlaying,
    progress,
    currentTime,
    duration,
    currentTrack,
    togglePlay,
    prev,
    next,
    seek,
  } = usePlayerState();

  const hasSrc = !!currentTrack.src;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    seek((e.clientX - rect.left) / rect.width);
  };

  return (
    <motion.div
      className="fixed bottom-5 left-1/2 z-50"
      initial={{ y: 80, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      exit={{ y: 80, x: "-50%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="bg-background border border-foreground/15 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-4 py-2.5 md:px-5 md:py-3 flex items-center gap-3 min-w-[280px] max-w-[360px]">
        <button onClick={prev} className="opacity-40 hover:opacity-100 transition-opacity duration-300 shrink-0">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
            <rect x="0" y="0" width="1.5" height="10" />
            <polygon points="8,0 8,10 2,5" />
          </svg>
        </button>

        <button
          onClick={togglePlay}
          className={`w-[28px] h-[28px] rounded-full border border-foreground/30 flex items-center justify-center shrink-0 transition-all duration-300 ${
            hasSrc ? "hover:bg-foreground hover:text-background" : "opacity-30"
          }`}
        >
          {isPlaying ? (
            <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
              <rect x="0" y="0" width="2.5" height="10" />
              <rect x="5.5" y="0" width="2.5" height="10" />
            </svg>
          ) : (
            <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" className="ml-[1px]">
              <polygon points="0,0 8,5 0,10" />
            </svg>
          )}
        </button>

        <button onClick={next} className="opacity-40 hover:opacity-100 transition-opacity duration-300 shrink-0">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
            <polygon points="0,0 6,5 0,10" />
            <rect x="6.5" y="0" width="1.5" height="10" />
          </svg>
        </button>

        <div className="flex-1 min-w-0">
          <div className="font-display font-bold uppercase text-[7px] md:text-[8px] tracking-[0.04em] truncate">
            {currentTrack.title}
          </div>
          <div className="mt-1 h-[8px] flex items-center cursor-pointer" onClick={handleSeek}>
            <div className="w-full h-[1.5px] bg-foreground/10 relative">
              <div className="absolute inset-y-0 left-0 bg-foreground/50" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>

        <span className="font-body text-[7px] opacity-40 tabular-nums shrink-0">
          {duration > 0 ? formatTime(currentTime) : "—"}
        </span>
      </div>
    </motion.div>
  );
};

export default MiniPlayer;
