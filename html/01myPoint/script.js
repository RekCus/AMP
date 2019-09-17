const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);

  let A = new Point(new Vector2d(getRandom(width),getRandom(height)),10);
  points.push(A);
  //A.draw(context);

  for(let i = 0; i<points.length;i++){
    points[i].radius += 1;
    points[i].draw(context)
    if(points[i].radius > 50){
      points.splice(i,1);
    }
  }
}

animate();

function getRandom(max){
  return Math.floor(Math.random()*max);
}
