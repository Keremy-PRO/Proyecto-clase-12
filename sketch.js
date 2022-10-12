
var trex ,trex_running;
var piso,pisoImage, pisoInvisible;
var nubeImage;
var ob1I,ob2I,ob3I,ob4I,ob5I,ob6I;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  pisoImage=loadImage("ground2.png");
  nubeImage=loadImage("cloud.png");
  ob1Image=loadImage("obstacle1.png");
  ob2Image=loadImage("obstacle2.png");

}

function setup(){ // configuraciones
  createCanvas(600,200)
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
 

  piso=createSprite(10,180,400,10);
  piso.addImage(pisoImage);
  piso.velocityX=-2;

  pisoInvisible=createSprite(10,190,400,5);
  pisoInvisible.shapeColor="white";
  pisoInvisible.visible=false;
}

function draw(){ // dibujo
  background(220)
  text(mouseX+"-"+mouseY,mouseX,mouseY);// 3 secciones 1 lo que yo quiero que s emuestre 2 posicion x y 3 posicion 
  drawSprites();

  if(keyDown("space")&& trex.y>150){// Saltar
    trex.velocityY=-10;
  }
  console.log(trex.y);
  trex.velocityY=trex.velocityY+0.8;//Gravedad
  trex.collide(pisoInvisible);//Colisión

  if(piso.x<0){
    piso.x=piso.width/2;
  }

  crearNubes();

}

function crearNubes(){
  var nube=createSprite(600,20,60,15);
  nube.velocityX=-2;
}

function crearCactus(){

}
