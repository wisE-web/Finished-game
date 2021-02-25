/*
My game is a maze that you have to get through and everytime you complete a level it gets harder, and there are no shortcuts
first level keys: w,a,s,d
second level keys: press spacebar FIRST and to move it is the arrow keys
third level keys: press m FIRST and to move it is i,j,k,l
the score is your progress/ how far into the level you are
*/


var player;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11;
var finish;
var gameState = "lvl:1"
var timer=0;
var flag=0;
var score;
function preload()
{
youWon = loadImage("youWon.png");
playerimg = loadImage("download.png");
wallimg= loadImage("wall.png");
backgroundimg = loadImage("download.jpg");
finishline = loadImage("Finishline.png");
}

function setup() {
	createCanvas(800, 700);
	player= createSprite(36,655,20,20);
	
	player.addImage(playerimg);
	player.scale=0.3;
	youwon = createSprite(400,350,200,200);
	youwon.addImage(youWon);
	score = 0;
	youwon.scale=0.1;
	youwon.visible=false;
	maze1= createSprite(230,390,550,20);

	maze2 = createSprite(90,600,20,200);

	maze3 = createSprite(230,500,300,20);

	maze4 = createSprite(390,597,20,220);

	maze5 = createSprite(510,500,20,200);
	
	maze6 = createSprite(600,600,200,20);
	
	maze7 = createSprite(690,460,20,300);

	maze8 = createSprite(350,319,700,20);
	
	maze9 = createSprite(100,150,20,100);

	maze10=createSprite(450,200,700,20);

	maze11=createSprite(450,100,700,20);
/*
	maze1.addImage(wallimg);
	maze2.addImage(wallimg);
	maze3.addImage(wallimg);
	maze4.addImage(wallimg);
	maze5.addImage(wallimg);
	maze6.addImage(wallimg);
	maze7.addImage(wallimg);
	maze8.addImage(wallimg);
	maze9.addImage(wallimg);
	maze10.addImage(wallimg);
	maze11.addImage(wallimg);
*/
	finish = createSprite(700,38,50,100);
	finishlvl2 = createSprite(700,38,50,100);
	Popup1 = createSprite(459,647,50,50);
	Popup1.shapeColor="red";
	trigger1 = createSprite(459,550,50,50);
	Popup2 = createSprite(743,259,50,50);
	Popup2.shapeColor="red";
	trigger2 = createSprite(743,350,50,50)
	Popup3 = createSprite(400,46,50,50);
	Popup3.shapeColor="red";
	trigger3 = createSprite(300,46,50,50)
	Popup4 = createSprite(29,150,50,50);
	Popup4.shapeColor="red";
	trigger4 = createSprite(29,250,50,50)
	
	Popup1.visible=false;
	Popup2.visible=false;
	Popup3.visible=false;
	Popup4.visible=false;

	trigger1.visible=false;
	trigger2.visible=false;
	trigger3.visible=false;
	trigger4.visible=false;
	
	finishlvl2.shapeColor="green";
	finish.shapeColor="green";
	finish.addImage(finishline);
	finishlvl2.addImage(finishline);
	finish.scale = 0.4;
	finishlvl2.scale=0.4;
	player.setCollider("rectangle",0,0,player.width,player.height)

	

}

function draw() {
	background(backgroundimg);
	fill("white")
	text("DO NOT TRY TO LEAVE THE SCREEN",100,632)
	if(player.x >800||player.y>700||player.x<0||player.y<0) {
		player.x =36
		player.y=655
	}
	text("score:"+score,237,553);
	
	if(flag) {
		timer =Math.round(frameCount/30);
	text("timer: "+timer,225,610)
	}
	if (gameState==="lvl:1") {
	if(keyDown("w")) {
		player.y=player.y-5;
		flag=1;
	}

	if(keyDown("s")) {
		player.y=player.y+5;
	}
	
	if(keyDown("d")) {
		player.x=player.x+5;
	}
	
	if(keyDown("a")) {
		player.x=player.x-5;
	}
}
	if(player.isTouching(maze1) ||player.isTouching(maze2)||player.isTouching(maze3)||player.isTouching(maze4)||player.isTouching(maze5)||player.isTouching(maze6)||player.isTouching(maze7)||player.isTouching(maze8)||player.isTouching(maze9)||player.isTouching(maze10)||player.isTouching(maze11)) {
		player.x = 36;
		player.y=644;
		
	}
	
	console.log(gameState)
	if(player.isTouching(finish)&&gameState==="lvl:1"){
		gameState = "lvl:2";
		finish.visible=false;
		score=0;
	}

	if (gameState === "lvl:2") {
		player.x = 36;
		player.y=644;
		textSize(50);
		fill("red");
		text("Level 2",400,370);
		textSize(20);
		text("You competed Level 1 in: "+timer+"seconds",50,350)
	}
	if(gameState==="lvl:1") {
		finishlvl2.visible=false;
	}
	if(gameState==="lvl:2") {
		finishlvl2.visible=true;
	}
	if(player.isTouching(finishlvl2)&&gameState === "lvl:2play") {
		gameState = "lvl:3"
		score=0;
	}
	if(gameState==="lvl:3") {
		player.x = 36;
		player.y=644;
		textSize(50);
		fill("red");
		text("Level 3",400,370);
		}
	if(keyWentDown("space")&&gameState==="lvl:2") {
		gameState = "lvl:2play"
	}
	if(gameState === "lvl:2play"){
		if(keyDown(UP_ARROW)) {
			player.y=player.y-12;
		}
	
		if(keyDown(DOWN_ARROW)) {
			player.y=player.y+12;
		}
		
		if(keyDown(RIGHT_ARROW)) {
			player.x=player.x+12;
		}
		
		if(keyDown(LEFT_ARROW)) {
			player.x=player.x-12;
		}
	}
		//lvl 3
		 
		
		if(keyWentDown("m")&& gameState==="lvl:3") {
			gameState = "lvl:3play"
		}
		if(gameState === "lvl:3play"){
			if(keyDown("i")) {
				player.y=player.y-24;
			}
		}
	
		    
		
	
		if(gameState === "lvl:3play"&& player.isTouching(finishlvl2)){
			youwon.visible=true;
			
		}
		
			if(keyDown("k")) {
				player.y=player.y+40;
			}
			
			if(keyDown("l")) {
				player.x=player.x+40;
			}
			
			if(keyDown("j")) {
				player.x=player.x-40;
			}

// triggers
if(gameState==="lvl:3play"&& player.isTouching(trigger1)) {
	Popup1.visible=true;
	
	Popup1.lifetime=25;

}else {
	if(player.isTouching(Popup1)&&gameState==="lvl:3play"){
	player.x = 36;
		player.y=644;
	}
}
	if(gameState==="lvl:3play"&& player.isTouching(trigger2)) {
		Popup2.visible=true;
		
		Popup2.lifetime=25;
	
	}else {
		if(player.isTouching(Popup2)&&gameState==="lvl:3play"){
		player.x = 36;
			player.y=644;
		}

}

if(gameState==="lvl:3play"&& player.isTouching(trigger3)) {
	Popup3.visible=true;
	
	Popup3.lifetime=25;

}else {
	if(player.isTouching(Popup3)&&gameState==="lvl:3play"){
	player.x = 36;
		player.y=644;
	}

}

if(gameState==="lvl:3play"&& player.isTouching(trigger4)) {
	Popup4.visible=true;
	
	Popup4.lifetime=25;

}else {
	if(player.isTouching(Popup4)&&gameState==="lvl:3play"){
	player.x = 36;
		player.y=644;
	}

}
//scoring
if( player.isTouching(trigger1)) {

	score=25;
}
if( player.isTouching(trigger2)) {

	score=50;
}
if( player.isTouching(trigger3)) {

	score=100;
}
if( player.isTouching(trigger4)) {

	score=75;
}


	drawSprites();
}

