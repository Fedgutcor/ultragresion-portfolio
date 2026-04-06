import Link from 'next/link';

const SOCIAL = [
  { label: 'Blog', href: 'https://ultragresion.blogspot.com/', icon: '✍' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/ultragresion/tracks', icon: '◎' },
  { label: 'Instagram', href: 'https://www.instagram.com/ultragresion/', icon: '◈' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-guti%C3%A9rrez-correa-0b0187144/', icon: '⬡' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-white uppercase">
            Ultragresion
          </h1>
          <p className="text-xs text-[#00F0FF] tracking-[0.3em] mt-1 opacity-80">
            AI architect · Game builder · Signal emitter
          </p>
        </div>
        <nav className="flex gap-4 items-center mt-1">
          {SOCIAL.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="text-sm text-slate-400 hover:text-[#00F0FF] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </nav>
      </header>

      <div className="accent-line mb-8" />

      {/* Game — centerpiece */}
      <section className="flex-1 flex flex-col items-center gap-4">
        <div
          className="w-full relative glow border border-[#00F0FF22] rounded-sm overflow-hidden"
          style={{ height: '70vh' }}
        >
          <iframe
            src="https://play.ultragresion.com/play"
            className="w-full h-full"
            title="Command Center — Ultragresion"
            allow="fullscreen"
          />
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

      {/* Bottom nav */}
      <footer className="flex gap-8 text-xs text-slate-500">
        <Link href="/blog" className="hover:text-[#00F0FF] transition-colors tracking-widest">→ BLOG</Link>
        <Link href="/projects" className="hover:text-[#00F0FF] transition-colors tracking-widest">→ PROYECTOS</Link>
        <a
          href="https://soundcloud.com/ultragresion/tracks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00F0FF] transition-colors tracking-widest"
        >
          → SONIDO
        </a>
      </footer>
    </main>
  );
}
