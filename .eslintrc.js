module.exports = {
    'env': {
        'es6': true,
    },
    "plugins": [ "babel" ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true,
            "allowImportExportEverywhere": true,
            "classes":true,
        }
    },

    'rules': {
        "semi" : ["error"],
        "block-spacing" : ["error"],
        "newline-per-chained-call" : ["error"],
        "no-multiple-empty-lines" : ["error", { "max": 1, "maxEOF": 1 }],
        "no-multi-spaces" : ["error"],
        "space-before-blocks" : ["error", "always"],
        "indent" : ["error", "tab"],
        "space-infix-ops" : ["error"],
        "no-unused-vars" : ["warn"],
        "comma-spacing": ["error"]
    },
};