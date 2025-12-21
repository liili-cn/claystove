import type { PandaPlugin } from "@pandacss/types";
import { definePlugin } from "@pandacss/dev";

export const plugin: PandaPlugin = definePlugin({
  name: "Remove Panda Preset Colors",
  hooks: {
    "preset:resolved": ({ utils, preset, name }) =>
      name === "@pandacss/preset-panda"
        ? utils.omit(preset, [
            "theme.tokens.colors",
            "theme.semanticTokens.colors",
          ])
        : preset,
  },
});
