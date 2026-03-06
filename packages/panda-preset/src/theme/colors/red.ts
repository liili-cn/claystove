import { defineSemanticTokens } from "@pandacss/dev";

export const red = defineSemanticTokens.colors({
  "50": {
    value: { _light: "oklch(0.96 0.023 30)", _dark: "oklch(0.195 0.023 30)" },
  },
  "100": {
    value: { _light: "oklch(0.93 0.041 30)", _dark: "oklch(0.24 0.041 30)" },
  },
  "200": {
    value: { _light: "oklch(0.89 0.061 30)", _dark: "oklch(0.285 0.061 30)" },
  },
  "300": {
    value: { _light: "oklch(0.86 0.08 30)", _dark: "oklch(0.33 0.08 30)" },
  },
  "400": {
    value: { _light: "oklch(0.82 0.103 30)", _dark: "oklch(0.375 0.103 30)" },
  },
  "500": {
    value: { _light: "oklch(0.78 0.125 30)", _dark: "oklch(0.42 0.125 30)" },
  },
  "600": {
    value: { _light: "oklch(0.74 0.153 30)", _dark: "oklch(0.465 0.153 30)" },
  },
  "700": {
    value: { _light: "oklch(0.7 0.178 30)", _dark: "oklch(0.51 0.178 30)" },
  },
  "800": {
    value: { _light: "oklch(0.65 0.209 30)", _dark: "oklch(0.555 0.209 30)" },
  },
  "900": {
    value: { _light: "oklch(0.6 0.23 30)", _dark: "oklch(0.6 0.23 30)" },
  },
  "1000": {
    value: { _light: "oklch(0.53 0.205 30)", _dark: "oklch(0.7 0.178 30)" },
  },
  "1100": {
    value: { _light: "oklch(0.47 0.18 30)", _dark: "oklch(0.78 0.125 30)" },
  },
  "1200": {
    value: { _light: "oklch(0.38 0.145 30)", _dark: "oklch(0.89 0.061 30)" },
  },
});
