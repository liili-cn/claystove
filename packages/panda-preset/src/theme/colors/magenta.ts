import { defineSemanticTokens } from "@pandacss/dev";

export const magenta = defineSemanticTokens.colors({
  "50": {
    value: { _light: "oklch(0.96 0.023 360)", _dark: "oklch(0.195 0.023 360)" },
  },
  "100": {
    value: { _light: "oklch(0.93 0.041 360)", _dark: "oklch(0.24 0.041 360)" },
  },
  "200": {
    value: { _light: "oklch(0.89 0.061 360)", _dark: "oklch(0.285 0.061 360)" },
  },
  "300": {
    value: { _light: "oklch(0.86 0.08 360)", _dark: "oklch(0.33 0.08 360)" },
  },
  "400": {
    value: { _light: "oklch(0.82 0.103 360)", _dark: "oklch(0.375 0.103 360)" },
  },
  "500": {
    value: { _light: "oklch(0.79 0.125 360)", _dark: "oklch(0.42 0.125 360)" },
  },
  "600": {
    value: { _light: "oklch(0.74 0.153 360)", _dark: "oklch(0.465 0.153 360)" },
  },
  "700": {
    value: { _light: "oklch(0.7 0.178 360)", _dark: "oklch(0.51 0.178 360)" },
  },
  "800": {
    value: { _light: "oklch(0.65 0.209 360)", _dark: "oklch(0.555 0.209 360)" },
  },
  "900": {
    value: { _light: "oklch(0.6 0.23 360)", _dark: "oklch(0.6 0.23 360)" },
  },
  "1000": {
    value: { _light: "oklch(0.54 0.205 360)", _dark: "oklch(0.7 0.178 360)" },
  },
  "1100": {
    value: { _light: "oklch(0.47 0.18 360)", _dark: "oklch(0.79 0.125 360)" },
  },
  "1200": {
    value: { _light: "oklch(0.38 0.145 360)", _dark: "oklch(0.89 0.061 360)" },
  },
});
