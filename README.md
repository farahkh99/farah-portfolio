
# Farah Khoury — Software Engineer Portfolio

[![Portfolio CI](https://github.com/farahkh99/farah-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/farahkh99/farah-portfolio/actions/workflows/ci.yml)

A responsive personal portfolio showcasing my experience as a Full-Stack Software Engineer, my technical skills, and selected engineering projects.

Built with **Next.js 16, React, TypeScript, and Tailwind CSS**, featuring a custom Black & Gold design system, reusable components, and production deployment.

### [🌐 View Live Portfolio](https://farah-portfolio-ten.vercel.app/)

---

## About Me

I'm Farah Khoury, a Full-Stack Software Engineer with 3+ years of professional experience developing business applications, backend services, databases, and integrations.

My background includes:

- C#/.NET desktop applications
- PHP and JavaScript web applications
- REST APIs and third-party integrations
- MySQL and database-driven systems
- Authentication and role-based access control
- Multilingual interfaces with RTL and LTR support
- Production troubleshooting and mentoring student developers

I started at CTC part-time while also working at Galil Software, then transitioned to full-time. I am pursuing a B.Sc. in Computer Science (2026–Present). React, Next.js, TypeScript, and Node.js are part of my hands-on project experience; my production work centers on PHP, C#, JavaScript, SQL, and integrations.

## Featured Engineering Projects

### CTC Cashier
**Point-of-Sale & Retail Management**

A retail platform combining a C#/.NET WinForms application with PHP services.

Engineering work includes transaction processing, split payments, PAX payment-terminal integrations, receipt printing, refunds, inventory workflows, and X/Z reports.

[View Case Study](https://farah-portfolio-ten.vercel.app/projects/ctc-cashier)

### Dibsy
**Bakery & Production Management**

A PHP and MySQL platform supporting recipes, ingredients, suppliers, warehouses, inventory, production tracking, and cost calculations.

[View Case Study](https://farah-portfolio-ten.vercel.app/projects/dibsy)

### TimeGate
**Workforce & Attendance Management**

A workforce-management system integrating biometric attendance devices, Python scripts on a VPS, MySQL storage, and PHP customer dashboards.

Includes a high-level system architecture diagram.

[View Case Study](https://farah-portfolio-ten.vercel.app/projects/timegate)

### CTC Invoice
**Invoicing & Document Management**

A multi-tenant invoicing platform under development, focused on accounting-document workflows, encrypted business information, permissions, and multilingual Hebrew/Arabic interfaces.

[View Case Study](https://farah-portfolio-ten.vercel.app/projects/ctc-invoice)

> Some featured projects are employer-owned systems. They are described at a high level without publishing proprietary source code, credentials, or confidential information.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 |
| Frontend | React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React, React Icons |
| Containerization | Docker |
| Continuous Integration | GitHub Actions |
| Hosting | Vercel |
| Version Control | Git and GitHub |

## Features

- Responsive desktop and mobile layouts
- Black & Gold design system
- Reusable React components
- Dynamic project-detail routes
- Engineering case studies
- Technology badges
- System architecture diagrams
- Accessible navigation controls
- Custom FK favicon
- SEO metadata

## Project Structure

```text
src/
├── app/
│   ├── projects/[slug]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   ├── layout/
│   └── projects/
├── data/
└── types/

.github/
└── workflows/
    └── ci.yml

Dockerfile
.dockerignore
next.config.ts
```

The application separates routing, presentation components, project data, and TypeScript types.

## Running Locally

### Requirements

- Node.js 22
- npm
- Git

Clone the repository:

```bash
git clone https://github.com/farahkh99/farah-portfolio.git
cd farah-portfolio
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

### Production Build

```bash
npm run lint -- --max-warnings=0
npx tsc --noEmit
npm run build
npm run start
```

## Running with Docker

The repository includes a multi-stage Dockerfile using Next.js standalone output.

Build the image:

```bash
docker build -t farah-portfolio:local .
```

Start the container:

```bash
docker run --rm -p 3001:3000 --name farah-portfolio-test farah-portfolio:local
```

Open http://localhost:3001.

Stop the container using Ctrl+C.

## CI/CD

GitHub Actions runs automated validation for Pull Requests targeting `develop` and `main`, and pushes to those branches.

The CI pipeline:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies with `npm ci`.
4. Runs ESLint.
5. Validates TypeScript.
6. Builds the Next.js application.

Vercel handles automatic deployment of the production branch.

### Branching Workflow

```text
feature/*
    |
    v
  develop
    |
    | Pull Request + CI
    v
   main
    |
    v
  Vercel
```

## Contact

**Farah Khoury**

- [Portfolio](https://farah-portfolio-ten.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/farah-khoury-473a3920a)
- [Email](mailto:farah.khoury11@gmail.com)

---

© Farah Khoury. All rights reserved.
