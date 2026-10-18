// Hard-coded colours are banned in CSS modules: every colour resolves to a token (CLAUDE.md rule 4).
// globals.css is where the tokens are defined, so it is not linted.

/** @type {import('stylelint').Config} */
export default {
  rules: {
    "color-no-hex": true,
    "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla"],
  },
  ignoreFiles: [
    // known debt, tracked in AUI-39 (no figma token yet)
    "app/components/DialerCard/DialerCard.module.css",
    "app/components/Fieldset/Fieldset.module.css",
    // not tracked yet: rgba(0, 0, 0, 0.1) inset shadow, same value as --shadow-inset-bottom
    "app/components/TabGroup/TabGroup.module.css",
    // throwaway tester pages, not part of the design system
    "app/tester-*/page.module.css",
  ],
};
