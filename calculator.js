function add(a,b) {
    let added = a + b;
    return added;
}

function subtract(a,b) {

    let subtracted = a - b ;
    return subtracted; 
}


function multiply(a,b) {

    let multiplied= a * b ;
    return multiplied;
}



function divide(a,b) {
    let divided= a/b; 
    if(b==0) {
        alert("Back to start! Can't divide by zero");
        display.textContent="";
        return
         
    }
    return Math.round(divided*1000)/1000; 
   
}

display=document.querySelector(".display");
digits=document.querySelectorAll(".digit");

operators=document.querySelectorAll(".operator");

equal=document.querySelector(".equal");




let value=null; 

for(i=0; i<digits.length ; i++){   
digits[i].addEventListener("click", function() {
    display.textContent += (event.target.value);
    value = Number(display.textContent);

     })
 
}



let operator=0; 
let value1=0;   
for(i=0; i<operators.length ; i++){   
operators[i].addEventListener("click", event => {
   operator=event.target.value;  
   if(value || value===0){ 
       value1=value;
       value=null;
       display.textContent=""; }
     })
 
}





function operate(operator, a, b) {
 


    switch(operator){
        case '+':

          result = add(a, b);
          return result; 
          break;
        
        case "-":
        result=subtract(a, b);
        return result; 
          break;

        case "*":
        result= multiply(a , b);
        return result; 
        break;

        case "/":
        result= divide(a,b);
        return result; 
          break;
    }


    
}

equal.addEventListener("click" , calculate ); 

function calculate() {
    if(value1===null) {return}
value= operate(operator, value1, value);
display.textContent=value; 
value1=null; 

} 

function clear() {

    value=null;
    value1=null; 
    display.textContent=""; 
    
    }

clearbutton=document.querySelector(".clear")
clearbutton.addEventListener("click", clear)



