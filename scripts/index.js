

function add(a, b){
    let num = (a + b);
    return +num.toFixed(13);
}

function subtract(a, b){
    let num = (a - b);
    return +num.toFixed(13);
}

function multiply(a, b){
    let num = (a * b);
    return +num.toFixed(13);
}


function divide(a, b){
    let num = (a / b);
    return +num.toFixed(13);
}

function percent(a){
    let num = (a / 100);
    return +num.toFixed(13);
}


let firstNum = 0;

let operation = "";

let secondNum = 0;



function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            return "Math Error";
    };
}


let resultValue = "0";

let activeOperation = "none";

let resultElement = document.querySelector("#result p");

resultElement.innerText = resultValue;



function addDisplay(text){

    resultElement.innerText = text;
    resultValue = text;

}


const numbers = document.querySelectorAll(".num");

numbers.forEach(number => {
    number.addEventListener("click", () => {

        if(resultValue.length > 11) return;
        
        operations.forEach(operation => operation.classList.remove("selected-op"));
        
        if(activeOperation == "none"){
            let previousText = resultValue;
            if(previousText == "0"){
                previousText = "";
            }
            let num = previousText + number.innerText;
            addDisplay(num);
            firstNum = +num;
            console.log(firstNum);
        }
        else{
            // secondNum
        }

    });
});


const operations = document.querySelectorAll(".op");

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        operations.forEach(operation => operation.classList.remove("selected-op"));
        activeOperation = operation.innerText; 
        operation.classList.add("selected-op");
        console.log(activeOperation);
    });
});


function clear() {
    firstNum = 0;
    secondNum = 0;
    activeOperation = "none";
    

    resultValue = "0";

    resultElement.innerText = resultValue;

}

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clear);











