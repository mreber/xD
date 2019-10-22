let navLinks = document.getElementsByClassName('nav-a')

let pages = document.getElementsByClassName('page')

for(let i = 0; i < navLinks.length; i++ ) {
    navLinks[i].addEventListener("click", function(){
    
    
    
        for(let i = 0; i < pages.length; i++ ) {
        pages[i].style.display="none"
    }
pages[i].style.display="block";
console.log("clicked!")
console.log(i)
    });
}

