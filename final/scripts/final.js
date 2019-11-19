const lowerBound = 800;
const higherBound = 0;

var p0;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;

const s = 80;

function setup() {
  let canvas = createCanvas(200, 200);
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
  background(0);
  
  noFill();
  

// noFill();


  push();
  translate(width/2, height/2);  

    stroke(0, 255, 0);
    strokeWeight(1.5);
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
  
  
  stroke(255, 0, 255);
    strokeWeight(8);
  
    
  //   point(p0.x, p0.y);
  //   point(s, -s);
  //   point(s, s);
  //   point(-s, s);
  
  // stroke(255, 0, 0);
  //   point(p4.x, p4.y);
  //   point(p5.x, p5.y);
  //   point(p6.x, p6.y);
  //   point(p7.x, p7.y);
  pop();
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
var BaseTraitArray = ["Love （´・｀ ）♡", "Love (✿ ♥‿♥)", "Love (♥ω♥*)", "Love (๑°꒵°๑)･*♡", "Love ♡´･ᴗ･`♡", "Love (´•ω•｀♥)", "Love (●⌒ｖ⌒●)", "Love (つω`●）", "Love (˶′◡‵˶)爻(♥ O ♥) ", "Love (つˆ⌣ˆ)つ⊂(・﹏・⊂)", "Love (✿˶◕‿◕˶人◕ᴗ◕✿)", "Love （＾▽＾（＾▽＾＊）", "Love (つ・▽・)つ⊂(・▽・⊂)",   "Cuteness (◕ᴗ◕✿)", "Cuteness (◕ܫ◕✿)", "Cuteness  (◕▿◕✿)", "Cuteness  (◕ ワ ◕✿)", "Cuteness  (◠‿◠✿)", "Cuteness  (◔◡◔✿)", "Cuteness ( ᵒ̴̶̷̥́ _ᵒ̴̶̷̣̥̀ )♡♡♡", "Cuteness  ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾", "Cuteness (ღˇᴗˇ)｡o", "Cuteness  ( ˘͈ ᵕ ˘͈♡)", "Cuteness  (﹡֦ơ ﻌ ơ֦﹡)", "Cuteness (ᅌᴗᅌ* )", "Cuteness ( ´◕㉨◕）", "Cuteness  ≧◠◡◠≦", "Cuteness  (✿◕㉨◕)", "Cuteness  (◔ᴥ◔)", "Cuteness  ✿*,(*´◕ω◕`*)+✿.*", "Cuteness  (✿◠‿◠)", "Cuteness  (ㆁᴗㆁ✿)", "Cuteness (✿´ ꒳ ` )", "Cuteness かわいいっ♪((●>ω<)っ)))´、ゝ`)ぃゃん", "Cuteness ﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟ:✲:おはよぉ～♬♫♬", "Sadness ಥ‿ಥ", "Sadness (இдஇ; ) ", "Sadness ˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚ ", "Sadness (ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)", "Sadness (╯︵╰,)", "Sadness o(╥﹏╥)", "Sadness (´；д；)", "Sadness ゜:(つд⊂):゜", "Sadness (ᗒᗩᗕ)", "Sadness ( ´･ω･)", "Sadness (◞ ‸ ◟ㆀ)", "Sadness (´。＿。｀) ", "Sadness ﾊｧ━(-д-；)━ｧ…", "Wrath p(●｀□´●)q", "Wrath p(╬ Ò ‸ Ó)q ", "Wrath p(′Д`ﾟq)))", "Wrath ┗(｀Дﾟ┗(｀ﾟДﾟ´)┛ﾟД´)┛", "Wrath (ｙﾟ 益ﾟ;)ｙ", "Wrath (@>皿<)", "Wrath （￣^￣）凸", "Magic (∩｀-´)⊃━✿✿✿✿✿✿", "Magic ༼つಠ益ಠ༽つ ─=≡ΣO))", "Magic (つ◕౪◕)つ━☆ﾟ.*･｡ﾟ", "Magic (☆_・)・‥…━━━★", "Magic (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "彡ﾟ◉ω◉ )つー☆*", "Magic ( °-°)シ ミ★ ミ☆", "Magic (∩^o^)⊃━☆ﾟ.*･｡ﾟ", ""];

var SecondaryTraitArray = ["Coaster of"];

var Descriptor = ["Cute", "Ugly", "Smelly", "Stinky", "Hard", "Brave", "Charitable", "Honest", "Curious", "Funny", "Courageous", "Luxurious", "Beautiful", "Elegant", "Psychic", "Cursed", "Fantastic", "Otherworldly", "Rusty", "Loyal", "Opulant", "Charismatic", "Hastey", "Smooth", "Rugged", "Speedy", "Cunning", "Aerodynamic", "Sharp", "Scabby", "Scratchy", "Warm", "Cold", "Exalted", "Noble", "Chaotic", "Damned", "Divine"];
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
  var attrArray = ["Wisdom", "strength", "Horsepower", "Luck", "Agility", "Stamina", "Haste", "Compassion", "Empathy", "Intellect", "Health", "Defense", "Beauty", "Sex Appeal", "Charisma", "Prowess", "Freeze", "Radiation", "Nuclear Power", "Ice Power", "Fire Power", "Potency", "Sharpness", "Intuition", "Instinct", "Math Skills", "Memory", "Alchemy", "Sight", "Test Taking Skills", "Squishy", "Cursed", "Haunted", "Smelly", "Flexibility", "Nobility", "Chaos", "Unpredictability", "Hung", "Musc"];
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






