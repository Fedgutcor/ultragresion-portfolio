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
          Innovación y creatividad
          <span className="blink-cursor">_</span>
        </p>
      </header>

      <div className="accent-line mb-8" />

      {/* Game — centerpiece */}
      <section className="flex-1 flex flex-col items-center gap-4">
        <p className="text-[10px] tracking-widest text-[#00F0FF] opacity-60 mb-2 self-start">
          // COMMAND CENTER — LIVE
        </p>

        {/* Banner de bienvenida */}
        <a
          href="https://play.ultragresion.com/play"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block group glow border border-[#00F0FF22] hover:border-[#00F0FF55] transition-all overflow-hidden rounded-sm"
        >
          <img
            src="/brand/og_banner.png"
            alt="Command Center"
            className="w-full object-cover"
            style={{ maxHeight: '60vh' }}
          />
          <div className="flex items-center justify-center py-3 bg-[#050505] border-t border-[#00F0FF11]">
            <span className="text-xs tracking-widest text-[#00F0FF] group-hover:opacity-80 transition-opacity">
              ENTRAR AL JUEGO ↗
            </span>
          </div>
        </a>

        {/* Social strip */}
        <div className="flex gap-6 justify-center">
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
      </section>

      <div className="accent-line mt-8 mb-6" />

      {/* Footer status bar */}
      <footer className="text-center text-[10px] text-slate-600">
        © {year} Ultragresion · Medellín
      </footer>
    </main>
  );
}
