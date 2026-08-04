# Design System — Uzair Muaz Portfolio

A reference for the visual language, motion rules, and content structure behind this site. Use this to stay consistent when you add sections, swap copy, or hand it to another designer/dev.

---

## 1. Concept

**Subject:** a senior engineer who works in distributed systems and leads teams.
**Signature idea:** the hero background is a live 2D node-network — points drifting and connecting/disconnecting as distance changes. It's a literal, restrained visual metaphor for "distributed systems" rather than decoration, and it's the one bold move on the page. Everything else stays quiet so that idea reads clearly.

**Feel:** dark, technical, confident — closer to a systems-monitoring dashboard than a design agency site. Motion is used to demonstrate craft (smooth scroll choreography), not to entertain.

---

## 2. Color

| Token | Hex / Value | Usage |
|---|---|---|
| `--bg` | `#0A0D12` | Page background — near-black, slight blue cast |
| `--surface` | `#11151C` | Cards, panels |
| `--surface-alt` | `#161B24` | Hover state for cards |
| `--border` | `#232936` | Hairlines, dividers, card borders |
| `--text` | `#EDEFF3` | Primary text |
| `--muted` | `#8B93A3` | Body copy, secondary text |
| `--faint` | `#565E6E` | Captions, disabled/tertiary text |
| `--accent` | `#4FD8C4` | Primary accent — links, stats, active states, network nodes |
| `--accent-dim` | `rgba(79,216,196,0.12)` | Accent backgrounds (chips, tags, glows) |
| `--amber` | `#F2A65A` | Secondary accent — used **only** for metric/result badges, never structurally |

**Rules:**
- One accent color (`--accent`) does almost all the work. Amber is a deliberate second signal reserved for outcomes/metrics so it stays meaningful — don't spread it into nav, buttons, or decoration.
- Never introduce a third hue. If a new section needs emphasis, use accent at higher opacity or amber for numbers — not a new color.

---

## 3. Typography

| Role | Typeface | Where |
|---|---|---|
| Display | `Space Grotesk` (500–700) | H1–H4, nav logo, card titles |
| Body | `Inter` (400–600) | Paragraphs, nav links (base), buttons |
| Mono / data | `JetBrains Mono` (400–600) | Dates, tags, labels, stats, chips, eyebrows, "system" text |

**Scale (fluid via `clamp()`):**
- Hero H1: `clamp(38px, 6.5vw, 74px)` / line-height `1.04`
- Section H2: `clamp(28px, 4vw, 42px)`
- Body: `16–19px`, line-height `1.6–1.65`
- Mono labels: `11–14px`, letter-spacing `0.02–0.08em`

---

## 4. Layout

- **Max content width:** `1160px` (`--maxw`), centered, `32px` side padding (`20px` on mobile ≤640px)
- **Section rhythm:** `120px` vertical padding desktop, `80px` mobile
- **Structural devices:** numbered section tags (`01 — About`, `02 — Projects`, `03 — Experience`, `04 — Skills`, `05 — Recognition`)

---

## 5. Motion

- Live 2D Node Network particle animation in Hero (interactive distributed nodes)
- Clean fade-up reveal animations on scroll
- Pin-scrub or clean horizontal scroll for Projects
- Subtile cursor tracking spotlight / card hovers

---

## 6. Components

- `NetworkCanvas`: Ambient 2D particle/line canvas with node connections
- `.chip`: Stack/skill tag (Mono font, hover lifts + accent border)
- `.project-card`: Browser-chrome header bar + screenshot / UI mockup + stack tags + amber metric badge
- `.exp-item`: Timeline entry with left rail line and dot marker
