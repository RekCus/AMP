const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,true,"yellow");
let B = new Point(new Vector2d(800,300),20,true,"blue");

let C = new Point(new Vector2d(400,500),20,true,"red")

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);


  A.draw(context);
  B.draw(context);

  l.defineLineByTwoPoints(A,B);
  l.draw(context);
  
  
  
  m.draw(context);

  C.draw(context);

  m.slope = -1/l.slope;
  m.intercept = C.position.dy - m.slope*C.position.dx;
}

animate();
