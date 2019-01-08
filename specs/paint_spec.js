const assert = require('assert')
const Paint = require('../models/paint.js')

describe('Paint', function() {

  it('Should have a number of litres of paint', function() {
    const paint = new Paint(5);
    const actual = paint.litres;
    assert.strictEqual(actual, 5);
  });

  it('Should be able to check if empty', function() {
    const paint = new Paint(0);
    const actual = paint.litres;
    assert.strictEqual(actual, 0);
  });

  it('Should be able to empty itsef of paint', function(){
    const paint = new Paint(5);
    const actual = paint.subtractPaint;
    assert.strictEqual(actual, 4 )
  });






});
