import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "./Cursor";
import classes from "./Portfolio.module.css";

const videoModules = import.meta.glob("../Assets/reels/*.mp4", { eager: true });
const videoUrls = Object.values(videoModules).map(m => m.default);

const categoryPool = [
  { key: "brand", label: "Brand Films" },
  { key: "corporate", label: "Corporate" },
  { key: "event", label: "Events" },
  { key: "short", label: "Short Films" },
  { key: "social", label: "Social Reels" },
];

const titlePool = [
  "Product Showcase", "Corporate Highlight", "Brand Commercial", "Event Coverage",
  "Cinematic Short", "Social Media Reel", "Gala Highlights", "Founder Story",
  "Instagram Campaign", "Mini Documentary", "Product Launch", "Wedding Cinematic",
  "Motion Reel", "Brand Story", "Behind the Scenes", "Testimonial", "Launch Event",
  "Fashion Film", "Real Estate Tour", "Food Commercial", "Fitness Promo",
  "Music Video", "Cultural Event", "Tech Explainer", "Travel Diary",
  "Portfolio Reel", "Season Campaign", "Festival Special", "Interview Series",
  "Animation Reel", "Drone Tour", "Product Teaser", "Studio Session",
  "Celebration Reel", "Team Profile", "Live Event", "Creative Edit",
  "Ad Campaign", "Visual Essay", "Highlight Reel", "Concept Film",
  "Promo Reel", "Showcase", "Feature Film", "Documentary Cut", "After Movie"
];

const durationPool = [
  "0:30", "0:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "3:00"
];

const colorPool = [
  "#4a1215", "#1a1a3a", "#2a1a08", "#0a2a1a", "#1a0a2a", "#2a1a12",
  "#1a2a0a", "#2a0a0a", "#0a1a2a", "#1a100a", "#2a0a1a", "#1a1808"
];

const reels = videoUrls.map((url, i) => {
  const cat = categoryPool[i % categoryPool.length];
  return {
    id: i + 1,
    video: url,
    title: titlePool[i % titlePool.length],
    category: cat.key,
    cat_label: cat.label,
    duration: durationPool[i % durationPool.length],
    featured: false,
    color: colorPool[i % colorPool.length],
  };
});

const categories = [
  { key: "all", label: "All" },
  ...categoryPool,
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [playKey, setPlayKey] = useState(0);
  const videoRefs = useRef({});
  const lightboxVideoRef = useRef(null);

  const filtered = filter === "all" ? reels : reels.filter(r => r.category === filter);
  const currentReel = reels.find(r => r.id === currentId);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach(v => {
      if (v) { v.pause(); }
    });
  }, []);

  const openLightbox = useCallback((id) => {
    pauseAllVideos();
    setPlayKey(k => k + 1);
    setCurrentId(id);
    setLightboxOpen(true);
  }, [pauseAllVideos]);

  const closeLightbox = useCallback(() => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
    pauseAllVideos();
    setLightboxOpen(false);
  }, [pauseAllVideos]);

  const prevReel = useCallback(() => {
    setCurrentId(prev => {
      const idx = reels.findIndex(r => r.id === prev);
      return reels[(idx - 1 + reels.length) % reels.length].id;
    });
  }, []);

  const nextReel = useCallback(() => {
    setCurrentId(prev => {
      const idx = reels.findIndex(r => r.id === prev);
      return reels[(idx + 1) % reels.length].id;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevReel();
      if (e.key === "ArrowRight") nextReel();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeLightbox, prevReel, nextReel]);

  const setVideoRef = useCallback((id, el) => {
    videoRefs.current[id] = el;
  }, []);

  const handleMouseEnter = useCallback((id) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback((id) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.pause();
    }
  }, []);

  const apertureArt = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" stroke="#c9a84c" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="28" stroke="#c9a84c" strokeWidth="1" />
      <circle cx="50" cy="50" r="14" stroke="#c9a84c" strokeWidth="0.8" />
      <path d="M50 8 L54 28 L50 26 L46 28 Z" fill="#c9a84c" />
      <path d="M78 22 L62 36 L60 30 L72 18 Z" fill="#c9a84c" />
      <path d="M92 50 L72 54 L74 50 L72 46 Z" fill="#c9a84c" />
      <path d="M78 78 L62 64 L68 62 L80 72 Z" fill="#c9a84c" />
      <path d="M50 92 L46 72 L50 74 L54 72 Z" fill="#c9a84c" />
      <path d="M22 78 L38 64 L40 70 L28 80 Z" fill="#c9a84c" />
      <path d="M8 50 L28 46 L26 50 L28 54 Z" fill="#c9a84c" />
      <path d="M22 22 L38 36 L32 38 L20 28 Z" fill="#c9a84c" />
    </svg>
  );

  return (
    <div className={classes.page}>
      <Cursor />

      <div className={classes.backLink}>
        <Link to="/">&larr; Back to Home</Link>
      </div>

      <section id="portfolio">
        <div className={classes.sectionHeader}>
          <span className={classes.sectionLabel}>Our Work</span>
          <h2 className={classes.sectionTitle}>The Reel Portfolio</h2>
          <div className={classes.sectionRule}></div>
        </div>

        <div className={classes.filterBar}>
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`${classes.filterBtn} ${filter === cat.key ? classes.active : ""}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={classes.reelGrid}>
          {filtered.map((reel, idx) => (
            <div
              key={reel.id}
              className={`${classes.reelCard} ${reel.featured ? classes.featured : ""}`}
              style={{ animationDelay: `${idx * 60}ms` }}
              onClick={() => openLightbox(reel.id)}
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={() => handleMouseLeave(reel.id)}
            >
              <div
                className={classes.reelBg}
                style={{ background: `linear-gradient(160deg,${reel.color} 0%,#1e0404 100%)` }}
              ></div>
              <video
                ref={el => setVideoRef(reel.id, el)}
                src={reel.video}
                className={classes.reelVideo}
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className={classes.reelArt}>{apertureArt()}</div>
              <div className={classes.reelOverlay}></div>
              <div className={classes.reelPlay}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5,3 21,12 5,21" fill="#c9a84c" />
                </svg>
              </div>
              <div className={classes.reelMeta}>
                <div className={classes.reelCategory}>{reel.cat_label}</div>
                <div className={classes.reelTitle}>{reel.title}</div>
                <div className={classes.reelDuration}>{reel.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={`${classes.lightbox} ${lightboxOpen ? classes.open : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
        <div className={classes.lightboxInner}>
          <button className={classes.lightboxClose} onClick={closeLightbox}>✕ &nbsp;Close</button>
          {lightboxOpen && currentReel && (
            <video
              key={`${currentReel.id}-${playKey}`}
              ref={lightboxVideoRef}
              src={currentReel.video}
              className={classes.lightboxVideo}
              controls
              autoPlay
              playsInline
            />
          )}
          <button className={`${classes.lightboxNav} ${classes.prev}`} onClick={prevReel}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button className={`${classes.lightboxNav} ${classes.next}`} onClick={nextReel}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <div className={classes.lightboxInfo}>
            {currentReel && (
              <>
                <h3>{currentReel.title}</h3>
                <p>{currentReel.cat_label} &nbsp;·&nbsp; {currentReel.duration}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
