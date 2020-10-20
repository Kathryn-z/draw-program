let shapes = []
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
    if (shape.shapeType == 'triangle') {
      triangle(shape.x, shape.y, shape.x-50,shape.y+75,shape.x+50,shape.y+75);
    }
  }
}

function mousePressed() {
  let shape = removeShape();
  if (shape){
    let i=shapes.indexOf(shape);
    shapes.splice(i,1)
    return;
  }
  addAShape();
}

function removeShape() {
  for (let shape of shapes) {
    if (shape.x < mouseX && mouseX < shape.x+100 && shape.y<mouseY && mouseY < shape.y+100) {
      return shape;
    }
  }
  return null;
}

function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red', 'blue', 'green']),
    shapeType: random(['square', 'circle','triangle'])
  }
  shapes.push(shape1);
}
