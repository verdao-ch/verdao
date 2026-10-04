"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-[#0d0d0d] border-t border-[#0d0d0d]/10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-sm text-[#0d0d0d]/70">
          This website uses cookies to ensure you receive the best experience.
        </p>
        <button
          onClick={accept}
          className="px-8 py-2 bg-[#0d0d0d] text-white rounded-lg font-bold text-sm hover:bg-[#333] transition-colors duration-300"
        >
          Accept
        </button>
      </div>
    </div>
  );
}