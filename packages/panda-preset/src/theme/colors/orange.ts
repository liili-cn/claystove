import { defineSemanticTokens } from "@pandacss/dev";

export const orange = defineSemanticTokens.colors({
  "50": {
    value: { _light: "oklch(0.96 0.03 45)", _dark: "oklch(0.185 0.03 45)" },
  },
  "100": {
    value: { _light: "oklch(0.93 0.052 45)", _dark: "oklch(0.23 0.052 45)" },
  },
  "200": {
    value: { _light: "oklch(0.89 0.08 45)", _dark: "oklch(0.275 0.063 45)" },
  },
  "300": {
    value: { _light: "oklch(0.86 0.105 45)", _dark: "oklch(0.32 0.074 45)" },
  },
  "400": {
    value: { _light: "oklch(0.82 0.137 45)", _dark: "oklch(0.365 0.085 45)" },
  },
  "500": {
    value: { _light: "oklch(0.78 0.17 45)", _dark: "oklch(0.41 0.095 45)" },
  },
  "600": {
    value: { _light: "oklch(0.74 0.172 45)", _dark: "oklch(0.455 0.106 45)" },
  },
  "700": {
    value: { _light: "oklch(0.7 0.163 45)", _dark: "oklch(0.5 0.117 45)" },
  },
  "800": {
    value: { _light: "oklch(0.64 0.15 45)", _dark: "oklch(0.545 0.128 45)" },
  },
  "900": {
    value: { _light: "oklch(0.59 0.138 45)", _dark: "oklch(0.59 0.138 45)" },
  },
  "1000": {
    value: { _light: "oklch(0.53 0.123 45)", _dark: "oklch(0.7 0.163 45)" },
  },
  "1100": {
    value: { _light: "oklch(0.46 0.108 45)", _dark: "oklch(0.78 0.17 45)" },
  },
  "1200": {
    value: { _light: "oklch(0.38 0.088 45)", _dark: "oklch(0.89 0.08 45)" },
  },
});
