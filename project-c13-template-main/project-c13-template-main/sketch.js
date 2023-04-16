var garden, rabbit;
var gardenImg, rabbitImg;

function preload() {
  gardenImg = loadImage('garden.png');
  rabbitImg = loadImage('rabbit.png');
  appleImg = loadImage('apple.png');
  orangeImg = loadImage('orangeLeaf.png');
  redImg = loadImage('redImage.png');
}

function setup() {
  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  var select_sprites = Math.round(random(1,3));
if(frameCount % 80 == 0){
  if
}







  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

funtion createApples(){
  apple = createSprite(random(50,350),40,10,10;
  apple.addImage(appeleImg);
  apple.scale = 0.07;
  apple.velocityY = 3
}






funtion createOrange{
  orangeL = createSprite(random(50,350),40,10,10;
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.08;
  orangeL.velocityY = 3;
}