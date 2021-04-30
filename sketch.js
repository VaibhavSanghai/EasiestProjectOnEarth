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

/* 

Questions: 
1. What is cutting down trees called? 
2. What is the percent of oxygen in the air? 
3. Even ___% of carbon dioxide can harm our environment. 
4. Trees take in ________ and give out ________ ________. 
5. A tree can give out enough oxygen, in its entire life, that can help __ people survive lifetime.  
6. Which is the plant that can live for hundreds of years?
7. Which is the only tree that gives out oxygen 24/7?
8. Does sitting under a tree's shadow block the UV rays from the sun?
9. What happens when there are floods in regions with a lot of trees? 
10. Trees can help reduce _______. 

Answers: 
1. Deforestation
2. 21%
3. 1
4. oxygen, carbon dioxide
5. 10
6. Banyan Tree
7. Peepal Tree
8. Yes
9. Soil does not erode
10. Stress

OPTIONS: 
1. a) Deforestation b) Afforestation c) 
2. a)  b)  c)
3. a)  b)  c)
4. a)  b)  c)
5. a)  b)  c)
6. a)  b)  c)
7. a)  b)  c)
8. a)  b)  c)
9. a)  b)  c)
10. a)  b)  c)

*/