const astLoader = require('./ast-loader');

module.exports = (code) => {
  let ast = [];
  astLoader(code, (n) => ast.push(n));

  return {
    defaultParams: {
      basic: () =>
        ast.filter(n => n.type === 'AssignmentPattern'
                && n.parent.type === 'FunctionExpression').length > 0,

      explicitUndefined: () =>
        ast.filter(n => {
          return n.type === 'AssignmentPattern'
                && n.parent.type === 'FunctionExpression'
                && n.parent.parent.arguments[n.parent.params.indexOf(n)]
                && n.parent.parent.arguments[n.parent.params.indexOf(n)].name === 'undefined'}).length > 0

    },
    hasArrowFunction: () => ast.filter(n => n.type === 'ArrowFunctionExpression').length > 0,
  };
}
