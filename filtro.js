function preload() {}
function setup() {
canvas=createCanvas(499,399);
canvas.position(109,249);
video=createCapture(VIDEO);
video.hide();
 colors="";
}
function draw() {
image (video,0,0,499,399);
tint (colors);

}
function gr() {
 colors=document.getElementById("texto").value;  
  
}

function hj() {
save("img.png") ;
}