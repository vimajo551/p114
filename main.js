function preload(){

}

function setup(){
    canvas = createCanvas(550,450)
    canvas.position(712,150)
    video = createCapture(VIDEO)
    video.hide()
    var myTextArea = createElement('textarea');  
    myTextArea.attribute("rows","10");
    myTextArea.attribute("cols","75");
    myTextArea.position(57)
}

function draw(){
    image(video,0,0,550,450)
}