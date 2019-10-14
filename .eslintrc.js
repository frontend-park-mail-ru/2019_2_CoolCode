module.exports = {
  'env': {
    'es6': true,
  },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },

  'rules': {
      "semi" : ["warn"],
      "block-spacing" : ["warn"],
      "newline-per-chained-call" : ["warn"],
      "no-multiple-empty-lines" : ["warn", { "max": 1, "maxEOF": 1 }],
      "no-multi-spaces" : ["warn"],
      "space-before-blocks" : ["warn", "always"],
      "indent" : ["warn", "tab"],
      "space-infix-ops" : ["warn"],
     "no-unused-vars" : ["warn"]
  },
};
