import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/jsx-no-literals": [
        "error",
        {
          allowedStrings: ["allowed"],
        },
      ],
    },
  },
];
