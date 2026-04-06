import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ultragresion — Personajes',
  description: 'Command Center Agent Roster — los agentes autónomos del ecosistema.',
};

const CHARACTERS = [
  {
    id: 'jaguar',
    name: 'Snow Jaguar',
    title: 'PID 1 — Root Process',
    lore: 'Dirige desde las sombras. Ningún proceso corre sin su permiso.',
    accent: '#072b4c',
  },
  {
    id: 'snake',
    name: 'Audit Snake',
    title: 'Dependency Graph Scanner',
    lore: 'Rastrea cada dependencia. Nada se instala sin que ella lo sepa.',
    accent: '#c81b14',
  },
  {
    id: 'whale',
    name: 'Glacier Whale',
    title: 'Chief Executive Officer',
    lore: 'Mueve recursos que otros no pueden ver. Opera a profundidad.',
    accent: '#2f5408',
  },
  {
    id: 'wolf',
    name: 'Black Wolf',
    title: 'Orphan Process Killer',
    lore: 'Patrulla el sistema. Los procesos olvidados no duran mucho.',
    accent: '#18f1f2',
  },
  {
    id: 'bat',
    name: 'Sonic Bat',
    title: 'Voice Loop Interface',
    lore: 'Escucha todo. Traduce el silencio en instrucciones.',
    accent: '#149bc9',
  },
  {
    id: 'turtle',
    name: 'Iron Turtle',
    title: 'Snapshot & Archive Service',
    lore: 'Lento. Metódico. Ningún dato se pierde bajo su custodia.',
    accent: '#137ec0',
  },
  {
    id: 'macaw',
    name: 'Scarlet Macaw',
    title: 'Design System Renderer',
    lore: 'Todo lo que ves fue aprobado por ella. El caos tiene forma.',
    accent: '#c25b13',
  },
  {
    id: 'seal',
    name: 'Polar Seal',
    title: 'Knowledge Preservation',
    lore: 'Archiva lo que el sistema aprende. La memoria colectiva.',
    accent: '#0a416d',
  },
  {
    id: 'owl',
    name: 'Scholar Owl',
    title: 'Epistemic Validation Daemon',
    lore: 'Valida. Cuestiona. No deja pasar nada que no resista análisis.',
    accent: '#1799eb',
  },
  {
    id: 'rabbit',
    name: 'Logos Rabbit',
    title: 'NLP Command Parser',
    lore: 'Interpreta intención. Convierte lenguaje en acción ejecutable.',
    accent: '#0b4978',
  },
];

export default function CharactersPage() {
  return (
    <main className="min-h-screen px-6 py-8 max-w-7xl mx-auto">
      <div className="accent-line mb-8" />
      <div className="mb-8">
        <h1 className="text-xl font-bold tracking-widest uppercase text-white mb-1">Personajes</h1>
        <p className="text-xs text-slate-500 tracking-wide">// COMMAND CENTER — AGENT ROSTER</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CHARACTERS.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </main>
  );
}

function CharacterCard(props: {
  id: string;
  name: string;
  title: string;
  lore: string;
  accent: string;
}) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        '--char-accent': props.accent,
        aspectRatio: '3/4',
        border: `1px solid ${props.accent}33`,
      } as React.CSSProperties}
    >
      {/* Foto full */}
      <img
        src={`/brand/characters/${props.id}.png`}
        alt={props.name}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradiente oscuro desde abajo — texto emerge */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, #050505 0%, #050505cc 30%, transparent 65%)`,
        }}
      />

      {/* Línea accent arriba */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '2px', background: props.accent }}
      />

      {/* Texto en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-[9px] tracking-widest mb-1 uppercase" style={{ color: props.accent }}>
          {props.title}
        </p>
        <h3 className="text-sm font-bold text-white leading-tight mb-1">{props.name}</h3>
        <p className="text-[11px] text-slate-400 italic leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {props.lore}
        </p>
      </div>

      {/* Glow en hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${props.accent}22` }}
      />
    </div>
  );
}
