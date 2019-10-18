class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  calcY(x){
    return this.slope * x + this.intercept;
  }

  defineLineByTwoPoints(A,B){
    this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
    this.intercept = A.position.dy - this.slope*A.position.dx;
  }

  draw(context){
    context.beginPath();
    context.moveTo(0,this.calcY(0));
    context.lineTo(canvas.width,this.calcY(canvas.width));
    context.closePath();
    context.stroke();
  }
}
