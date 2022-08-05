/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    quotes: [1, "double"],
    semi: [1, "never"],
    eqeqeq: "off",
    "prettier/prettier": [
      1,
      {
        semi: false,
      },
    ],
  },
}
