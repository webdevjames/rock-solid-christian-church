# Bootstrap Landing Page Assessment

A responsive, performance-optimized landing page built using HTML, Bootstrap 5, and Sass, bundled with Vite.

## Tech Stack & Architecture Decisions

- **Vite:** Chosen over Webpack for near-instant HMR and a clean, zero-config production build pipeline.
- **Sass Variable Overrides:** Instead of using heavy CSS overrides or `!important` tags, Bootstrap's core theme colors and typography were customized directly through Sass source variables prior to compilation.
- **Fontsource (Self-Hosted Typography):** Integrated the `Inter Variable` font via npm to eliminate external Google Font CDN dependencies, improving privacy (GDPR compliance) and page performance.
- **Automated Asset Optimization:** Implemented `vite-plugin-image-optimizer` to natively compress the hero asset and inline SVGs during the build process, maximizing Lighthouse scores.

## Local Development Setup

Clone the repository and install dependencies:
\`\`\`bash
git clone https://github.com/webdevjames/[your-repo-name].git
cd [your-repo-name]
npm install
\`\`\`

To start the local development server:
\`\`\`bash
npm run dev
\`\`\`

To build the optimized production package:
\`\`\`bash
npm run build
\`\`\`
