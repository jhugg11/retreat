/* jshint jasmine: true, node: true*/
'use strict';
let rules = require('../classes/rules');

describe("Game of Life", function () {
  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function () {

    let cell = rules.cell();

    expect(cell.shouldBeAlive([
      { isAlive: true },
      { isAlive: true },
      { isAlive: true}
    ])).toBe(true);

  });
});