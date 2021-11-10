x=0;
y=0;
draw_rectangle = "";
draw_circle = "";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="Sysem is listening please speak:";
recognition.start();
}
recognition.onresult= function (event){
    console.log(event);
var Content=event.results[0][0].transcript;
console.log(content);
document.getElementById("status").innerHTML="The speech has been recognised as:"+content;
if(content="circle")
{
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="start drawing circle";
draw_circle = "set";
}
if(content="rectangle")
{
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="start drawing rectangle";
draw_rectangle = "set";
}
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set")
    {
radius=Math.floor(Mathh.random()*100);
circle(x,y,radius);
document.getElementById("status").innerHTML="Circle is drawn";
draw_circle="";
    }
    if(draw_rect=="set")
    {
rect(x,y,70,50);
document.getElementById("status").innerHTML="Rectangle is drawn";
draw_circle="";
    }
}