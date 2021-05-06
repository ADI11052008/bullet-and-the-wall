var car ,wall ,speed ,weight

function setup() {
  createCanvas(800,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(20,83)

  car=createSprite(100,200,20,20)
  car.velocityX=speed
  car.shapeColor="white"

  wall=createSprite(795,240,thickness,200)
  wall.shapeColor="blue"

}

function draw() {
  background(0);

  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor="red"
    }
    
    if(damage<10){
      wall.shapeColor="green"
    }
  }
    
  drawSprites();
}