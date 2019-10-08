console.log("hey!");

//switch statements
//functions
//classes
//scope
//array
//manipulating the DOM : Document Object Model

//algorithm a series of steps, doing something a certain way
//functions are algorithms

// let num = 4;

// num += 6;

// console.log(num);

//this function adds two numbers together
//addNums accepts two arguments!
// function addNums(num1, num2) {
//     return num1 + num2;

// }

// let myAddedNumber = addNums(1, 2);

// console.log(myAddedNumber); 

// function addStringsToNumber(num)
// {
//     return "this is my gay number: " + num;
// }

// let gayNum = 10;
// console.log(gayNum);
// gayNum = addStringsToNumber(gayNum);
// console.log(gayNum);



//////////////// SCOPE mmmmmmmmmmm

//scope is the idea of where u define variables, u can only use them in a certain place

//ARRAYS

// let nom = 2;
// let noms = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(noms.length);
// console.log(noms);

// let cocks = [ 'thick', 'thin', 'short', 'tall', 'veiny', 'soft', 'smooth', 'hairy'];

// console.log(cocks);

//first index of an array is always going to be 0

// for( let i = 0; i < cocks.length; i++)
// {
//     console.log(cocks[i]);
// }

//manipulating dom

let container = document.querySelector('.container')

for(let i = 0; i < 15; i++)
{
    let div = document.createElement('div');
    container.appendChild(div);
}

console.log(container);

let myDivs = container.querySelectorAll('div');

console.log(myDivs.length);

setInterval(function(){
    for(let i = 0; i < myDivs.length; i++)
{
    myDivs[i].classList.add('box');
    myDivs[i].style.backgroundColor= `rgb(${Math.random()*255}, 255, 255)`;
    myDivs[i].style.width = `${Math.random()*200}px`;
    // myDivs[i].style.height = `${Math.random()*1000}px`;
}
}, 1);



// let div = document.createElement('div');

// container.appendChild(div);

// console.log(container);

// container.

