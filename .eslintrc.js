module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    // "react/button-has-type": "off",
    "react/function-component-definition": "off",
    // "arrow-body-style": "off",
    // "import/prefer-default-export": "off",
    // "react/jsx-no-constructed-context-values": "off",
    // "react/jsx-filename-extension": "off",
    // "react/jsx-no-useless-fragment": "off",
    // "no-return-await": "off",
    // "import/order": "off",
    // "no-shadow": "off",
    "jsx-a11y/anchor-is-valid": "off",
  },
};
