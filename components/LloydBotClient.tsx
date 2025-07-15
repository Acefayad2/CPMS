"use client";

import { useEffect, useRef } from "react";

export default function LloydBotClient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !ref.current.querySelector("spline-viewer")) {
      const el = document.createElement("spline-viewer");
      el.setAttribute("url", "https://prod.spline.design/zhwaVJo3uFvBeRDb/scene.splinecode");
      el.style.width = "100%";
      el.style.height = "100%";
      el.style.border = "none";
      ref.current.appendChild(el);
    }
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