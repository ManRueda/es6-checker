const astLoader = require('./ast-loader');

module.exports = (code) => {
  let ast = [];
  astLoader(code, (n) => ast.push(n));

  return {
    ast: ast,
    defaultParams: {
      basic: () => ast.filter(n => n.type === 'AssignmentPattern' && n.parent.type === 'FunctionExpression').length > 0
    },
    hasArrowFunction: () => ast.filter(n => n.type === 'ArrowFunctionExpression').length > 0,
  };
}
