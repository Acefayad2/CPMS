"use client";

import { useEffect } from "react";

export default function GlobalSplineLoader() {
  useEffect(() => {
    if (!document.querySelector('script[src*="spline-viewer@0.9.491"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@0.9.491/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return null;
} 