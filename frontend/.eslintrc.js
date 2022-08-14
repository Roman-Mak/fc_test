module.exports = {
  env: {
    browser: false,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
}
