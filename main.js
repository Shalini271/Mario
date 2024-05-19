function preload() {
	world_start = loadSound("world_start.wav");
	marioDie = loadSound("mariodie.wav");
	marioJump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioGameover = loadSound("gameover.wav");
	marioKill = loadSound("kick.wav")

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	camera=createCapture(VIDEO);
	camera.size(600,400)
	camera.parent("gameConsole")
	poses=ml5.poseNet(camera,modelLoaded);
	poses.on("pose",gotResults);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Loaded successfully.")
  }
  
  function gotResults(results){
	console.log(results)
	noseX=results[0].pose.nose.x
	noseY=results[0].pose.nose.y
  }






