import { defineSemanticTokens } from "@pandacss/dev";

export const amber = defineSemanticTokens.colors({
  "50": {
    value: { _light: "oklch(0.95 0.03 75)", _dark: "oklch(0.175 0.03 75)" },
  },
  "100": {
    value: { _light: "oklch(0.92 0.052 75)", _dark: "oklch(0.22 0.052 75)" },
  },
  "200": {
    value: { _light: "oklch(0.89 0.08 75)", _dark: "oklch(0.265 0.063 75)" },
  },
  "300": {
    value: { _light: "oklch(0.85 0.105 75)", _dark: "oklch(0.31 0.074 75)" },
  },
  "400": {
    value: { _light: "oklch(0.81 0.137 75)", _dark: "oklch(0.355 0.085 75)" },
  },
  "500": {
    value: { _light: "oklch(0.78 0.17 75)", _dark: "oklch(0.4 0.095 75)" },
  },
  "600": {
    value: { _light: "oklch(0.73 0.172 75)", _dark: "oklch(0.445 0.106 75)" },
  },
  "700": {
    value: { _light: "oklch(0.69 0.163 75)", _dark: "oklch(0.49 0.117 75)" },
  },
  "800": {
    value: { _light: "oklch(0.63 0.15 75)", _dark: "oklch(0.535 0.128 75)" },
  },
  "900": {
    value: { _light: "oklch(0.58 0.138 75)", _dark: "oklch(0.58 0.138 75)" },
  },
  "1000": {
    value: { _light: "oklch(0.52 0.123 75)", _dark: "oklch(0.69 0.163 75)" },
  },
  "1100": {
    value: { _light: "oklch(0.46 0.108 75)", _dark: "oklch(0.78 0.17 75)" },
  },
  "1200": {
    value: { _light: "oklch(0.37 0.088 75)", _dark: "oklch(0.89 0.08 75)" },
  },
});
