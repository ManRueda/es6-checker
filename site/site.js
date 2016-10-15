var checkers = require('./src/checkers.js');

window.onCodeChange = function onCodeChange() {
  var code = document.querySelector('#code').value;
  cleanNode(document.querySelector('#features'));

  try {
    let results = featuresAnalyzer(checkers(code.trim()));
    for (var prop in results) {
      if (results.hasOwnProperty(prop)) {
        let newNode = document.createElement('li');
        newNode.textContent = `${prop} -> ${results[prop]}`;
        document.querySelector('#features').appendChild(newNode);
      }
    }
  } catch (e) {
    console.log(e);
  } finally {

  }
}

function featuresAnalyzer (obj, parent) {
  var rsp = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] instanceof Function) {
        rsp[parent ? parent + '.' + key : key] = obj[key]();
      }else{
        Object.assign(rsp, featuresAnalyzer(obj[key], parent ? parent + '.' + key : key));
      }
    }
  }
  return rsp;
}

function cleanNode (node) {
  while (node.firstChild) {
      node.removeChild(node.firstChild);
  }
}
