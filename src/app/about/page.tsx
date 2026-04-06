import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ultragresion — About',
  description: 'Federico Gutiérrez — AI architect, backend systems developer, game builder. Builder of autonomous agentic ecosystems, isometric games, and AI infrastructure.',
};

const SOCIAL = [
  { label: 'Blog', href: 'https://ultragresion.blogspot.com/' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/ultragresion/tracks' },
  { label: 'Instagram', href: 'https://www.instagram.com/ultragresion/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-guti%C3%A9rrez-correa-0b0187144/' },
];

const STACK = [
  'Python, TypeScript, SQLite, FastMCP',
  'Next.js, Flask, SocketIO',
  'Agent architecture, Clean/Hexagonal Architecture',
  'Cloudflare, Linux, macOS',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <Link href="/" className="text-xs text-slate-500 hover:text-[#00F0FF] tracking-widest mb-8 block">
        ← HOME
      </Link>

      <div className="accent-line mb-10" />

      {/* IDENTIDAD */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">&gt; IDENTIDAD</p>
        <h1 className="text-2xl font-bold tracking-widest text-white uppercase mb-2">
          Ultragresion
        </h1>
        <p className="text-sm text-[#00F0FF] tracking-wide opacity-80">
          Federico Gutiérrez — AI architect · Backend developer · Sound producer
        </p>
        <p className="text-xs text-slate-500 mt-1 tracking-widest">Medellín, Colombia</p>
      </section>

      <div className="accent-line mb-10" />

      {/* STACK */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// STACK</p>
        <ul className="flex flex-col gap-2">
          {STACK.map((item) => (
            <li key={item} className="text-sm text-slate-300 flex items-start gap-3">
              <span className="text-[#00F0FF] opacity-70 select-none">·</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="accent-line mb-10" />

      {/* LO QUE CONSTRUYO */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// LO QUE CONSTRUYO</p>
        <div className="flex flex-col gap-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Construyo ecosistemas autónomos. Mi proyecto central — Command Center — corre 85 agentes activos que gestionan proyectos, auditan dependencias, generan código y coordinan flujos de trabajo sin intervención humana constante.
          </p>
          <p>
            También construyo juegos isométricos multijugador, donde la infraestructura de agentes y el motor de juego coexisten en el mismo sistema. Cada pieza tiene propósito técnico y estético.
          </p>
          <p>
            Además de eso: infraestructura de AI, pipelines de publicación personal, y producción musical. Todo conectado bajo la misma arquitectura.
          </p>
        </div>
      </section>

      <div className="accent-line mb-10" />

      {/* REDES */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// REDES</p>
        <ul className="flex flex-col gap-3">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-[#00F0FF] transition-colors tracking-wide"
              >
                <span className="text-slate-600 mr-2">[{s.label}]</span>
                <span className="text-[#00F0FF] opacity-60 mr-2">→</span>
                <span className="underline underline-offset-4 decoration-white/10 hover:decoration-[#00F0FF44]">
                  {s.href}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="accent-line mb-10" />

      {/* COMMAND CENTER */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// COMMAND CENTER</p>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Command Center es mi sistema operativo personal — un ecosistema de 85 agentes autónomos que gestiona proyectos, genera código, audita dependencias y corre este juego isométrico en tiempo real.
        </p>
        <a
          href="https://play.ultragresion.com/play"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#00F0FF] tracking-widest hover:opacity-80 transition-opacity"
        >
          → play.ultragresion.com/play
        </a>
      </section>
    </main>
  );
}
