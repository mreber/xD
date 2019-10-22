let container = document.getElementById('container');

// container.addEventListener('click', function() {


// console.log("clicked");

// let popout = document.getElementById("popout");

// if(popout.style.display === 'none');
// {
//     popout.style.display = 'block';
// }
// });

let items = container.getElementsByClassName("galleryitem");
let popout = document.getElementById("popout");
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(){
console.log("item clicked!");
if(popout.style.display === 'block')
{
    popout.style.display = 'none';
} else {
    popout.style.display = 'block';
}


    })
}