module.exports = {
  extends: [
    "universe",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.jsx"],
    },
  ],
  plugins: ["prettier", "react", "react-native", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/ignore": ["react-native"],
    react: {
      version: "detect",
    },
  },
};
