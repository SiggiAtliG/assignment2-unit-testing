module.exports = {
  meta: {
    type: "suggestion",
    messages: {
      camelCase: "Function names should be in camelCase.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    // Helper function to check an identifier
    function checkIdentifier(node, identifier) {
      const functionName = identifier.name;
      if (!/^[a-z][a-zA-Z0-9]*$/.test(functionName)) {
        context.report({
          node: identifier,
          messageId: "camelCase",
          fix: (fixer) => {
            // Replace dashes/underscores with the next character uppercased
            const fixedName = functionName.replace(/[-_](.)/g, (_, char) =>
              char.toUpperCase(),
            );
            // Ensure the first letter is lowercase
            return fixer.replaceText(
              identifier,
              fixedName.charAt(0).toLowerCase() + fixedName.slice(1),
            );
          },
        });
      }
    }
    return {
      // Check named function declarations
      FunctionDeclaration(node) {
        if (node.id) {
          checkIdentifier(node, node.id);
        }
      },
      // Also check arrow functions or function expressions assigned to variables
      VariableDeclarator(node) {
        if (
          node.init &&
          (node.init.type === "ArrowFunctionExpression" ||
            node.init.type === "FunctionExpression") &&
          node.id.type === "Identifier"
        ) {
          checkIdentifier(node, node.id);
        }
      },
    };
  },
};
