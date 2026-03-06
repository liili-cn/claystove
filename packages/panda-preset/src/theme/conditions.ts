export const conditions = {
  extend: {
    light: ":root &, .light &",
    hover: "&:not(:disabled):hover",
    active: "&:not(:disabled):active",
    // invalid: "&:is(:user-invalid, [data-invalid], [aria-invalid=true])",
    // checked:
    //   "&:is(:checked, [data-checked], [data-state=checked], [aria-checked=true], [data-state=indeterminate])",
    // on: "&:is([data-state=on])",
    // pinned: "&:is([data-pinned])",
  },
} as const;
