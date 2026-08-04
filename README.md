# Uzair Muaz — Portfolio

Personal portfolio for **Uzair Muaz**, Sr. Full Stack Software Engineer focused on **Next.js** and **Nest.js**. Built with Next.js and deployed on Vercel.

## Features

- Hero with Spline 3D scene, network canvas, and tech marquee
- Featured projects with live screenshots
- Work history, skills matrix, and awards
- Contact modal powered by **Resend** (email to Gmail)
- WhatsApp quick contact
- CV download (`public/cv.pdf`)
- Responsive navbar (desktop tabs + mobile/tablet side drawer)
- Smooth scroll (Lenis) and scroll animations (GSAP)

## Stack

| Area | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | GSAP, Motion, Lenis |
| Icons | Tabler Icons |
| 3D | Spline |
| Email | Resend (`/api/contact`) |

## Getting started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=re_xxxxxxxx
```

### Resend setup (no DNS required)

1. Sign up at [resend.com](https://resend.com) with your Gmail.
2. Create an API key and set `RESEND_API_KEY`.
3. Contact form emails send **from** `onboarding@resend.dev` **to** `uzair.muaz3k@gmail.com`.
4. **Reply-To** is the visitor’s email so you can reply in one click.

On Vercel: **Project → Settings → Environment Variables** → add `RESEND_API_KEY` for Production and Preview.

## Project structure

```text
app/
  api/contact/     # Resend contact endpoint
  layout.tsx
  page.tsx
  globals.css
components/        # UI sections (Hero, Projects, Experience, Skills, Footer, Navbar…)
lib/
  portfolioData.ts # Profile, projects, experience, skills, awards
public/
  cv.pdf
```

## Editing content

Update copy and listings in [`lib/portfolioData.ts`](lib/portfolioData.ts):

- `UZAIR_INFO` — name, title, bio, links, WhatsApp, CV path
- `PROJECTS` — portfolio case studies
- `EXPERIENCES` — work history
- `AWARDS` — recognition
- `SKILL_CATEGORIES` — skill matrix

Replace the CV by overwriting `public/cv.pdf`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add `RESEND_API_KEY` in environment variables.
5. Deploy.

## License

Private portfolio project. All rights reserved.
