'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'JUEGO', href: 'https://play.ultragresion.com/play', external: true },
  { label: 'BLOG', href: '/blog', external: false },
  { label: 'PROYECTOS', href: '/projects', external: false },
  { label: 'ABOUT', href: '/about', external: false },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[44px] flex items-center px-6 border-b"
      style={{
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottomColor: 'rgba(0,240,255,0.08)',
      }}
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-mono tracking-widest text-white uppercase hover:text-[#00F0FF] transition-colors"
        >
          ULTRAGRESION
        </Link>

        <ul className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = !link.external && pathname === link.href;
            const baseClass =
              'text-[10px] tracking-widest transition-colors hover:text-[#00F0FF]';
            const activeClass = isActive ? 'text-[#00F0FF]' : 'text-slate-500';

            if (link.external) {
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass} ${activeClass}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={link.label}>
                <Link href={link.href} className={`${baseClass} ${activeClass}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
