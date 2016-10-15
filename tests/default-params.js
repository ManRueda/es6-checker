var test = require('tape');
var checkers = require('../src/checkers');

test('Default parameters - basic', function (t) {
    let result = checkers(`
      (function (a = 1, b = 2) {
        return a === 3 && b === 2;
      }(3))`);

    t.plan(1);

    t.true(result.defaultParams.basic());
});

test('Default parameters - explicit undefined defers to the default', function (t) {
    let result = checkers(`
      (function (a = 1, b = 2) {
        return a === 1 && b === 3;
      }(undefined, 3))`);

    t.plan(1);

    t.true(result.defaultParams.explicitUndefined());
});

test('Default parameters - defaults can refer to previous params', function (t) {
    let result = checkers(`
      (function (a, b = a) {
        return b === 5;
      }(5))`);

    t.plan(1);

    t.true(result.defaultParams.referPreviousParam());
});
