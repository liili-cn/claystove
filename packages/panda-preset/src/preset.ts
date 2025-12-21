import { recipes, slotRecipes } from "./theme/recipes";
import type { Preset } from "@pandacss/types";
import { animationStyles } from "./theme/animation-styles";
import { colors as colorPalettes } from "./theme/colors";
import { colors } from "./theme/tokens/colors";
import { conditions } from "./theme/conditions";
import { definePreset } from "@pandacss/dev";
import { durations } from "./theme/tokens/durations";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { layerStyles } from "./theme/layer-styles";
import { shadows } from "./theme/tokens/shadows";
import { textStyles } from "./theme/text-styles";
import { zIndex } from "./theme/tokens/z-index";

export const preset: Preset = definePreset({
  name: "@claystove/panda-preset",
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  globalCss,
  conditions,
  theme: {
    extend: {
      animationStyles,
      recipes,
      slotRecipes,
      keyframes,
      layerStyles,
      textStyles,
      tokens: {
        colors,
        durations,
        zIndex,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          gray: colorPalettes.sage,
          fg: {
            default: {
              value: { _light: "{colors.gray.12}", _dark: "{colors.gray.12}" },
            },
            muted: {
              value: { _light: "{colors.gray.11}", _dark: "{colors.gray.11}" },
            },
            subtle: {
              value: { _light: "{colors.gray.10}", _dark: "{colors.gray.10}" },
            },
          },
          canvas: {
            value: { _light: "{colors.gray.1}", _dark: "{colors.gray.1}" },
          },
          border: {
            value: { _light: "{colors.gray.4}", _dark: "{colors.gray.4}" },
          },
          error: {
            value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" },
          },
        },
        shadows,
        radii: {
          l1: { value: "{radii.md}" },
          l2: { value: "{radii.lg}" },
          l3: { value: "{radii.xl}" },
        },
      },
    },
  },
});
