# 3D Portfolio Site

## Overview

This project is a 3D portfolio website showcasing my skills, projects, and experiences as a software developer. It features interactive 3D graphics, smooth animations, and a modern UI to provide an engaging user experience. The site is divided into sections for About, Work (Projects), and Contact, and is fully responsive for all devices.

## Features

- **About Section**: Introduction and overview of my skills and expertise.
- **Work Section**: Showcases my projects with descriptions, technology tags, images, and links to code repositories and live demos.
- **Testimonials**: Displays client and colleague feedback.
- **Contact Section**: Provides a form for visitors to get in touch.
- **3D Graphics**: Interactive 3D elements powered by Three.js.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **SEO Optimized**: Includes meta tags for better search engine visibility.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js
- **Other Libraries**: React Tilt, Redux Toolkit, Axios
- **Build Tool**: Vite

## Project Structure

- `src/components`: React components for different sections (About, Work, Contact, etc.).
- `src/constants`: Constant data such as services, projects, and testimonials.
- `src/assets`: Images, logos, and other static assets.
- `public/planet`: 3D model assets and their licenses.
- `src/styles.js`: Centralized style definitions.

## Live Demo

You can view the live site here:  
[https://favouruduose.com](https://favouruduose.com)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/3d-portfolio-site.git
   cd 3d-portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` by default.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Deployment

This project uses [Vite](https://vitejs.dev/) for building and bundling.  
To deploy on GitHub Pages or a custom domain, update the `base` property in [`vite.config.js`](vite.config.js):

```js
export default defineConfig({
  base: "/", // Set to your repo name or custom path
  plugins: [react()],
});
```

## Customization

- **Project Data:**  
  Update your projects, testimonials, and services in [`src/constants/index.js`](src/constants/index.js).
- **Assets:**  
  Add or replace images in [`src/assets`](src/assets).
- **3D Models:**  
  Place 3D assets in [`public/planet`](public/planet).

## License

This project is licensed under the MIT License.  
3D model assets in `public/planet` may have their own licenses—see included files for details.

## Acknowledgements

- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

**Author:** Favour Uduose  
[Portfolio](https://favouruduose.com) | [GitHub](https://github.com/Iamfavur)