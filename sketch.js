var imgGato, gatoAnda, gatoPara
var ratoProvoca, fotoRato, ratoLupa
var rato, gato
var jardimin

function preload() {
    imgGato=loadAnimation("images/cat1.png");
    gatoAnda=loadAnimation("images/cat2.png","images/cat3.png");
    gatoPara=loadAnimation("images/cat4.png")
    fotoRato=loadAnimation("images/mouse2.png");
    ratoProvoca=loadAnimation("images/mouse1.png","images/mouse3.png");
    ratoLupa=loadAnimation("images/mouse4.png");
    jardimin=loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,400);
    gato=createSprite(530,350);
    gato.addAnimation("tomSleeping",imgGato)
    gato.scale=0.08;

    rato=createSprite(70,350)
    rato.addAnimation("jerryStanding", fotoRato)
    rato.scale=0.08
}

function draw() {
    background(jardimin);

    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.addAnimation("boloDeMurango",gatoPara);
        gato.changeAnimation("boloDeMurango");
        gato.velocityX=0;
        gato.x=120;
        gato.scale=0.1;

        rato.addAnimation("NenemNaoNenem",ratoLupa);
        rato.changeAnimation("NenemNaoNenem")
        rato.scale=0.09
    }

    drawSprites();
}


function keyPressed(){
  if(keyDown="A"){
    rato.addAnimation("provocaçao",ratoProvoca);
    rato.changeAnimation("provocaçao");
    rato.frameDelay= 25;

    gato.velocityX=-5;
    gato.addAnimation("andando",gatoAnda);
    gato.changeAnimation("andando");
    gato.scale=0.12
  }
}
