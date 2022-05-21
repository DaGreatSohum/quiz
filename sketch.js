var canvas, backgroundImage;

var questions,bgimg;

var question, contestant, quiz;

function preload(){
  bgimg=loadImage("quiz.webp")
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(bgimg);

}
