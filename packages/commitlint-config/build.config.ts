import type { BuildConfig } from "unbuild";
import { defineBuildConfig } from "unbuild";

const config: BuildConfig[] = defineBuildConfig({
  entries: ["./src/index"],
  externals: ["cz-git"],
  clean: true,
  declaration: true,
  outDir: "./dist",
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});

export default config;
