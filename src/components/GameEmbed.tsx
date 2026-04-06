'use client';

import { useState } from 'react';

export function GameEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex-1 relative glow border border-[#00F0FF22] rounded-sm overflow-hidden"
      style={{ height: '70vh' }}
    >
      {/* Fallback — visible until iframe loads, or if it fails */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/brand/og_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: loaded && !failed ? 0 : 1,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Offline label — only when failed */}
      {failed && (
        <div className="absolute inset-0 flex items-end justify-center pb-6 z-10 pointer-events-none">
          <span className="text-[10px] tracking-widest text-[#00F0FF] opacity-60 bg-[#050505cc] px-4 py-1">
            // OFFLINE — TUNNEL INACTIVO
          </span>
        </div>
      )}

      <iframe
        src="https://play.ultragresion.com/play"
        className="w-full h-full relative"
        style={{
          zIndex: 1,
          opacity: loaded && !failed ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        title="Command Center — Ultragresion"
        allow="fullscreen"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />

      {/* Scanlines */}
      <div className="scanlines" style={{ zIndex: 2 }} />
    </div>
  );
}
