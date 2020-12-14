var link,linkPos,linkMov
var gameState,edges,life,score;
var bgImg,music,gameOver
var edges,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var og1,og2,og3,og4;
var arrowGroup,arrow;
var arrowCount;
var horisword,vertisword,horishield,vertishield;
var num,num1


function setup() {
  createCanvas(600,600)
  edges=createEdgeSprites();
  horisword=createSprite(1000,1000,10,30)
  vertisword=createSprite(1000,1000,30,10)
  horishield=createSprite(1000,1000,5,50)
  vertishield=createSprite(1000,1000,50,5)
  arrow=createSprite(1000,1000,30,10)
  horisword.shapeColor=255
  vertisword.shapeColor=255
  horishield.shapeColor="blue"
  vertishield.shapeColor="blue"
  
  arrowCount=3

  linkMov="still"
  b1=createSprite(250,95,10,300)
  b1.shapeColor=0
  b2=createSprite(340,95,10,300)
  b2.shapeColor=0
  b3=createSprite(120,240,250,10)
  b3.shapeColor=0
  b4=createSprite(470,240,250,10)
  b4.shapeColor=0
  b5=createSprite(250,453,10,300)
  b5.shapeColor=0
  b6=createSprite(340,453,10,300)
  b6.shapeColor=0
  b7=createSprite(120,308,250,10)
  b7.shapeColor=0
  b8=createSprite(470,308,250,10)
  b8.shapeColor=0
  link=createSprite(300,230,50,50)
  link.shapeColor="green"


  life=5
  score=0

 gameState = "Playing";
 linkPos="down"
fill("red")

og1=createGroup()
og2=createGroup()
og3=createGroup()
og4=createGroup()
arrowGroup=createGroup()
}

function draw() {
background(255,0,255)
  textSize(35)
  if(link.vlocityX===0&&link.velocityY===0){
    linkMov="still"
  }
  if(life!==0){
 background(255,0,255)
}
if(life>=20){
  life=20
}
arrowGroup.bounceOff(horishield)
arrowGroup.bounceOff(vertishield)

og1.collide(horishield)
og1.collide(vertishield)
og2.collide(horishield)
og2.collide(vertishield)
og3.collide(horishield)
og3.collide(vertishield)
og4.collide(horishield)
og4.collide(vertishield)
 link.setVelocity(0,0)
 link.bounceOff(edges)
 link.bounceOff(b1)
 link.bounceOff(b2)
 link.bounceOff(b3)
 link.bounceOff(b4)
 link.bounceOff(b5)
 link.bounceOff(b6)
 link.bounceOff(b7)
 link.bounceOff(b8)
 if(gameState==="Playing"){
 if(keyWentDown("a")&&linkMov==="still"){
  if(linkPos==="up"){
    horisword.x=link.x-5
    horisword.y=link.y-30
  }
  if(linkPos==="down"){
    horisword.x=link.x
    horisword.y=link.y+30
  }
  if(linkPos==="left"){
    vertisword.x=link.x-33
    vertisword.y=link.y+3
  }
  if(linkPos==="right"){
    vertisword.x=link.x+33
    vertisword.y=link.y+3
  }
 }
 if(keyDown("d")&&linkMov==="still"){
  if(linkPos==="up"){
    vertishield.x=link.x
    vertishield.y=link.y-20
  }
  if(linkPos==="down"){
    vertishield.x=link.x
    vertishield.y=link.y+20
  }
  if(linkPos==="left"){
    horishield.y=link.y
    horishield.x=link.x-20
  }
  if(linkPos==="right"){
    horishield.y=link.y
    horishield.x=link.x+20
  }
 }
 if(keyWentUp("d")){
  horishield.x=1000
  horishield.y=1000
  vertishield.x=1000
  vertishield.y=1000
}
 if(keyWentDown("w")&&arrowCount!==0&&linkMov==="still"){
  if(linkPos==="up"){ 
    uarow()
  }
  if(linkPos==="down"){
    darow()
  }
  if(linkPos==="left"){
    larow()
  }
  if(linkPos==="right"){
    rarow()
  }
  
  if(keyWentUp("w")){
    
    if(linkPos==="up"){
      link.changeAnimation("up",lui)
  
    }
    if(linkPos==="down"){
      link.changeAnimation("down",ldi)
    
    }
    if(linkPos==="left"){
      link.changeAnimation("left",lli)
  
    }
    if(linkPos==="right"){
      link.changeAnimation("right",lri)
  
    }
   }
 }
 if(keyWentUp("a")){
  horisword.x=1000
  horisword.y=1000
  vertisword.x=1000
  vertisword.y=1000
 }
 if(frameCount%100===0){
  var num=Math.round(random(1,4))
  switch(num){
    case 1:spawnup()
    break
    case 2:spawndown()
    break
    case 3:spawnleft()
    break
    case 4:spawnright()
    break
  }
}
 if(vertisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(vertisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(vertisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}

if(vertisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(horisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(arrow.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
 if(keyDown(UP_ARROW)){
  linkMov==="moving"
  link.velocityY=-2
  linkPos="up"
}
if(keyDown(DOWN_ARROW)){
  linkMov==="moving"
  link.velocityY=2
  linkPos="down"
}
if(keyDown(LEFT_ARROW)){
  linkMov==="moving"
  link.velocityX=-2
  linkPos="left"
}
if(keyDown(RIGHT_ARROW)){
  linkMov==="moving"
  link.velocityX=2
  linkPos="right"
}
if(link.isTouching(og1)||link.isTouching(og2)||link.isTouching(og3)||link.isTouching(og4)){
  life=life-1;
  if(link.isTouching(og1)){og1.destroyEach()}
  if(link.isTouching(og2)){og2.destroyEach()}
  if(link.isTouching(og3)){og3.destroyEach()}
  if(link.isTouching(og4)){og4.destroyEach()}
}
textSize(20)
fill("red")
text("Life="+life,85,500)
text("Score="+score,85,540)
text("Arrows:"+arrowCount,50,50)
text("Controls",400,50)
text("Arrow keys to move",400,100)
text("W to fire",400,190)
text("A to attack",400,130)
text("S to shield",400,160)
if(life===0){
  background(0)  
  end()
}
}

 link.scale=0.4
  drawSprites();

  


}
function spawnup(){
  oktou=createSprite(300,450,30,30)
  oktou.velocityY=-3
  oktou.shapeColor="red"
  og4.add(oktou)
}
function spawndown(){
  oktou=createSprite(300,0,30,30)  
  oktou.lifetime=700
  oktou.shapeColor="red"
  oktou.velocityY=3
  og3.add(oktou)
}
function spawnleft(){
  oktou=createSprite(0,270,30,30)
  oktou.velocityX=3
  oktou.shapeColor="red"
  og2.add(oktou)
}
function spawnright(){
  oktou=createSprite(600,270,30,30) 
  oktou.velocityX=-3
  oktou.shapeColor="red"
  og1.add(oktou)
}
function end(){
  gameState="End"
  background(0)
  fill("white")
  textSize(45)
  text("Game Over",200,300)
  
  link.destroy()
  og1.destroyEach()
  og2.destroyEach()
  og3.destroyEach()
  og4.destroyEach()
}
function uarow(){
  arrow=createSprite(link.x,link.y-20,10,10)
  arrow.velocityY=-5
  arrow.shapeColor="brown"
  arrowCount=arrowCount-1
  arrowGroup.add(arrow) 
}
function darow(){
  arrow=createSprite(link.x,link.y+20,10,10)
  arrow.velocityY=5
  arrow.shapeColor="brown"
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
function larow(){
  arrow=createSprite(link.x-20,link.y,10,10)
  arrow.velocityX=-5
  arrow.shapeColor="brown"
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
function rarow(){
  arrow=createSprite(link.x+20,link.y,10,10)
  arrow.velocityX=5
  arrow.shapeColor="brown"
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
