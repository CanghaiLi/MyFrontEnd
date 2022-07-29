module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: [1, "never"], // 行尾不显示分号
    quotes: [1, "double"],
    "comma-dangle": [0],
  },
}
