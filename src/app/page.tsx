const SOCIAL = [
  { label: 'Blog', href: 'https://ultragresion.blogspot.com/', icon: '✍' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/ultragresion/tracks', icon: '◎' },
  { label: 'Instagram', href: 'https://www.instagram.com/ultragresion/', icon: '◈' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-guti%C3%A9rrez-correa-0b0187144/', icon: '⬡' },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen flex flex-col px-6 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-widest text-white uppercase">
          Ultragresion
        </h1>
        <p className="text-xs text-[#00F0FF] tracking-[0.3em] mt-1 opacity-80">
          AI architect · Game builder · Signal emitter
          <span className="blink-cursor">_</span>
        </p>
      </header>

      <div className="accent-line mb-8" />

      {/* Game — centerpiece */}
      <section className="flex-1 flex flex-col items-center gap-4">
        <p className="text-[10px] tracking-widest text-[#00F0FF] opacity-60 mb-2 self-start">
          // COMMAND CENTER — LIVE
        </p>

        <div className="w-full flex gap-4 items-stretch">
          {/* iframe wrapper */}
          <div
            className="flex-1 relative glow border border-[#00F0FF22] rounded-sm overflow-hidden"
            style={{ height: '70vh' }}
          >
            {/* Fallback — shown while iframe loads or if offline */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: 'url(/brand/og_banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
              }}
            />
            <iframe
              src="https://play.ultragresion.com/play"
              className="w-full h-full relative"
              style={{ zIndex: 1 }}
              title="Command Center — Ultragresion"
              allow="fullscreen"
            />
            {/* scanline overlay */}
            <div className="scanlines" />
          </div>

          {/* Social strip — desktop only */}
          <div className="hidden md:flex flex-col items-center justify-center gap-5 pl-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="text-xs text-slate-500 hover:text-[#00F0FF] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <a
          href="https://play.ultragresion.com/play"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest text-[#00F0FF] border border-[#00F0FF44] px-6 py-2 hover:border-[#00F0FF] hover:bg-[#00F0FF0D] transition-all"
        >
          ENTRAR AL JUEGO ↗
        </a>
      </section>

      <div className="accent-line mt-8 mb-6" />

      {/* Footer status bar */}
      <footer className="text-center text-[10px] text-slate-600">
        © {year} Ultragresion · Medellín
      </footer>
    </main>
  );
}
