# Kevin's Personal Portfolio

This is the source code for my personal portfolio website, designed to showcase my skills, projects, and professional experience as a software engineer. The website is built with modern web technologies, focusing on performance, aesthetics, and a smooth user experience through animations.

## Live Demo

https://kevinvanderheijden.nl

## Key Features

*   **Modern Framework**: Built with **Next.js** using the App Router for a robust and scalable foundation.
*   **Static Site Generation**: Configured with `output: "export"` for a fully static, high-performance website that can be deployed on any static host.
*   **Rich Animations**: Immersive user experience with animations powered by **Framer Motion**. This includes:
    *   An animated, gradient background on the hero section.
    *   A parallax scroll effect.
    *   Scroll-triggered animations for revealing content in sections.
    *   A horizontal scrolling carousel for the "My Work" section on desktop devices.
*   **Responsive Design**: A mobile-first approach ensures the portfolio looks great on all devices, from phones to desktops.
*   **Component-Based Architecture**: Sections like "About," "Education," "Work," "Expertise," and "Contact" are built as reusable React components.
*   **Custom Typography**: Utilizes `next/font` to efficiently self-host the Acorn and Segoe UI font families, ensuring consistent typography and performance.
*   **MDX Support**: Integrated `@next/mdx`, allowing for the creation of content pages using Markdown with embedded React components.
*   **Contact Form**: Includes a functional contact form using [Formspree](https://formspree.io/) for easy communication.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Linting**: [ESLint](https://eslint.org/)
*   **Deployment**: [Cloudflare](https://www.cloudflare.com/)

## Getting Started

To run this project locally, you will need Node.js and a package manager like npm, yarn, or pnpm.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DAQEM/Portfolio
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying files in the `app/` directory. The page auto-updates as you edit the files.

## Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── app/ # Main application routes and pages
│ ├── fonts/ # Local font files
│ ├── globals.css # Global styles and Tailwind CSS imports
│ ├── layout.tsx # Root layout for the application
│ └── page.tsx # The main landing page
├── components/ # Reusable React components
│ ├── landing/ # Components for different sections of the landing page
│ └── navigation/ # Header and Footer components
├── public/ # Static assets like images and icons
├── next.config.ts # Next.js configuration (with MDX)
├── package.json # Project dependencies and scripts
└── tsconfig.json # TypeScript configuration
```