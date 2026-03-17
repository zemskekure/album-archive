import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface Track {
  readonly title: string;
  readonly side: "A" | "B";
  readonly src?: string;
}

const tracks: readonly Track[] = [
  { title: "MIESTA NA MAPE", side: "A", src: "songs/miesta-na-mape.mp3" },
  { title: "TIGER", side: "A", src: "songs/tiger.mp3" },
  { title: "HA HA", side: "A", src: "songs/ha-ha.mp3" },
  { title: "ZASTAV", side: "A", src: "songs/zastav.mp3" },
  { title: "LAMENT", side: "B", src: "songs/lament.mp3" },
  { title: "ODOVZDAJ SA MI", side: "B", src: "songs/odovzdaj-sa-mi.mp3" },
  { title: "ASI MA MÁŠ", side: "B", src: "songs/asi-ma-mas.mp3" },
  { title: "ZVONY BIJÚ NA POPLACH", side: "B", src: "songs/zvony-biju-na-poplach.mp3" },
];

interface PlayerContextType {
  tracks: readonly Track[];
  currentIndex: number;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  currentTrack: Track;
  hasPlayed: boolean;
  togglePlay: () => void;
  selectTrack: (index: number) => void;
  prev: () => void;
  next: () => void;
  seek: (ratio: number) => void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress(audio.currentTime / audio.duration);
      setCurrentTime(audio.currentTime);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setCurrentIndex((prev) => {
        if (prev < tracks.length - 1) return prev + 1;
        setIsPlaying(false);
        setProgress(0);
        return prev;
      });
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, []);

  // Load track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const src = tracks[currentIndex].src;
    if (src) {
      const base = import.meta.env.BASE_URL;
      audio.src = `${base}${src}`;
      setDuration(0);
      setProgress(0);
      setCurrentTime(0);
      if (isPlaying) audio.play();
    }
  }, [currentIndex]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !tracks[currentIndex].src) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
      setHasPlayed(true);
    }
  }, [isPlaying, currentIndex]);

  const selectTrack = useCallback((index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentIndex(index);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    const src = tracks[index].src;
    if (src) {
      const base = import.meta.env.BASE_URL;
      audio.src = `${base}${src}`;
      audio.play();
      setIsPlaying(true);
      setHasPlayed(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const prev = useCallback(() => {
    const idx = currentIndex > 0 ? currentIndex - 1 : tracks.length - 1;
    selectTrack(idx);
  }, [currentIndex, selectTrack]);

  const next = useCallback(() => {
    const idx = currentIndex < tracks.length - 1 ? currentIndex + 1 : 0;
    selectTrack(idx);
  }, [currentIndex, selectTrack]);

  const seek = useCallback((ratio: number) => {
    const audio = audioRef.current;
    if (audio?.duration) {
      audio.currentTime = ratio * audio.duration;
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        tracks,
        currentIndex,
        isPlaying,
        progress,
        currentTime,
        duration,
        currentTrack: tracks[currentIndex],
        hasPlayed,
        togglePlay,
        selectTrack,
        prev,
        next,
        seek,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerState = () => useContext(PlayerContext);
