var dog, happyDog, database, foodS, foodStock;
var dog1
function preload()
{
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database= firebase.database();
  foodStock = database.ref('Food');
  database.ref('/').set({
    Food:20
  })
  foodStock.on("value", readStock);


  dog1= createSprite(250, 350);
  dog1.addImage(dog);
  dog1.scale =0.2
}


function draw() {  
background(46,139, 87)


if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog1.addImage(happyDog);



}



drawSprites();
textSize(20);
fill("green");
stroke("red");

text (" Note: Press UP_ARROW key to feed Drago milk", 30, 100);
text ("Remaining food :" + foodS, 150, 150);
}

function readStock(data){
foodS= data.val();

}

function writeStock(x){
if( x<=0){
  x=0;
}
else{
  x= x-1;
}
database.ref('/').update({
  Food:x
})

}
