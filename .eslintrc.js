module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended"
  ],
  "plugins": [],
  "rules": {
    // "no-console": [
    //   "error",
    //   {
    //     "allow": [
    //       "warn",
    //       "error"
    //     ]
    //   }
    // ],
    // "semi": [
    //   "error",
    //   "always"
    // ],
    // "quotes": [
    //   "error",
    //   "double"
    // ],
    // "camelcase": [
    //   "error"
    // ],
    // "no-unused-vars": [
    //   "error"
    // ],
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     "devDependencies": false,
    //     "optionalDependencies": false,
    //     "peerDependencies": false
    //   }
    // ]
  }
}