import { describe, test } from 'vitest';
import { RuleTester } from "eslint";
import rule from "../camelCaseFunctions";
describe('camelCaseFunctions ESLint Rule', () => {
test('validates and fixes function naming conventions', () => {
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
});
});
