console.log('Starting camelCaseFunctions rule tests...');

const { RuleTester } = require("eslint");
const rule = require("../camelCaseFunctions");

const ruleTester = new RuleTester({
parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
}
});

ruleTester.run("camelCaseFunctions", rule, {
  valid: [
    { code: "function myFunction() {}" },
    { code: "const myFunction = () => {};" },
  ],
  invalid: [
    {
      code: "function My_function() {}",
      output: "function myFunction() {}",
      errors: [{ message: "Function names should be in camelCase." }],
    },
    {
      code: "const my_function = () => {};",
      output: "const myFunction = () => {};",
      errors: [{ message: "Function names should be in camelCase." }],
    },
],
});

console.log('All camelCaseFunctions rule tests passed successfully!');
process.exit(0);
