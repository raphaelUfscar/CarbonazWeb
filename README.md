# CarbonazWeb

Modern business website for **Carbonaz Solutions**, focused on automation and robotics services.

## Live Demo

The GitHub Pages site will be available at:

[https://raphaelufscar.github.io/CarbonazWeb/](https://raphaelufscar.github.io/CarbonazWeb/)

## Technologies Used

- **React** for the UI
- **JavaScript / JSX** for application code
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for local development and production builds
- **Docker** for local production-image testing

## Project Structure

- `src/App.jsx`: Main website component and content
- `src/App.css`: Custom styles, theme variables, and animations
- `src/index.css`: Tailwind and global styles
- `index.html`: Browser entry point
- `vite.config.js`: Vite configuration, including GitHub Pages base path
- `Dockerfile`: Production container build
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Run With Docker

Build the Docker image:

```bash
npm run docker:build
```

Run the production container locally:

```bash
npm run docker:run
```

The site will be available at:

[http://localhost:8080](http://localhost:8080)

## Deploy

Deployment is handled by GitHub Actions. Every push to `main` builds the Vite app and publishes `dist` to GitHub Pages.

Before the first deploy, enable GitHub Pages in the repository settings:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main` or run the `Deploy static content to Pages` workflow manually.

## Features

- Hero section for automation services
- Services overview
- About section with company statistics
- Portfolio case studies
- Contact form
- Responsive layout
- Smooth hover and animation effects

## Design Notes

The site uses a green and black technology-focused visual style:

- Primary green: `#00FF88`
- Dark green: `#1B4D3E`
- Primary black: `#0A0A0A`
- Charcoal: `#1A1A1A`
- White: `#FFFFFF`

Design direction:

- Clean, modern, professional layout
- High-contrast dark interface with green accents
- Responsive header with mobile menu
- Card-based service and portfolio sections
- Clear calls to action for quotes, automation inquiries, and contact

Messaging themes:

- Automate repetitive work
- Improve efficiency and reliability
- Reduce operational cost
- Use robotics and automation to support business growth

## Deployment Targets

Current deployment targets:

- GitHub Pages: [https://raphaelufscar.github.io/CarbonazWeb/](https://raphaelufscar.github.io/CarbonazWeb/)
- Cloudflare Pages: configured from this GitHub repository

Recommended Cloudflare Pages settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `24`

## Next Steps

- Replace placeholder contact details with real business contact information
- Add real product, robotics, or customer images
- Connect the contact form to a form backend or CRM
- Add analytics once the final production host is chosen
- Connect a custom domain for customer-facing use
