import Link from 'next/link';

const PROJECTS = [
  {
    name: 'Command Center',
    description: 'Ecosistema agéntico autónomo. 85 agentes activos, game engine isométrico, ML infrastructure.',
    tags: ['AI', 'Python', 'TypeScript', 'SQLite'],
    href: 'https://play.ultragresion.com/play',
  },
  {
    name: 'ultragresion.com',
    description: 'Este sitio. Portfolio personal, blog y hub de proyectos.',
    tags: ['Next.js', 'Cloudflare', 'TypeScript'],
    href: '/',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <Link href="/" className="text-xs text-slate-500 hover:text-[#00F0FF] tracking-widest mb-8 block">← HOME</Link>
      <h1 className="text-xl font-bold tracking-widest uppercase mb-2">Proyectos</h1>
      <div className="accent-line mb-8" />
      <div className="grid gap-4">
        {PROJECTS.map(p => (
          <a
            key={p.name}
            href={p.href}
            target={p.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="border border-white/10 p-5 hover:border-[#00F0FF44] hover:bg-[#00F0FF05] transition-all group"
          >
            <h2 className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-1">{p.name}</h2>
            <p className="text-xs text-slate-500 mb-3">{p.description}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[10px] text-slate-600 border border-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
