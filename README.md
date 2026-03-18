
  # BX PORTFOLIO SITE

  This is a code bundle for Implement UI Design. The original project is available at https://www.figma.com/design/35RgRofjD6K4CnFKhf1aK4/Implement-UI-Design.

  ## Running the code

  Development server:
  Run `pn start` (or `pnpm start`) to start the dev server at `http://localhost:5173`.

  Build outputs:
  Run `pnpm build` to create `dist/` for deployment.
  Run `pnpm build:root` to copy the build output into the project root (keeps the built `index.html` and `assets/` at the top level).

  Notes:
  The dev server always restores `index.html` from `index.dev.html` before starting.
  `build` and `build:root` also restore `index.html` before building so local dev never breaks.
  
