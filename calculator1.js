

display=document.querySelector(".display");




equal=document.querySelector(".equal");

buttons=document.querySelectorAll(".button");

for(i=0 ; i < buttons.length ; i++) {
 
    buttons[i].addEventListener('click', event => {
    display.textContent += event.target.value  
}); 

}


equal.addEventListener('click', evaluate )

function evaluate() {

    display.textContent= eval(display.textContent) ; 
}



clearbutton = document.querySelector(".clear");
clearbutton.addEventListener('click', clear);

function clear() {

    display.textContent=""; 

}




