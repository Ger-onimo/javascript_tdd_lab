const Paint = function(litres){
  this.litres = litres;

};

Paint.prototype.subtractPaint = function () {
  return this.paint.litres -= 1

};
module.exports = Paint
