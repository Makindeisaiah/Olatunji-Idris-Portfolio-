import { useState, useRef, useEffect, DragEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Clapperboard, 
  ArrowUpRight, 
  PlusCircle, 
  CheckCircle2, 
  Film, 
  UploadCloud, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_INFO, HEADSHOTS, ACTING_PROJECTS, ASSETS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ActingProps {
  onOpenImage: (image: string, title: string, caption?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Acting({ onOpenImage, onSelectProject, onNavigate }: ActingProps) {
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // muted initially to guarantee browser autoplay works
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoFileName, setVideoFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Theatrical' | 'Commercial' | 'Dramatic' | 'Editorial'>('All');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredHeadshots = selectedFilter === 'All'
    ? HEADSHOTS
    : HEADSHOTS.filter((h) => h.type === selectedFilter);

  // Handle uploaded video file
  const loadVideoFile = (file: File) => {
    if (!file.type.startsWith('video/') && !file.name.match(/\.(mp4|webm|ogg|mov|m4v)$/i)) {
      alert('Please upload a valid video file (.mp4, .webm, .mov, etc.)');
      return;
    }
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
    setVideoFileName(file.name);
    setIsPlayingReel(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Only turn off if leaving container
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      loadVideoFile(file);
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      loadVideoFile(file);
    }
  };

  // Video playback effect
  useEffect(() => {
    if (videoRef.current) {
      if (isPlayingReel) {
        videoRef.current.play().catch(() => {
          // Autoplay policy might need muted on first attempt
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch((err) => console.log('Video play error:', err));
          }
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlayingReel, videoSrc]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlayingReel) {
        videoRef.current.pause();
        setIsPlayingReel(false);
      } else {
        videoRef.current.play().catch((err) => console.log('Video play error:', err));
        setIsPlayingReel(true);
      }
    } else {
      setIsPlayingReel(!isPlayingReel);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen().catch((err) => console.log('Fullscreen error:', err));
      }
    }
  };

  const handleResetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoSrc(null);
    setVideoFileName(null);
    setIsPlayingReel(false);
    setCurrentTime(0);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="acting" className="relative py-28 px-6 sm:px-12 bg-[#09090b] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-3">
            02 / Screen & Theatrical
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {PORTFOLIO_INFO.acting.title}
          </h2>
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-zinc-300 font-light max-w-2xl">
            “{PORTFOLIO_INFO.acting.intro}”
          </p>
          <div className="w-16 h-[2px] bg-zinc-700 mt-6" />
        </div>

        {/* 1. Acting Profile */}
        <div className="mb-24 bg-[#0c0c0e] border border-zinc-800 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase block mb-2">
                Performer Dossier
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                Acting Profile
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-zinc-800 text-zinc-300 px-2.5 py-1 border border-zinc-700">
                  Drama & Realism
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-zinc-800 text-zinc-300 px-2.5 py-1 border border-zinc-700">
                  Physicality
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-zinc-800 text-zinc-300 px-2.5 py-1 border border-zinc-700">
                  Voice & Subtext
                </span>
              </div>
            </div>
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-10">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans-clean">
                {PORTFOLIO_INFO.acting.profile}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Available for Casting & Feature Auditions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Headshots Gallery */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase block mb-1">
                Casting Presentation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                Headshots
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {(['All', 'Theatrical', 'Commercial', 'Dramatic', 'Editorial'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                    selectedFilter === cat
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHeadshots.map((headshot) => (
              <motion.div
                key={headshot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  onOpenImage(
                    headshot.image,
                    headshot.title,
                    `${headshot.type} Casting Headshot • ${headshot.year}`
                  )
                }
                className="group relative cursor-pointer overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-zinc-400 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={headshot.image}
                    alt={headshot.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[105%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Type Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-zinc-300 px-2 py-0.5 border border-zinc-800 backdrop-blur-sm">
                      {headshot.type}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-semibold text-white">
                        {headshot.title}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-mono">Click to view full</p>
                    </div>
                    <span className="p-1 bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-right text-[11px] font-mono text-zinc-500 mt-3">
            *High-resolution print-ready headshots available for casting upon request
          </p>
        </div>

        {/* 3. Acting Reel */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase block mb-1">
                Screen Performance
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                Acting Reel
              </h3>
            </div>

            {/* Video File Actions */}
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*,.mp4,.webm,.mov,.m4v"
                onChange={handleFileInputChange}
                className="hidden"
                id="acting-reel-file-input"
              />

              {videoSrc ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 border border-zinc-800 truncate max-w-[200px]">
                    {videoFileName}
                  </span>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Replace</span>
                  </button>
                  <button
                    onClick={handleResetVideo}
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Reset to default cover"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              ) : (
                <button
                  id="acting-reel-browse-btn"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <UploadCloud className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span>Upload Video Reel</span>
                </button>
              )}
            </div>
          </div>

          {/* Reel Interactive Player & Drag-and-Drop Target */}
          <div
            ref={containerRef}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative bg-zinc-950 border transition-all duration-300 overflow-hidden shadow-2xl group/reel ${
              isDragging
                ? 'border-white ring-2 ring-white/40 scale-[1.005]'
                : 'border-zinc-800 hover:border-zinc-600'
            }`}
          >
            {/* Drag & Drop Visual Overlay */}
            <AnimatePresence>
              {isDragging && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center border-2 border-dashed border-white p-6 text-center pointer-events-none"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-xl"
                  >
                    <UploadCloud className="w-8 h-8" />
                  </motion.div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wider mb-1">
                    Drop Video File to Autoplay
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
                    Supports .mp4, .webm, .mov video files. Reel will begin playing immediately upon drop.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video or Poster Frame */}
            <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center bg-black">
              {videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlayingReel(true)}
                  onPause={() => setIsPlayingReel(false)}
                  onClick={togglePlay}
                />
              ) : (
                <>
                  <img
                    src={ASSETS.actingReelCover}
                    alt="Olatunji Idris Acting Reel Cover"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover filter contrast-[110%] transition-opacity duration-500 ${
                      isPlayingReel ? 'opacity-30' : 'opacity-85'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                  {/* Central Play/State Display when no video uploaded yet */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <button
                      id="acting-reel-play-button"
                      onClick={togglePlay}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer group mb-4"
                      aria-label={isPlayingReel ? 'Pause Reel' : 'Play Reel'}
                    >
                      {isPlayingReel ? (
                        <Pause className="w-8 h-8 fill-black" />
                      ) : (
                        <Play className="w-8 h-8 fill-black translate-x-0.5" />
                      )}
                    </button>

                    <p className="font-display text-lg sm:text-2xl font-bold uppercase text-white tracking-wider">
                      {isPlayingReel ? 'Showreel Preview Active' : 'Olatunji Idris — Theatrical Reel'}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 font-mono tracking-wide max-w-md mt-1">
                      Dramatic scenes, monologue dynamics, and screen presence showcase (2026)
                    </p>

                    {/* Drag-and-drop prompt badge inside player */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-6 px-4 py-2.5 bg-zinc-900/85 hover:bg-zinc-800/95 border border-zinc-700/80 text-xs font-mono text-zinc-300 flex items-center gap-2.5 cursor-pointer backdrop-blur-sm transition-all hover:border-zinc-400"
                    >
                      <UploadCloud className="w-4 h-4 text-white animate-pulse" />
                      <span>Drag & drop a video file here to autoplay reel, or click to browse</span>
                    </div>
                  </div>
                </>
              )}

              {/* Top Bar Details */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/85 text-zinc-300 px-2.5 py-1 border border-zinc-800 backdrop-blur-sm">
                    {videoSrc ? 'Custom Reel Loaded' : 'Acting Reel Showcase'}
                  </span>
                  {videoSrc && isPlayingReel && (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase bg-emerald-950 text-emerald-400 px-2 py-0.5 border border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Autoplaying
                    </span>
                  )}
                </div>

                {isMuted && videoSrc && (
                  <button
                    onClick={toggleMute}
                    className="pointer-events-auto text-[11px] font-mono bg-black/80 hover:bg-white text-zinc-300 hover:text-black px-3 py-1 border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                    <span>Muted (Click to unmute)</span>
                  </button>
                )}
              </div>

              {/* Video Player Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col gap-2 z-20">
                {/* Progress Scrub Bar (when video loaded) */}
                {videoSrc && duration > 0 && (
                  <div className="w-full flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={duration}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-zinc-800 rounded-none accent-white cursor-pointer hover:h-1.5 transition-all"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-zinc-300 cursor-pointer p-1 transition-colors"
                      aria-label="Play/Pause"
                    >
                      {isPlayingReel ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-zinc-400 hover:text-white cursor-pointer p-1 transition-colors"
                      aria-label="Toggle audio"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {videoSrc ? `${formatTime(currentTime)} / ${formatTime(duration)}` : (isPlayingReel ? '01:42 / 03:15' : '00:00 / 03:15')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-red-950 text-red-400 border border-red-800 px-2 py-0.5">
                      HD 1080P
                    </span>
                    <button
                      onClick={handleFullscreen}
                      className="text-zinc-400 hover:text-white cursor-pointer p-1 transition-colors"
                      aria-label="Toggle fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick instructions under reel */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-500 gap-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              Tip: Drag and drop your reel video file anywhere onto the player above to preview and autoplay immediately.
            </span>
            <span>Audio starts muted for seamless browser autoplay — click unmute anytime</span>
          </div>
        </div>

        {/* 4. Roles & Projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase block mb-1">
                Body of Work
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                Roles & Projects
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Film className="w-4 h-4 text-zinc-300" />
              <span>Editable project cards for upcoming productions</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACTING_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col justify-between bg-[#0e0e11] border border-zinc-800/90 hover:border-zinc-500 transition-colors p-6"
              >
                <div>
                  {/* Thumbnail */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="aspect-video w-full overflow-hidden bg-zinc-900 mb-6 cursor-pointer relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-[105%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-zinc-300 px-2 py-0.5 border border-zinc-700">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono text-zinc-300 bg-black/80 px-2 py-0.5 border border-zinc-800">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                      Role: <span className="text-white font-medium">{project.role}</span>
                    </p>
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-zinc-400 font-sans-clean leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="pt-6 border-t border-zinc-800 mt-6 flex items-center justify-between">
                  <button
                    id={`view-project-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-black text-xs font-mono uppercase tracking-[0.18em] font-semibold border border-zinc-700 hover:border-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Helper notice for adding projects */}
          <div className="mt-12 p-5 bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <PlusCircle className="w-5 h-5 text-zinc-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-mono text-zinc-300 font-medium">
                  Adding new acting projects & casting credits
                </p>
                <p className="text-[11px] text-zinc-500 font-sans-clean">
                  All projects are structured in <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>. You can easily add title, role, year, and description.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-mono tracking-wider uppercase text-white hover:underline cursor-pointer flex-shrink-0"
            >
              Request Casting Packet →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
