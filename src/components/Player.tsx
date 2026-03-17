import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePlayerState } from "@/hooks/PlayerContext";

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

interface PlayerProps {
  visualiser?: boolean;
  onToggleVisualiser?: () => void;
}

const Player = ({ visualiser = false, onToggleVisualiser }: PlayerProps) => {
  const {
    tracks,
    currentIndex,
    isPlaying,
    progress,
    currentTime,
    duration,
    currentTrack,
    togglePlay,
    selectTrack,
    prev,
    next,
    seek,
  } = usePlayerState();

  const [expanded, setExpanded] = useState(true);
  const hasSrc = !!currentTrack.src;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    seek((e.clientX - rect.left) / rect.width);
  };

  return (
    <motion.div
      id="player"
      className="w-full max-w-[520px] border border-foreground/15 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      {/* Controls — mobile: stacked, desktop: single row */}
      <div className="px-5 py-4 md:px-6 md:py-5">
        {/* Top row: title + time + actions */}
        <div className="flex items-center justify-between mb-3 md:hidden">
          <div className="font-display font-bold uppercase text-[10px] tracking-[0.08em] truncate flex-1 mr-3">
            {currentTrack.title}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-body text-[9px] opacity-40 tabular-nums">
              {duration > 0 ? formatTime(currentTime) : "—"}
            </span>
            {onToggleVisualiser && (
              <button onClick={onToggleVisualiser} className="opacity-40 hover:opacity-100 transition-all duration-300" aria-label="Toggle visualiser">
                <svg width="18" height="18" viewBox="0 0 8 8" fill="currentColor">
                  {visualiser ? (
                    <>
                      <rect x="0" y="0" width="3.5" height="3.5" />
                      <rect x="4.5" y="0" width="3.5" height="3.5" />
                      <rect x="0" y="4.5" width="3.5" height="3.5" />
                      <rect x="4.5" y="4.5" width="3.5" height="3.5" />
                    </>
                  ) : (
                    <circle cx="4" cy="4" r="3.5" />
                  )}
                </svg>
              </button>
            )}
            <button onClick={() => setExpanded(!expanded)} className="opacity-40 hover:opacity-100 transition-all duration-300" aria-label="Toggle tracklist">
              <svg width="18" height="18" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
                <polygon points="0,3 10,3 5,8" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom row mobile: controls + progress */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={prev} className="opacity-40 hover:opacity-100 transition-opacity duration-300" aria-label="Previous">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <rect x="0" y="0" width="1.5" height="10" />
              <polygon points="8,0 8,10 2,5" />
            </svg>
          </button>
          <button
            onClick={togglePlay}
            className={`w-[44px] h-[44px] rounded-full border border-foreground/30 flex items-center justify-center shrink-0 transition-all duration-300 ${
              hasSrc ? "hover:bg-foreground hover:text-background" : "opacity-30 cursor-default"
            }`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="12" height="14" viewBox="0 0 8 10" fill="currentColor">
                <rect x="0" y="0" width="2.5" height="10" />
                <rect x="5.5" y="0" width="2.5" height="10" />
              </svg>
            ) : (
              <svg width="12" height="14" viewBox="0 0 8 10" fill="currentColor" className="ml-[2px]">
                <polygon points="0,0 8,5 0,10" />
              </svg>
            )}
          </button>
          <button onClick={next} className="opacity-40 hover:opacity-100 transition-opacity duration-300" aria-label="Next">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <polygon points="0,0 6,5 0,10" />
              <rect x="6.5" y="0" width="1.5" height="10" />
            </svg>
          </button>
          <div className="flex-1 h-[18px] flex items-center cursor-pointer" onClick={handleSeek}>
            <div className="w-full h-[4px] bg-foreground/10 relative rounded-full">
              <div className="absolute inset-y-0 left-0 bg-foreground/50 rounded-full" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Desktop: single row (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={prev} className="opacity-40 hover:opacity-100 transition-opacity duration-300" aria-label="Previous">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <rect x="0" y="0" width="1.5" height="10" />
              <polygon points="8,0 8,10 2,5" />
            </svg>
          </button>
          <button
            onClick={togglePlay}
            className={`w-[40px] h-[40px] rounded-full border border-foreground/30 flex items-center justify-center shrink-0 transition-all duration-300 ${
              hasSrc ? "hover:bg-foreground hover:text-background" : "opacity-30 cursor-default"
            }`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="12" height="14" viewBox="0 0 8 10" fill="currentColor">
                <rect x="0" y="0" width="2.5" height="10" />
                <rect x="5.5" y="0" width="2.5" height="10" />
              </svg>
            ) : (
              <svg width="12" height="14" viewBox="0 0 8 10" fill="currentColor" className="ml-[2px]">
                <polygon points="0,0 8,5 0,10" />
              </svg>
            )}
          </button>
          <button onClick={next} className="opacity-40 hover:opacity-100 transition-opacity duration-300" aria-label="Next">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <polygon points="0,0 6,5 0,10" />
              <rect x="6.5" y="0" width="1.5" height="10" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <div className="font-display font-bold uppercase text-[10px] tracking-[0.10em] truncate text-center">
              {currentTrack.title}
            </div>
            <div className="mt-2 h-[14px] flex items-center cursor-pointer relative" onClick={handleSeek}>
              <div className="w-full h-[2.5px] bg-foreground/10 relative rounded-full">
                <div className="absolute inset-y-0 left-0 bg-foreground/50 rounded-full" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>
          </div>
          <span className="font-body text-[10px] opacity-40 tabular-nums shrink-0">
            {duration > 0 ? formatTime(currentTime) : "—"}
          </span>
          {onToggleVisualiser && (
            <button onClick={onToggleVisualiser} className="opacity-40 hover:opacity-100 transition-all duration-300 shrink-0" aria-label="Toggle visualiser">
              <svg width="14" height="14" viewBox="0 0 8 8" fill="currentColor">
                {visualiser ? (
                  <>
                    <rect x="0" y="0" width="3.5" height="3.5" />
                    <rect x="4.5" y="0" width="3.5" height="3.5" />
                    <rect x="0" y="4.5" width="3.5" height="3.5" />
                    <rect x="4.5" y="4.5" width="3.5" height="3.5" />
                  </>
                ) : (
                  <circle cx="4" cy="4" r="3.5" />
                )}
              </svg>
            </button>
          )}
          <button onClick={() => setExpanded(!expanded)} className="opacity-40 hover:opacity-100 transition-all duration-300 shrink-0" aria-label="Toggle tracklist">
            <svg width="14" height="14" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
              <polygon points="0,3 10,3 5,8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible tracklist */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-foreground/10 pt-4 pb-4 md:pt-5 md:pb-5 text-center font-display font-bold uppercase tracking-[0.10em] text-[9px] md:text-[10px] leading-[2.2]">
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-current text-[8px] mb-2 opacity-50">A</span>
              {tracks.filter((t) => t.side === "A").map((track, i) => (
                <button
                  key={track.title}
                  onClick={() => selectTrack(i)}
                  className={`block w-full transition-opacity duration-300 cursor-pointer ${i === currentIndex ? "opacity-100" : "opacity-35 hover:opacity-70"}`}
                >
                  {track.title}
                </button>
              ))}
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-current text-[8px] mt-4 mb-2 opacity-50">B</span>
              {tracks.filter((t) => t.side === "B").map((track) => {
                const idx = tracks.indexOf(track);
                return (
                  <button
                    key={track.title}
                    onClick={() => selectTrack(idx)}
                    className={`block w-full transition-opacity duration-300 cursor-pointer ${idx === currentIndex ? "opacity-100" : "opacity-35 hover:opacity-70"}`}
                  >
                    {track.title}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Player;
