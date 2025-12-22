import { plugin, preset } from "@claystove/panda-preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // ===== Output css options =====
  // Whether to use css reset
  preflight: true,
  // The namespace prefix for the generated css classes and css variables
  presets: [preset],

  // ===== File system options =====
  // The output directory for your css system
  outdir: "./dist",

  // ===== JSX options =====
  // JS Framework for generated JSX elements
  jsxFramework: "solid",

  // ===== Other options =====
  // Plugins are currently simple objects that contain a name and a hooks object with the same structure as the hooks object in the config
  plugins: [plugin],
});
