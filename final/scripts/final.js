const lowerBound = 100;
const higherBound = 0;

var p0;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;

const s = 40;

function setup() {
  let canvas = createCanvas(80, 80);
  canvas.parent("#sketch");
  // square corner points
  p0 = createVector(-s, -s);
  p1 = createVector(s, -s);
  p2 = createVector(s, s);
  p3 = createVector(-s, s);
  
  // middle points to randomly manipulate
  p4 = createVector(0, -s);
  p5 = createVector(s, 0);
  p6 = createVector(0, s);
  p7 = createVector(-s, 0);
  
  //middle middle points
  
  p8 = createVector(-s/2, -s);
  
}

function draw() {
  background(255);
  
  noFill();
  

// noFill();


  push();
  translate(width/2, height/2);  

    stroke(0);
    strokeWeight(.3);
    beginShape();
  
  
    // p0 = top left
    vertex(p0.x, p0.y);
  
    // // p8 = top middle middle left
    // quadraticVertex(0, 0, p8.x, p8.y);
  
    // p4 = top middle
    quadraticVertex(0, 0, p4.x, p4.y);
  
    // p1 = top right
    quadraticVertex(0, 0, p1.x, p1.y);
  
    // p5 = right middle
    quadraticVertex(0, 0, p5.x, p5.y);  
  
    // p2 = bottom right
    quadraticVertex(0, 0, p2.x, p2.y);
  
    // p6 = bottom middle
    quadraticVertex(0, 0, p6.x, p6.y);
  
    // p3 = bottom left
    quadraticVertex(0, 0, p3.x, p3.y);
  
    // p7 = left middle
    quadraticVertex(0, 0, p7.x, p7.y);
  
    // p0 = top left
    quadraticVertex(0, 0, p0.x, p0.y);
  
    endShape();
  
  
//   stroke(255, 0, 255);
//     strokeWeight(8);
  
    
//     point(p0.x, p0.y);
//     point(s, -s);
//     point(s, s);
//     point(-s, s);
  
//   stroke(255, 0, 0);
//     point(p4.x, p4.y);
//     point(p5.x, p5.y);
//     point(p6.x, p6.y);
//     point(p7.x, p7.y);
//   pop();
}


// function keyPressed() {
//   if (key == 'n') {
//   drawVector();

//   }
// }

var globalNames = [];
function myCoolFunction(num,attr){
  drawVector();
    nameChosen = document.getElementById("names");
  if(globalNames.includes(nameChosen.value)){
    console.log(globalNames);
    alert("The name "+nameChosen.value+" has already been rolled. Please try another name.");
    return;
  }else{
    globalNames.push(nameChosen.value);
  }
  num = Math.floor((Math.random() * num) + 1);
var BaseTraitArray = ["Acid","Lighting","Fire"];

var SecondaryTraitArray = ["Coaster of"];

var Descriptor = ["Cute", "Ugly", "Smelly", "Stinky", "Hard", "Brave", "Charitable", "Honest", "Curious", "Funny", "Courageous", "Luxurious", "Beautiful", "Elegant", "Psychic", "Cursed", "Fantastic", "Otherworldly", "Rusty", "Loyal", "Opulant"];
var FinalTraitArray = [];
for(i=0;i<num;i++){
  
FinalTraitArray.push(Descriptor[Math.floor(Math.random()*Descriptor.length)] + " " + SecondaryTraitArray[Math.floor(Math.random()*SecondaryTraitArray.length)] + " " + BaseTraitArray[Math.floor(Math.random()*BaseTraitArray.length)] + attributeArray(attr));

}
 var x = document.getElementById("results");
  text= "";
  var vals = nameChosen.value;
  FinalTraitArray.forEach(function(value){
    text += "<p>" +vals + " : "+ value + "</p>";
  });
  x.innerHTML+=text;
return FinalTraitArray
}

function iteration(value){
text += "<p>" +vals + " : "+ value + "</p>";
}

function attributeArray(num){
  num = Math.floor((Math.random() * num) + 1);
  text = " [ ";
  var attrArray = ["Wisdom", "strength", "deepthroat", "luck"];
  for(l=0;l<num;l++){
    text+=Math.floor((Math.random()*100)+1) + "% " + attrArray[Math.floor((Math.random()*attrArray.length))];
    if((l+1)!=num){
      text+=", ";
    }
  }
  text+=" ]";
  return text;
}

function drawVector() {

    p4 = createVector(random(-s, s), random(-s, s));
    p5 = createVector(random(-s, s), random(-s, s));
    p6 = createVector(random(-s, s), random(-s, s));
    p7 = createVector(random(-s, s), random(-s, s));
  }






