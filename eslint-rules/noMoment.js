module.exports = {
  meta: {
    type: "problem",
    messages: {
      noMoment: "Do not use moment.js. Use date-fns or native Date instead.",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({ node, messageId: "noMoment" });
        }
      },
      CallExpression(node) {
        if (
          node.callee.name === "require" &&
          node.arguments[0].value === "moment"
        ) {
          context.report({ node, messageId: "noMoment" });
        }
      },
    };
  },
};
