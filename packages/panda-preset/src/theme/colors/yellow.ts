import { defineSemanticTokens } from "@pandacss/dev";

export const yellow = defineSemanticTokens.colors({
  "50": {
    value: { _light: "oklch(0.95 0.03 99)", _dark: "oklch(0.175 0.03 99)" },
  },
  "100": {
    value: { _light: "oklch(0.92 0.052 99)", _dark: "oklch(0.22 0.052 99)" },
  },
  "200": {
    value: { _light: "oklch(0.88 0.08 99)", _dark: "oklch(0.265 0.063 99)" },
  },
  "300": {
    value: { _light: "oklch(0.85 0.105 99)", _dark: "oklch(0.31 0.074 99)" },
  },
  "400": {
    value: { _light: "oklch(0.80 0.137 99)", _dark: "oklch(0.355 0.085 99)" },
  },
  "500": {
    value: { _light: "oklch(0.77 0.17 99)", _dark: "oklch(0.4 0.095 99)" },
  },
  "600": {
    value: { _light: "oklch(0.72 0.172 99)", _dark: "oklch(0.445 0.106 99)" },
  },
  "700": {
    value: { _light: "oklch(0.68 0.163 99)", _dark: "oklch(0.49 0.117 99)" },
  },
  "800": {
    value: { _light: "oklch(0.63 0.15 99)", _dark: "oklch(0.535 0.128 99)" },
  },
  "900": {
    value: { _light: "oklch(0.58 0.138 99)", _dark: "oklch(0.58 0.138 99)" },
  },
  "1000": {
    value: { _light: "oklch(0.52 0.123 99)", _dark: "oklch(0.68 0.163 99)" },
  },
  "1100": {
    value: { _light: "oklch(0.45 0.108 99)", _dark: "oklch(0.77 0.17 99)" },
  },
  "1200": {
    value: { _light: "oklch(0.37 0.088 99)", _dark: "oklch(0.88 0.08 99)" },
  },
});
