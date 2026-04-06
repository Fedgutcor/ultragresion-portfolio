# Ultragresion Portfolio

Personal portfolio and blog site for Ultragresion, featuring a hero section with an isometric game and a blog with MDX support

## Stack
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS 4
- Drizzle ORM + PGlite (dev) / Neon (prod)
- Clerk Auth
- Arcjet (security)

## Features activadas
db, i18n, email, analytics, api, admin

## Setup
```bash
npm install
# Completar las variables en .env.local
npm run db:generate
npm run dev
```

## Pages
- `/home`
- `/blog`
- `/projects`
- `/about`

## DB Schema
- **posts**: title, content, slug, date
- **projects**: name, description, slug, tags

## Next Steps
1. Configurar Clerk en [clerk.com](https://clerk.com) (plan gratuito disponible)
2. Configurar Neon en [neon.tech](https://neon.tech) (plan gratuito disponible)
3. Completar `.env.local` con las keys obtenidas
4. `npm run db:generate` para generar las migraciones
5. `npm run dev` para arrancar en desarrollo local

---
_Generado por ScaffoldNextjsAgent — Command Center_
