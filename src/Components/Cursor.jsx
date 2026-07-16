import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
    };
    document.addEventListener("mousemove", handleMouse);

    const animate = () => {
      const p = posRef.current;
      p.rx += (p.mx - p.rx) * 0.1;
      p.ry += (p.my - p.ry) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.left = p.mx + "px";
        cursorRef.current.style.top = p.my + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + "px";
        ringRef.current.style.top = p.ry + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "20px";
        cursorRef.current.style.height = "20px";
        cursorRef.current.style.background = "#e8cc80";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "52px";
        ringRef.current.style.height = "52px";
        ringRef.current.style.opacity = "1";
      }
    };
    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "12px";
        cursorRef.current.style.height = "12px";
        cursorRef.current.style.background = "#c9a84c";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.opacity = "0.6";
      }
    };

    const interactiveEls = document.querySelectorAll("a, button, [data-cursor-interactive]");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor-interactive]").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.querySelectorAll("a, button, [data-cursor-interactive]").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-ring" ref={ringRef}></div>
    </>
  );
}

export default Cursor;
