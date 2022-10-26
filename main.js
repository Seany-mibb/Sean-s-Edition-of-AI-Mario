function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose', gotPoses)
}

function draw() {
	game();
}

function instructions()
{
	document.getElementById("instructions").play();
}

function close_instructions()
{
	document.getElementById("close_instructions").play();
}

function modelLoaded()
{
	console.log('model is loaded!')
}

function gotPoses(results, error)
{
	if(error)
	{
		console.log(error)
	}
	else if(results.length >= 0)
	{
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}