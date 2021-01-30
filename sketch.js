const Body=Matter.Body
const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

function preload()
{
bg=loadImage("images/starnight.png")
fairyImg=loadImage("images/fairy1.png")
starImg=loadImage("images/star.png")
}
function setup() {
  createCanvas(800, 750);
  fairy=createSprite(300,600,50,50)
  fairy.addImage(fairyImg)
  fairy.scale=0.3
  engine=Engine.create()
  world=engine.world 
  star=Bodies.rectangle(600,50,30,30,{isStatic:true})
  World.add(world,star)
}


function draw() {
  background(bg);
if(keyDown("left")){
  fairy.x=fairy.x-5
}
if(keyDown("right")){
  fairy.x=fairy.x+5
}
image(starImg,this.star.position.x,this.star.position.y,30,30)
drawSprites()
}
function keyPressed(){
  if(keyCode==32){
Matter.Body.setStatic(star.body,false)

  }
}