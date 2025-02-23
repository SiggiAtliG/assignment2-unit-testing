module.exports = {
  meta: {
    type: "problem",
    messages: {
      noConsoleLog: "Do not use console.log() in production.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object?.name === "console" &&
          node.callee.property?.name === "log"
        ) {
          context.report({ node, messageId: "noConsoleLog" });
        }
      },
    };
  },
};
