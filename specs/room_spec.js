const assert = require('assert')
const Room = require('../models/room.js')

describe('Room', function() {

  it('Should have an area in square meters', function() {
    const room = new Room(20);
    const actual = room.area;
    assert.strictEqual(actual, 20);
  });

  it('Should start not painted', function() {
    const room = new Room(20, false);
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('Should be able to be painted', function() {
    const room = new Room(20, true);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })

});
