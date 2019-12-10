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

const s = 100;

function setup() {
  let canvas = createCanvas(300, 300);
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
var BaseTraitArray = ["Love （´・｀ ）♡", "Love (✿ ♥‿♥)", "Love (♥ω♥*)", "Love (๑°꒵°๑)･*♡", "Love ♡´･ᴗ･`♡", "Love (´•ω•｀♥)", "Love (●⌒ｖ⌒●)", "Love (つω`●）", "Love (˶′◡‵˶)爻(♥ O ♥) ", "Love (つˆ⌣ˆ)つ⊂(・﹏・⊂)", "Love (✿˶◕‿◕˶人◕ᴗ◕✿)", "Love （＾▽＾（＾▽＾＊）", "Love (つ・▽・)つ⊂(・▽・⊂)",   "Cuteness (◕ᴗ◕✿)", "Cuteness (◕ܫ◕✿)", "Cuteness  (◕▿◕✿)", "Cuteness  (◕ ワ ◕✿)", "Cuteness  (◠‿◠✿)", "Cuteness  (◔◡◔✿)", "Cuteness ( ᵒ̴̶̷̥́ _ᵒ̴̶̷̣̥̀ )♡♡♡", "Cuteness  ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾", "Cuteness (ღˇᴗˇ)｡o", "Cuteness  ( ˘͈ ᵕ ˘͈♡)", "Cuteness  (﹡֦ơ ﻌ ơ֦﹡)", "Cuteness (ᅌᴗᅌ* )", "Cuteness ( ´◕㉨◕）", "Cuteness  ≧◠◡◠≦", "Cuteness  (✿◕㉨◕)", "Cuteness  (◔ᴥ◔)", "Cuteness  ✿*,(*´◕ω◕`*)+✿.*", "Cuteness  (✿◠‿◠)", "Cuteness  (ㆁᴗㆁ✿)", "Cuteness (✿´ ꒳ ` )", "Cuteness かわいいっ♪((●>ω<)っ)))´、ゝ`)ぃゃん", "Cuteness ﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟ:✲:おはよぉ～♬♫♬", "Sadness ಥ‿ಥ", "Sadness (இдஇ; ) ", "Sadness ˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚ ", "Sadness (ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)", "Sadness (╯︵╰,)", "Sadness o(╥﹏╥)", "Sadness (´；д；)", "Sadness ゜:(つд⊂):゜", "Sadness (ᗒᗩᗕ)", "Sadness ( ´･ω･)", "Sadness (◞ ‸ ◟ㆀ)", "Sadness (´。＿。｀) ", "Sadness ﾊｧ━(-д-；)━ｧ…", "Wrath p(●｀□´●)q", "Wrath p(╬ Ò ‸ Ó)q ", "Wrath p(′Д`ﾟq)))", "Wrath ┗(｀Дﾟ┗(｀ﾟДﾟ´)┛ﾟД´)┛", "Wrath (ｙﾟ 益ﾟ;)ｙ", "Wrath (@>皿<)", "Wrath （￣^￣）凸", "Magic (∩｀-´)⊃━✿✿✿✿✿✿", "Magic ༼つಠ益ಠ༽つ ─=≡ΣO))", "Magic (つ◕౪◕)つ━☆ﾟ.*･｡ﾟ", "Magic (☆_・)・‥…━━━★", "Magic (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "彡ﾟ◉ω◉ )つー☆*", "Magic ( °-°)シ ミ★ ミ☆", "Magic (∩^o^)⊃━☆ﾟ.*･｡ﾟ", "Chaos (｀∀´)Ψ", "Chaos Ψ(☆ｗ☆)Ψ", "Chaos ƪ(`▿▿▿▿´ƪ)", "Chaos Ψ(`_´ #  )↝", "Chaos ↜(╰ •ω•)╯ψ", "Chaos (◞≼◉ื≽◟ ;益;◞≼◉ื≽◟)Ψ", "Wisdom ༼⌐■ل͟■༽", "Wisdom （■Д■*）", "Wisdom (⌐▨_▨)", "Wisdom (╭ರ_⊙)", "Wisdom (ﾒ▼_▼)", "Fear (O∆O)", "Fear (⊃д⊂)", "Fear (／。＼)", "Fear (　〇□〇）", "Fear ヽ(ﾟДﾟ)ﾉ", "Fear (ﾟДﾟ;)", "Peace ｖ(⌒ｏ⌒)ｖ", "Peace v(｡･ω･｡)", "Peace v(￣ｰ￣)v", "Peace (-_☆)V", "Peace y(￣ー￣)y", "Peace (○ﾟε＾○)v", "Peace v(｡･･｡)", "Desire ｛・ω-*}", "Desire (^_−)☆", "Desire (・ωｰ)～☆", "Desire (๑◕ㅂ▰)", "Desire (๑ゝڡ◕๑)", "Desire (○ﾟε^○)", "Desire (*・∀-)☆", "Desire (ﾉ･_-)☆", "Confusion ◔_◔", "Confusion ●.◉", "Confusion (´エ｀；)", "Confusion (◑○◑)", "Confusion (⊙_◎)", "Confusion ⁀⊙﹏☉⁀", "Confusion (◎_◎;)", "Confusion (・・；)", "Funk └|ﾟεﾟ|┐", "Funk （〜^∇^)〜", "Funk ＼(^ω^＼)", "Funk (ﾉ≧∀≦)ﾉ", "Funk ┌(☆o★)┘", "Funk ┌(メ▼▼)┘", "Funk ヾ(^ ^ゞ", "Funk 〜(꒪꒳꒪)〜", "Glamour (✿☯‿☯✿)", "Glamour (◕◞౪◟◕✿)", "Glamour 乁༼☯‿☯✿༽ㄏ", "Anger （＞μ＜＃）", "Anger ⋋_⋌", "Anger (ʘдʘ╬)", "Anger （♯▼皿▼）", "Anger 눈_눈", "Anger ლಠ益ಠ)ლ", "Anger -`д´-", "Anger (｀Д´)", "Anger （▽д▽）", "Beauty  ✿*,(*´◕ω◕`*)+✿.*", "Beauty お(◕ω◕❀)や", "Beauty  (ㆁᴗㆁ✿)", "Beauty {•••♥˚₊*(ˊo̶̶̷̤ .̫ o̴̶̷̤ˋ)*₊˚", "Beauty✲ﾟ｡.(✿╹◡╹)ﾉ☆.｡₀:*ﾟ", "Beauty ٩(*´︶`*)۶҉", "Beauty  (﹡֦ơ ﻌ ơ֦﹡)", "Beauty ( ˘͈ ᵕ ˘͈♡)", "Opulence 米＾－＾米", "Opulence 乁༼☯‿☯✿༽ㄏ",
"Opulence (≖︿≖✿)", "Opulence ≧❀‿❀≦", "Opulence (✿◠‿◠)", "Opulence ꒰✩’ω`ૢ✩꒱", "Opulence (ꀄꀾꀄ)", "Honesty （´υ｀）", "Honesty (　´_ゝ`)", "Power (ʘᗩʘ’)", "Power ＼(★^∀^★)／", "Power (*○’3`)★+ﾟ", "(*○゜∀。)/☆*。*.・+★", "Power (★≧▽^))★☆", "Power （☆ω☆*）", "Power ☆=(ゝω･)/", "Humour ◮_◮", "Humour ಠ▃ಠ", "Humour ಠ◡ಠ", "Humour ಠ益ಠ", "Humour ಠoಠ", "Humour ತಎತ"];

var SecondaryTraitArray = ["Coaster of"];

var Descriptor = ["Cute", "Ugly", "Smelly", "Stinky", "Hard", "Brave", "Honest", "Curious", "Funny", "Courageous", "Luxurious", "Beautiful", "Elegant", "Psychic", "Cursed", "Fantastic", "Otherworldly", "Rusty", "Loyal", "Opulant", "Charismatic", "Cunning", "Sharp", "Exalted", "Noble", "Chaotic", "Damned", "Divine", "Dark", "Reliable", "Inventive", "Resilient", "Strong", "Weak","Elite", "Spiritual", "Opulent", "Unique", ];
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
  var attrArray = ["Wisdom", "strength", "Horsepower", "Luck", "Agility", "Stamina", "Haste", "Compassion", "Empathy", "Intellect", "Health", "Defense", "Beauty", "Sex Appeal", "Charisma", "Prowess", "Freeze", "Radiation", "Nuclear Power", "Ice Power", "Fire Power", "Potency", "Sharpness", "Intuition", "Instinct", "Math Skills", "Memory", "Alchemy", "Sight", "Test Taking Skills", "Squishy", "Cursed", "Haunted", "Smelly", "Flexibility", "Nobility", "Chaos", "Unpredictability", "Hung", "Musc", "Smell Radius", "Hearing Radius", "Increased Peripheral Radius", "Healing Speed", "Increased Sexual Duration", "Decreased Aging Speed", "Increased Aging Speed", "Increased Thigh Strength", "Increased Tongue Size", "Increased Existential Dread", "Increased Wit", "Sneak", "Increased Vibes", "Increased Body Heat", "Decreased Body Heat"];
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






