# Mi Argentina — GovTech iOS Platform

> Plataforma digital de servicios del Estado Nacional Argentino.  
> Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion.

---

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 15.1 (App Router) |
| React | 19 |
| TypeScript | 5.7 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Lucide React | 0.468 |

---

## Arquitectura

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Dashboard (/)
│   ├── novedades/          # Novedades (/novedades)
│   ├── telefonos/          # Teléfonos (/telefonos)
│   ├── documentos/         # Módulo Documentos
│   ├── vehiculos/          # Módulo Vehículos
│   ├── salud/              # Módulo Salud
│   ├── trabajo/            # Módulo Trabajo
│   ├── cobros/             # Módulo Cobros
│   ├── tramites/           # Módulo Trámites
│   ├── turnos/             # Módulo Turnos
│   ├── hijos/              # Módulo Hijos
│   ├── suscribir/          # Suscribir servicios
│   ├── seguridad/          # Seguridad y privacidad
│   └── acercade/           # Acerca de
│
├── components/
│   ├── primitives/         # Button, Card, Badge, Avatar, Divider
│   └── composite/          # AppHeader, FloatingTabBar, DrawerNavigation,
│                           # AccordionItem, InfoBanner, ServiceGrid, EmptyState
│
├── design-system/
│   ├── colors/             # Color tokens
│   ├── motion/             # Framer Motion variants & transitions
│   └── index.ts            # Barrel export
│
├── features/               # Feature-based modules (extendable)
├── hooks/                  # useDrawer, etc.
├── layouts/                # AppShell, PageContainer
├── services/               # API layer (extendable)
├── state/                  # Global state (extendable)
├── styles/                 # globals.css
└── utils/                  # cn(), constants.ts
```

---

## Design System

### Paleta institucional

| Token | Valor |
|---|---|
| `--navy-900` | `#0B1742` |
| `--navy-800` | `#13265E` |
| `--gold-500` | `#FFB81C` |
| `--gold-400` | `#FCBF45` |
| `--bg-primary` | `#F5F6FA` |
| `--surface-primary` | `#FFFFFF` |
| `--text-primary` | `#111827` |
| `--text-secondary` | `#6B7280` |

### Tipografía
- **Montserrat** — UI general (400/500/600/700/800)
- **Lora Bold** — Branding institucional (logo)

### Motion System
- Easing: `cubic-bezier(.22,.61,.36,1)` (iOS spring)
- Duraciones: 150ms / 200ms / 300ms / 400ms
- Variants: `pageVariants`, `staggerContainer`, `staggerItem`, `drawerVariants`, `accordionVariants`, `cardVariants`

### Tab Bar — iOS HIG compliant
- Fondo: `rgba(255,255,255,0.85)` + `blur(20px)`
- Borde: `0.5px solid rgba(0,0,0,0.08)`
- Color activo: `#0B1742` (Navy)
- Color inactivo: `#8E8E93` (iOS gray)
- Altura: 83px (incluye safe area)

---

## Instalación y desarrollo

```bash
# Clonar
git clone https://github.com/tu-usuario/mi-argentina.git
cd mi-argentina

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Deploy (Vercel)
vercel --prod
```

---

## Deploy en Vercel

1. Pushear el repo a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Framework: **Next.js** (auto-detectado)
4. Build command: `npm run build`
5. Deploy ✅

---

## Módulos implementados

| Módulo | Ruta | Estado |
|---|---|---|
| Dashboard | `/` | ✅ |
| Novedades | `/novedades` | ✅ |
| Teléfonos | `/telefonos` | ✅ |
| Documentos | `/documentos` | ✅ |
| Vehículos | `/vehiculos` | ✅ |
| Salud | `/salud` | ✅ |
| Trabajo | `/trabajo` | ✅ |
| Cobros | `/cobros` | ✅ |
| Trámites | `/tramites` | ✅ |
| Turnos | `/turnos` | ✅ |
| Hijos | `/hijos` | ✅ |
| Suscribir servicios | `/suscribir` | ✅ |
| Seguridad y privacidad | `/seguridad` | ✅ |
| Acerca de | `/acercade` | ✅ |

---

## Accesibilidad

- WCAG AA compliant
- `aria-label` en todos los elementos interactivos
- Semantic HTML (`nav`, `main`, `header`, `ul`, `li`)
- Keyboard navigation (`:focus-visible`)
- `aria-selected` en Tab Bar
- `aria-expanded` en accordions
- `role="dialog"` en Drawer
- Skip-to-content link

---

*Desarrollado como plataforma GovTech premium — mobile-first, iOS HIG, production-ready.*
