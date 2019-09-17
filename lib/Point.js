class Point {
  constructor(position,radius){
    this.position = position;
    this.radius = radius;

  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "rgb(0,0,255)";
    context.fillStyle = "rgba(10,100,50,0.3)";
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    }
}
