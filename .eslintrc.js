module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["src/database"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {

  }
};
