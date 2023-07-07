

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
        case "×":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            return "Math Error";
    };
}


let activeOperation = "none";

let resultElement = document.querySelector("#result p");




function addDisplay(text){

    resultElement.innerText = text;
    
}


const numberButtons = document.querySelectorAll(".num");

numberButtons.forEach(number => {
    number.addEventListener("click", () => {

        let previousValue = resultElement.innerText;

        if(previousValue.length > 11) return;
        
        operationButtons.forEach(operation => operation.classList.remove("selected-op"));
        
        if(activeOperation == "none"){

            if(previousValue == "0" || previousValue == "Math Error"){
                previousValue = "";
            }
            let num = previousValue + number.innerText;
            addDisplay(num);
            firstNum = +num;
            console.log("First Num: " + firstNum);
        }
        else{
            if(isNaN(+previousValue) || previousValue == "0"){
                previousValue = "";
                resultElement.innerText = "";
            }

            let num = previousValue + number.innerText;
            addDisplay(num);
            secondNum = +num;
            console.log("Second Num: " + secondNum);

        }

    });
});


const operationButtons = document.querySelectorAll(".op");

operationButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        if(activeOperation == "none"){
            let resultValue = resultElement.innerText;
            firstNum = +resultValue;
        }

        operationButtons.forEach(operation => operation.classList.remove("selected-op"));
        operation.classList.add("selected-op");
        
        
        activeOperation = operation.innerText;
        resultElement.innerText = activeOperation;

        console.log("active op: " + activeOperation);
        console.log("firstNum: " + firstNum);
    });
});


const equalsButton = document.querySelector("#equal");

equalsButton.addEventListener("click", calculate);


function calculate(){
    let result = operate(activeOperation, firstNum, secondNum);
    
    if (result == "Math Error") {
        firstNum = 0;
    } else {
        firstNum = +result;
    }
    
    secondNum = 0;

    resultElement.innerText = result;

    activeOperation = "none";

    operationButtons.forEach(operation => operation.classList.remove("selected-op"));
}

function clear() {
    firstNum = 0;
    secondNum = 0;
    activeOperation = "none";
    
    
    resultElement.innerText = "0";
    operationButtons.forEach(operation => operation.classList.remove("selected-op"));

}

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clear);











