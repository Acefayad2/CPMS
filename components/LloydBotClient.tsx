"use client";

import { useEffect, useRef } from "react";

export default function LloydBotClient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Spline viewer script if not already present
    const scriptId = "spline-viewer-loader";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.29/build/spline-viewer.js";
      document.body.appendChild(script);
    }
    // Create the spline-viewer element after script is loaded
    const interval = setInterval(() => {
      if (window.customElements && customElements.get("spline-viewer")) {
        if (ref.current && !ref.current.querySelector("spline-viewer")) {
          const el = document.createElement("spline-viewer");
          el.setAttribute("url", "https://prod.spline.design/zhwaVJo3uFvBeRDb/scene.splinecode");
          el.style.width = "100%";
          el.style.height = "100%";
          el.style.border = "none";
          ref.current.appendChild(el);
        }
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        width: 300,
        height: 300,
        pointerEvents: "auto",
      }}
    />
  );
} 