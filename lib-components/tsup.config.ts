import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  splitting: true,
  treeshake: true,
  clean: true,
  dts: true,
  format: ["esm"],
  platform: "browser",
  target: ["es2020", "chrome70", "edge18", "firefox70", "node18"],
  tsconfig: "tsconfig.build.json",
  sourcemap: !options.watch,
  minify: !options.watch,
  loader: {
    '.png': 'dataurl',
  },
}));
