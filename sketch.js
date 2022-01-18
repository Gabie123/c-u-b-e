var light = 0
function setup() {
  createCanvas(1200,650);
  box = createSprite(600,325,25,25); 
}
function draw() {
  background(light);
  drawSprites();
  if (keyDown("1")) {
  light = 0
  }
  if (keyDown("2")) {
    light = 255
    }
   if (keyDown("UP_ARROW")) {
    light = light + 5
    }
    if (keyDown("DOWN_ARROW")) {
      light = light - 5
      }
}