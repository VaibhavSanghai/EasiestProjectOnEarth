var bgImg; 
var water, fertilizers;
var planter, planterImg;
var map, toolbox, fence;
var bg = "images/day.jpeg"; 
var tree, treeImg1, treeImg2, treeImg3;  
var timerPlant, energyBar, energyBarImg; 
var sun, sunImg, moon, moonImg, day, dayImg, night, nightImg; 

function preload() {
    fetchTime(); 

    //Tree
    treeImg1 = loadImage("images/seedling.png"); 
    treeImg2 = loadImage("images/pot3.jpeg"); 
    treeImg3 = loadImage("images/finalTree.png"); 

    //Sun
    sunImg1 = loadImage("images/sun1.jpeg"); 
    sunImg2 = loadImage("images/sun2.jpeg"); 
    sunImg3 = loadImage("images/sun3.png"); 

    //Moon
    moonImg = loadImage("images/moon.jpeg"); 

    //Gardener
    planterImg = loadImage("images/gardener.png"); 

    //Waterer
    watererImg = loadImage("images/watering2.jpg"); 
}

function setup() {
    createCanvas(800, 400); 

    //Gardener
    planter = createSprite(100, 350, 10, 10); 
    planter.addImage("gardener", planterImg); 

    //Facilities
    energyBar = createSprite(85, 20, 50, 10); 
    toolBox = createSprite(600, 100, 30, 100); 

    //Tree
    tree = createSprite(); 
    tree.addImage("treeComplete", treeImg1); 

    //Sun
    sun = createSprite(); 
    sun.addImage("sunLight", sunImg1); 

    //Moon
    moon = createSprite(); 
    moon.addImage("moonLight", moonImg); 

    //Water
    waterSupply = createSprite(600, 50, 25, 25); 
}

function draw() {
    background(bgImg); 

    //Key Down Functions
    if (keyDown(UP_ARROW)) {
        planter.y = planter.y - 2; 
    }

    if (keyDown(DOWN_ARROW)) {
        planter.y = planter.y + 2; 
    }

    if (keyDown(RIGHT_ARROW)) {
        planter.x = planter.x + 2; 
    }

    if (keyDown(LEFT_ARROW)) {
        planter.x = planter.x - 2; 
    }

    if (mousePressedOver(waterSupply)) {
        waterPress();
    }

    if (mouesPressedOver(fertilizer)) {
        fertilizerPress();
    }

    //Fence Loops
    for (var f = 10; f <= 400; f = f + 30) {
        fence = createSprite(700, f, 20, 22); 
        fence.shapeColor = "black"; 
    }

    for (var w = 30; w <= 400; w = w + 30) {
        fence2 = createSprite(700, w, 20, 16); 
        fence2.shapeColor = "white"; 
    }

    //Texts
    text(mouseX + "," + mouseY, mouseX, mouseY);
    
    //Health
    fill("red"); 
    textSize(15);
    text("Health", 15, 25); 
    
    //Resources
    fill("blue"); 
    textSize(15); 
    text("Resources", 565, 43); 

    drawSprites(); 
}

async function fetchTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json(); 

    var time = responseJSON.datetime;
    var hour = time.slice(11, 13);

    if (hour > 6 && hour < 18) {
        bg = "images/day.jpeg"; 
    } else {
        bg = "images/night.jpeg"; 
    }

    bgImg = loadImage(bg); 
}

function waterPress() {

}

function fertilizerPress() {

}
