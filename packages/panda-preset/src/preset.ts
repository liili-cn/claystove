import type { Preset } from "@pandacss/types";
import { animationStyles } from "./theme/animation-styles";
import { colors as colorPalettes } from "./theme/colors";
import { colors } from "./theme/tokens/colors";
import { conditions } from "./theme/conditions";
import { definePreset } from "@pandacss/dev";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { layerStyles } from "./theme/layer-styles";
import { textStyles } from "./theme/text-styles";

export const preset: Preset = definePreset({
  name: "@claystove/panda-preset",
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  globalCss,
  conditions,
  theme: {
    extend: {
      keyframes,
      tokens: {
        colors,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          gray: colorPalettes.neutral,
          bg: {
            value: {
              _light: "{colors.gray.100}",
              _dark: "{colors.gray.100}",
            },
          },
          fg: {
            value: {
              _light: "{colors.gray.1200}",
              _dark: "{colors.gray.1200}",
            },
          },
        },
        radii: {
          l1: { value: "{radii.md}" },
          l2: { value: "{radii.lg}" },
          l3: { value: "{radii.xl}" },
        },
      },
      layerStyles,
      animationStyles,
    },
    textStyles,
  },
});
