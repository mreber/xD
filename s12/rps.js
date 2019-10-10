function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if( num === 0){
    return 'rock';
    } 
   
    else if( num === 1 ) {
    return 'paper';

    } 
    
    else if( num === 2 ) {
    return 'scissors';

    }
}

/////
//getting human choice
let userInputField = document.querySelector('#input')
let userChoice = userInputField;



/////
//getting ai choice
let computerChoice = getComputerChoice();
console.log(computerChoice);

function determineWinner(userChoice, computerChoice){
if(userChoice == 'bomb'){
    return ' you won.. but at what cost?'
}
if(userChoice == computerChoice){
       return 'a TIE?!';
}

if(userChoice == 'rock'){
    if(computerChoice == 'paper')
    return 'You LOSE :-(';
} else {
    return 'You WIN! XD';
}

if(userChoice == 'paper'){
    if(computerChoice == 'rock')
    return 'You WIN! XD';
} else {
    return 'You LOSE :-('; 
}

if(userChoice == 'scissors'){
    if(computerChoice == 'rock')
    return 'You LOSE :-(';
} else {
    return 'You WIN! XD';
}
}

let enterButton = document.querySelector('.enter')
enterButton.addEventListener('click',playGame);

function playGame(){

let userInputField = document.querySelector('#input')
let userChoice = userInputField.value;
let computerChoice = getComputerChoice()
console.log('human threw' + userChoice);
console.log('computer threw' + computerChoice);
console.log(determineWinner(userChoice, computerChoice))

let output=document.querySelector('#output')
output.innerHTML=''
output.innerHTML+='<p> human threw' + userChoice +'</p>'
output.innerHTML+='<p> computer threw' + computerChoice +'</p>'
output.innerHTML+='<p id="winner">' + determineWinner(userChoice,computerChoice) + '</p>'

}
