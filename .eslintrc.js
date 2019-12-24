module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true
  },
  extends: [
    "prettier", "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  plugins: [
    "react", "prettier", "jsx-a11y", "import"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer/default-export": "off",
  }
}
