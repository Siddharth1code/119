function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
}
function clearcanvas()
{
     background("white");

}
function preload()
{
    classifier=ml5.imageClassifier('DootleNet');
}
function draw()
{
    strokeWeight(13);
    stroke(0);

    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas()
{
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results)
{
if(error)
{
    console.log(error);
}
console.log(results);
document.getElementById('label1').innerHTML='lable:'+results[0].label;
document.getElementById('confidence').innerHTML='confidence' + Math.round(results[0].confidence * 100)+'%';
UtterThis= new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
