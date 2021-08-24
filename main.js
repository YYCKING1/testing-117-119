function preload()//not adding anything in this function cuz i got no assets
{

}


function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);//creat capture is a pre defind function of the p5 library that accessess the web cam and creats a video
    video.hide();// hiding the extra componenet 
    classifier =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EUrmd3nF7/model.json", modelLoaded);
                 //image classifier is used to load the model in the code
}

function draw()
{
   image(video, 0, 0, 300, 300);// this is for the video to fit in the canvas
   classifier.classify(video,gotResult);// classify is a pre defind frunction that compares the trainded model with the video
// this chas been put in this draw function for the comparason to happen automatically
}

function modelLoaded()
{
    console.log("model has loaded on to the screen as you sew")
}
function gotResult(error, result){


if(error)
{
console.error(error);
}
else
{
console.log(result);
document.getElementById("result_object_name").innerHTML =  result[0].label;
document.getElementById("result_object_accuracy").innerHTML =  result[0].confidence.toFixed(3);
}


}
