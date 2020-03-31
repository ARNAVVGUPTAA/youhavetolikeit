var pointer,x = 600,y = 400;
function setup() {

  createCanvas(1200,800);
  

  
}

function draw() {
  background(rgb(World.mouseX,World.mouseY,180));

  x = World.mouseX;
  y = World.mouseY;

  var rand = Math.round(random(1,6));
  switch(rand){
    case 1: fill("brown"); break;
    case 2: fill("red"); break;
    case 3: fill("blue"); break;
    case 4: fill("green"); break;
    case 5: fill("pink"); break;
    case 6: fill("purple"); break;
    default: break;
  }
  
  ellipse(x,y,55,55);

  drawSprites();
}