var song = "";
var leftX = 0;
var leftY = 0;
var rightX = 0;
var rightY = 0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600, 800);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 150, 0, 600, 600);
}
function modelLoaded(){
    console.log('Posenet model loaded');
}
