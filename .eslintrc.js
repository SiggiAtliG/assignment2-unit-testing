module.exports = {
root: true,
env: {
    node: true,
    es2020: true
},
extends: [
    "eslint:recommended"
],
parserOptions: {
    ecmaVersion: 2020
},
overrides: [
    // TypeScript files
    {
    files: ["*.ts", "*.tsx"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module"
    }
    },
    // JavaScript files
    {
    files: ["*.js"],
    env: {
        node: true,
        commonjs: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "script"
    },
    rules: {
        "no-undef": "off"  // Since these are Node.js files using CommonJS
    }
    }
]
};
