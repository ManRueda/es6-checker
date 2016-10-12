const babylon = require('babylon');

module.exports = (code, cb) => {
  let AST = babylon.parse(code, {sourceType: 'module'});
  ASTLoop(AST.program, cb);
};
function ASTLoop(ast, cb) {
  cb(ast);

  getChildren(ast).forEach(x => ASTLoop(x, cb));
}


function getChildren(node) {
  let children = [];
  children = children.concat(normalizeArray(node.body));
  children = children.concat(normalizeArray(node.declarations));
  children = children.concat(normalizeArray(node.init));
  children = children.concat(normalizeArray(node.expression));
  children = children.concat(normalizeArray(node.callee));
  children = children.concat(normalizeArray(node.params).map(p => Object.assign({}, p, {parent: node})));

  return children;
}

function normalizeArray(prop) {
  let rsp = [];
  if (prop){
    if (prop instanceof Array){
      rsp = rsp.concat(prop);
    }else{
      rsp.push(prop);
    }
  }
  return rsp;
}
