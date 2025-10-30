import { defineBuildConfig } from "unbuild";

const config = defineBuildConfig({
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
