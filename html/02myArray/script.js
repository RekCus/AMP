const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(200,300),100);
let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);


point.draw(context);

window.addEventListener('click',(evt)=>{
  mouseVector.dx = evt.clientX;
  mouseVector.dy = evt.clientY;
  console.log(mouseVector);
  console.log(point.position);
  difference.differenceVector(point.position,mouseVector);
  console.log(difference)
  console.log(difference.magnitude);
  if(difference.magnitude<= point.radius){
    point.position.dx += 50;
    point.position.dy += 50;
    point.draw(context);
  }

})
