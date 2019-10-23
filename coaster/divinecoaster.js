var globalNames = [];
function myCoolFunction(num,attr){
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

var SecondaryTraitArray = ["Sword of", "Spear of","Gun of"];

var Descriptor = ["Badass","Legendary", "Unstopable"];
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
  var attrArray = ["Wisdom", "strength", "luck"];
  for(l=0;l<num;l++){
    text+=Math.floor((Math.random()*100)+1) + "% " + attrArray[Math.floor((Math.random()*attrArray.length))];
    if((l+1)!=num){
      text+=", ";
    }
  }
  text+=" ]";
  return text;
}