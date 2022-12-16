var getNoseX
var getNoseY
var getHat

function preload(){
    getHat = loadImage("https://i.postimg.cc/76QY89g1/hat.png")
}

function setup(){
    canvas = createCanvas(550,450)
    canvas.position(712,150)
    video = createCapture(VIDEO)
    video.hide()
    myTextArea = createElement('textarea');  
    myTextArea.attribute("rows","14");
    myTextArea.attribute("cols","44");
    myTextArea.position(57);
    myTextArea.style('background','red')
    myTextArea.style('fontSize',23)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        //console.log(results)
        getNoseX=results[0].pose.nose.x-125
        getNoseY=results[0].pose.nose.y-250
    }
}

function modelLoaded(){
    console.log("modelo carregado")
}

function draw(){
    image(video,0,0,550,450)
    image(getHat,getNoseX,getNoseY,200,200)
}