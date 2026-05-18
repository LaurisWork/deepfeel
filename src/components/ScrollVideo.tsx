import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

interface ScrollVideoProps {
  src: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

const ScrollVideo = ({ src, className = "", objectFit = "cover" }: ScrollVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [userPaused]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setUserPaused(false);
    video.play().catch(() => {});
  };

  return (
    <div className={`relative w-full h-full group ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={`absolute inset-0 w-full h-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={restart}
          aria-label="Nochmal abspielen"
          className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full hover:scale-105 transition-transform"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Ton an" : "Ton aus"}
          className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full hover:scale-105 transition-transform"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ScrollVideo;
