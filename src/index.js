const checkers = require('./checkers');

let dada = checkers(`
  (function (a = 1, b = 2) {
    return a === 3 && b === 2;
  }(3))`);

console.log(dada.ast[6])
