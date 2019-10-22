function getComputerChoice(){
    num = Math.floor(Math.random() * 3);
      if ( num === 0){
      return 'rock';
    }else if (num === 1){
      return 'paper'
    }else if (num === 2){
      return 'scissors';
    }
  }
  function determineWinner(userChoice,computerChoice){
    if (userChoice=='bomb'){
      return 'the human won...but at what cost?';
    }
    if (userChoice==computerChoice){
       return "the game was a tie";
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'the computer won';
      } else {
        return 'the human won';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'the computer won';
      } else {
        return 'the human won';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'the computer won';
      } else {
        return 'the human won';
      }
    } else {return 'not an option.. cheater!!'}
  }
  
  
  let enter = document.querySelector(".enter");
  enter.addEventListener('click',playGame);
  
  function playGame(){
    let userInputField = document.querySelector("#input").value;
    let userChoice = userInputField.toLowerCase();
    let computerChoice=getComputerChoice();
    console.log('human threw ' + userChoice);
    console.log('computer threw ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
    let output= document.querySelector("#output")
    output.innerHTML=''
    output.innerHTML+='<p>human threw ' + userChoice + '</p>'
    output.innerHTML+='<p>computer threw ' + computerChoice + '</p>'
    output.innerHTML+='<p id="winner">'+determineWinner(userChoice,computerChoice)+'</p>'
  }