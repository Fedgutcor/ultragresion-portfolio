import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ultragresion — About',
  description: 'Federico Gutiérrez — builder of autonomous systems, isometric worlds, and creative infrastructure.',
};

const SOCIAL = [
  {
    label: 'Blog',
    sub: 'Escritura y reflexiones',
    href: 'https://ultragresion.blogspot.com/',
    accent: '#FF6B35',
    symbol: '✍',
  },
  {
    label: 'SoundCloud',
    sub: 'Producción musical',
    href: 'https://soundcloud.com/ultragresion/tracks',
    accent: '#FF5500',
    symbol: '◎',
  },
  {
    label: 'Instagram',
    sub: 'Visuales y proceso',
    href: 'https://www.instagram.com/ultragresion/',
    accent: '#C13584',
    symbol: '◈',
  },
  {
    label: 'LinkedIn',
    sub: 'Perfil profesional',
    href: 'https://www.linkedin.com/in/federico-guti%C3%A9rrez-correa-0b0187144/',
    accent: '#0A66C2',
    symbol: '⬡',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <div className="accent-line mb-10" />

      {/* IDENTIDAD */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">&gt; IDENTIDAD</p>
        <h1 className="text-2xl font-bold tracking-widest text-white uppercase mb-2">
          Ultragresion
        </h1>
        <p className="text-sm text-[#00F0FF] tracking-wide opacity-80">
          Federico Gutiérrez — Medellín, Colombia
        </p>
      </section>

      <div className="accent-line mb-10" />

      {/* LO QUE CONSTRUYO */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// LO QUE CONSTRUYO</p>
        <div className="flex flex-col gap-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Construyo ecosistemas autónomos donde la tecnología y la creatividad convergen.
            Mi trabajo vive en la intersección de la inteligencia artificial, el diseño de sistemas
            y la expresión personal.
          </p>
          <p>
            Juegos isométricos multijugador, infraestructura de agentes, producción musical.
            Cada pieza tiene propósito técnico y estético — ninguna existe solo por existir.
          </p>
          <p>
            Todo conectado bajo la misma arquitectura. Todo orientado a amplificar la capacidad humana.
          </p>
        </div>
      </section>

      <div className="accent-line mb-10" />

      {/* REDES */}
      <section className="mb-10">
        <p className="text-xs text-[#00F0FF] opacity-50 tracking-widest mb-4">// REDES</p>
        <ul className="flex flex-col gap-4">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 border border-white/5 hover:border-white/15 transition-all"
                style={{ ['--accent' as string]: s.accent }}
              >
                <span
                  className="text-xl w-8 text-center transition-colors"
                  style={{ color: s.accent }}
                >
                  {s.symbol}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-white font-bold tracking-wide group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{s.sub}</span>
                </div>
                <span className="ml-auto text-xs text-slate-600 group-hover:text-slate-400 transition-colors">↗</span>
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
          Command Center es mi sistema operativo personal — un ecosistema de agentes autónomos
          que gestiona proyectos, genera código y corre un juego isométrico en tiempo real.
          Agencia autónoma. Innovación y creatividad.
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
