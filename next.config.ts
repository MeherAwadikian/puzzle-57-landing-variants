import type { NextConfig } from "next";

// Two build modes from one config:
//   • default (`next build` / `next start`)  -> server build, used for local
//     verification and for a Vercel deploy.
//   • `PAGES_EXPORT=1 next build`             -> static HTML export into `out/`,
//     used only for the GitHub Pages fallback deploy. basePath/assetPrefix are
//     set to the repo name so assets resolve under a project-pages subpath.
const isExport = process.env.PAGES_EXPORT === "1";
const repo = "puzzle-57-landing-variants";

// Pin the Turbopack root to this project so Next does not pick up the stray
// pnpm-lock.yaml sitting in the home directory above it.
const base: NextConfig = { turbopack: { root: import.meta.dirname } };

const nextConfig: NextConfig = isExport
  ? {
      ...base,
      output: "export",
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : base;

export default nextConfig;
