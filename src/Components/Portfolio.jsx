import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "./Cursor";
import classes from "./Portfolio.module.css";

const videoModules = import.meta.glob("../Assets/reels/*.mp4", { eager: true });
const videoUrls = Object.values(videoModules).map(m => m.default);

const categoryPool = [
  { key: "real-estate", label: "Real Estate" },
  { key: "fashion", label: "Fashion" },
  { key: "automobiles", label: "Automobiles" },
  { key: "gym", label: "Gym" },
  { key: "food", label: "Food" },
  { key: "service", label: "Service-Based" },
  { key: "films", label: "Films" },
  { key: "corporate-events", label: "Corporate Events" },
  { key: "theatrical-ads", label: "Theatrical Ads" },
];

const titlePool = [
  "Architects and Interiors", "Property Sales", "All-in-One Fitness Equipment", "CM Silks Legacy",
  "Architect Consults With Client", "Luxury Farmhouse Architecture Ad", "Wedding Silk Sarees Collection", "Traditional Silk Saree Showcase",
  "Architectural Brand Intro", "Royal Enfield Scale Models", "Film Career Guidance Ad", "Googee Real Estate Story",
  "GT Continental Feature Video", "Hunter 350 Feature Video", "KGR Group Brand Story", "New Branch Launch Promo", "Limited-Time Offer Promo",
  "Fashion Offers Announcement", "Plot Sale Advertisement", "Food Commercial", "Andhra King Event Coverage",
  "Fitness Center Promotional Ad", "Gym Workout Highlights", "Tech Explainer", "Travel Diary",
  "Portfolio Reel", "Season Campaign", "Festival Special", "Interview Series",
  "Animation Reel", "Drone Tour", "Product Teaser", "Studio Session",
  "Celebration Reel", "Team Profile", "Live Event", "Creative Edit",
  "Ad Campaign", "Visual Essay", "Highlight Reel", "Kanakalakshmi Saree Product Ad",
  "Thirumala Silks Saree Showcase", "KGR Developers Future Projects", "Gym Equipment Feature Video", "App Features Demonstration"
];

const categoryAssignPool = [
  "real-estate",              // 1. W1 KGR Ad
  "real-estate",              // 2. T s3
  "gym",              // 3. SS 10
  "fashion",            // 4. RUKMINI SILKS (1)
  "real-estate",            // 5. RS WI
  "real-estate",            // 6. RS W2 R5D
  "fashion",            // 7. RS W2 R4 (use trendy auido)
  "fashion",            // 8. RS W2 R3
  "real-estate",            // 9. RS W2 R2
  "automobiles",            // 10. RS W2 R2f
  "service",            // 11. RS W2 R1
  "real-estate",            // 12. RS W1 R5
  "automobiles",            // 13. RS W1 R1
  "automobiles",            // 14. RS SILKS VER 2
  "real-estate",            // 15. RS 6
  "fashion",            // 16. RS 3
  "fashion",            // 17. RS 2
  "fashion",            // 18. RS 1
  "real-estate",              // 19. RK WI II
  "gym",                // 20. REBORN GYM
  "films",                // 21. REBORN GYM VER 2
  "gym",                // 22. RARE GYM AD
  "gym",              // 23. RAPO WITH MYTHRI
  "films",              // 24. R S VERTICAL
  "films",              // 25. Plot final draft
  "films",              // 26. Maguva signature R3FD
  "films",              // 27. Maguva signature R1
  "service",            // 28. KNL 2ND STORE
  "films",              // 29. KGR w22
  "automobiles",        // 30. HUNTER 350 Explainer
  "automobiles",        // 31. GT 650 Explainer
  "service",            // 32. GOOGEE VER 2
  "films",              // 33. FILM FELLOWS
  "service",            // 34. EXPLAINER VID SCALE MODELS
  "real-estate",        // 35. ER SATYA REDDY'S SREE SNCLAVE
  "real-estate",        // 36. DWELIO FARM HOUSE AD FD
  "fashion",            // 37. Dharmavaram Silks RFD
  "fashion",            // 38. Dharmavaram Silks dsdj
  "films",              // 39. DA FD
  "fashion",            // 40. CM SILKS FC
  "fashion",   // 41. bni fc
  "fashion",        // 42. AKSHADI VER 2
  "real-estate",        // 43. AKSHADI HEIGHTS-1
  "gym",                // 44. Ace Home Gym Ver 2
  "service",                // 45. ace gym reel 4
];

const colorPool = [
  "#4a1215", "#1a1a3a", "#2a1a08", "#0a2a1a", "#1a0a2a", "#2a1a12",
  "#1a2a0a", "#2a0a0a", "#0a1a2a", "#1a100a", "#2a0a1a", "#1a1808"
];

const reels = videoUrls.map((url, i) => {
  const catKey = categoryAssignPool[i % categoryAssignPool.length];
  const cat = categoryPool.find(c => c.key === catKey);
  return {
    id: i + 1,
    video: url,
    title: titlePool[i % titlePool.length],
    category: cat.key,
    cat_label: cat.label,
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
                <p>{currentReel.cat_label}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
