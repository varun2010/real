function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(600,380);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tKP4NMhCk/model.json',modelLoaded);
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    image(video,0,0,640,480);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_ans").innerHTML=results[0].label;
        document.getElementById("accu_ans").innerHTML=results[0].confidence.toFixed(2)*100+"%";
    }
}