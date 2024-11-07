let imgArray = [];

let thump;

function preload() {
  imgArray[0] = loadImage('Assets/blueAmongUs.png');
  imgArray[1] = loadImage('Assets/redAmongUs.webp');
  imgArray[2] = loadImage('Assets/redDead.webp');
  imgArray[3] = loadImage ('Assets/AmongUs.png');
  imgArray[4] = loadImage ('Assets/purpleAmongUs.png');
  
  thump = loadSound ('Assets/among-us-sound-157106.mp3');
  
}


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  
  var button = createButton('Draw Red Among Us');
  button.parent('button-holder');
  button.mousePressed(redAmongUs);
  
  var button2 = createButton('Draw Blue Among Us');
  button2.parent('button-holder');
  button2.mousePressed(blueAmongUs);
  
  var button3 = createButton('Draw Random Image');
  button3.parent('button-holder');
  button3.mousePressed(randDraw);
  
  var button5 = createButton('Draw Among Us');
  button5.parent('button-holder');
  button5.mousePressed(AmongUs);
  
  var button4 = createButton('Draw Purple Among Us');
  button4.parent('button-holder');
  button4.mousePressed(purpleAmongUs);
  
  var button6 = createButton('Clear');
  button6.parent('button-holder');
  button6.mousePressed(clearBackground);
  
  var button7 = createButton('Play Sound');
  button7.parent('button-holder');
  button7.mousePressed(soundPlay);
  
  var button8 = createButton('save image');
  button8.parent('button-holder');
  button8.mousePressed(saveDrawing);
  
  
  frameRate(60);
  rectMode(CENTER);
  imageMode(CENTER);
  background(220);
}

function draw() {

}

function redAmongUs() {
  image(imgArray[1], random(width),random(height),30,30);
}

function blueAmongUs() {
  image(imgArray[0], random(width),random(height),30,30);
}

function randDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), random(10,50),random(10,50));
}

function AmongUs() {
  image(imgArray[3], random(width),random(height),30,30);
}

function purpleAmongUs() {
  image(imgArray[4], random(width),random(height),30,30);
}

function soundPlay(){
       if(thump.isPlaying()==false){
        thump.play();
    }
}

function saveDrawing() {
  save("Picture.png");
}

function clearBackground(){
  
    background(220);
}

function mousePressed() {
  if (mouseX < width && mouseX > 0){
    if (mouseY < height && mouseY >0){
    image(imgArray[2], mouseX ,mouseY,30,30);
    }
  }
}