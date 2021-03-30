
var music;
var box1
var box2
var box3
var box4
var jumpingkundham
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(750,600);

    //create 4 different surfaces
    box1 = createSprite(85,550,150,20);
    box1.shapeColor = "blue";
    box2 = createSprite(245,550,150,20)
    box2.shapeColor = "green";
    box3 = createSprite(405,550,150,20)
    box3.shapeColor = "orange";
    box4 = createSprite(565,550,150,20)
    box4.shapeColor = "red";

    jumpingkundham = createSprite(random(20,700),300,20,20);
    jumpingkundham.shapeColor = "white";
    jumpingkundham.velocityX = 3;
    jumpingkundham.velocityY = 6;


    edges= createEdgeSprites();
    



}

function draw() {
    background("black");
    jumpingkundham.bounceOff(edges);

    if(jumpingkundham.isTouching(box1)&& jumpingkundham.bounceOff(box1)){
        jumpingkundham.shapeColor ="blue";
        music.play();

    }

    else if(jumpingkundham.isTouching(box2)&& jumpingkundham.bounceOff(box2)){
        jumpingkundham.shapeColor ="green";
        music.play();
    }

    else if(jumpingkundham.isTouching(box3)&& jumpingkundham.bounceOff(box3)){
        jumpingkundham.shapeColor ="orange";
        music.stop();
        jumpingkundham.velocityX=0;
        jumpingkundham.velocityY=0;

    }

    else if(jumpingkundham.isTouching(box4)&& jumpingkundham.bounceOff(box4)){
        jumpingkundham.shapeColor ="red";
        music.play();

    }

    

    drawSprites();
}
