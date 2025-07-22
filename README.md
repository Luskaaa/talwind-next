# Tailwind CSS Study Project

This project is a personal study environment for learning and experimenting with **Tailwind CSS**. The main focus is on practicing Tailwind's utility classes, layouts, and responsive design techniques. **Next.js** is used as a supporting framework to organize the project, but is not the primary focus.

## Project Purpose

- Practice and explore Tailwind CSS features
- Experiment with layouts, components, and responsive design
- Use Next.js as a convenient way to structure and serve the project
- Build example UI elements such as sidebars, navigation, widgets, and profile sections

## Features

- Responsive sidebar navigation
- Dark/light theme toggle
- Animated file upload with preview
- Custom select and tab components
- Profile and settings UI
- Accessible UI primitives (Radix UI)
- Modern, utility-first styling (Tailwind CSS)

## Technologies Used

- **Next.js**: React framework for server-side rendering, routing, and project structure
- **React**: UI library for building component-based user interfaces
- **TypeScript**: Static type checking for JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **tailwind-variants**: Utility for managing Tailwind CSS variants in components
- **Radix UI**: Accessible UI primitives for React (using: @radix-ui/react-tabs, @radix-ui/react-select, @radix-ui/react-collapsible, @radix-ui/react-scroll-area)
- **lucide-react**: Icon library for React
- **framer-motion**: Animation library for React
- **next-themes**: Theme (dark/light mode) management for Next.js apps
- **@formkit/auto-animate**: Automatic animation for list and layout changes


## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
talwind-next/
  app/
    components/      # Reusable UI components
    globals.css      # Global styles (Tailwind CSS)
    layout.tsx       # Root layout
    page.tsx         # Main page
  public/            # Static assets (SVGs, images)
  package.json       # Project dependencies and scripts
  tailwind.config.js # Tailwind CSS configuration (if present)
  tsconfig.json      # TypeScript configuration
```

## Notes

- This project is for **learning purposes only** and is not intended for production use.
- Feel free to use, modify, or extend the code for your own Tailwind CSS practice.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

## License

This project is licensed under the MIT License.

## Author

Created by Lucas Migueis.

Happy learning and experimenting with Tailwind CSS!
