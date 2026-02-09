# Raghul M Portfolio

Personal portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Profile

- Name: Raghul M
- Role: DevOps / Platform Engineer
- Focus: Kubernetes, Multi-Cloud, CI/CD, Observability
- Location: Bengaluru, Karnataka, India
- Email: raghulvijay01@gmail.com
- LinkedIn: https://www.linkedin.com/in/raghulm21/
- GitHub: https://github.com/raghulvj01

## Sections

- About / Professional Summary
- Technical Skills
- Experience and Education Timeline
- Projects
- Certifications, Languages, Additional Strengths
- Resume Viewer
- Contact Form

All resume-backed content is centralized in `src/constants/index.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact form configuration

The contact API route uses Resend.

Required:

- `RESEND_API_KEY`

Optional:

- `CONTACT_EMAIL` (default: `raghulvijay01@gmail.com`)
- `CONTACT_FROM_EMAIL` (default: `Portfolio Contact <onboarding@resend.dev>`)

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run deploy
```
