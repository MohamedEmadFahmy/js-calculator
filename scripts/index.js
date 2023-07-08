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

function invertSign(a){
    let num = -a;
    return +num.toFixed(13);
}

function decimalize(a){
    if((a+"").includes(".")){
        return;
    }
    
    return (a + ".");
}

let firstNum = 0;

let operation = "";

let secondNum = "nothing";



function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "×":
            return multiply(firstNum, secondNum);
        case "÷":
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
        
        // operationButtons.forEach(operation => operation.classList.remove("selected-op"));
        
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

        operationButtons.forEach(operation => operation.classList.remove("selected-op"));
        operation.classList.add("selected-op");

        let clickedOperation = operation.innerText;

        if (activeOperation == "none") {
            firstNum = +resultElement.innerText;
            activeOperation = clickedOperation;
            addDisplay(activeOperation);
        }
        else {
            if (secondNum != "nothing") {
                calculate();
            }
            addDisplay(firstNum + " " + clickedOperation);
            activeOperation = clickedOperation;
        }


        console.log("firstNum: " + firstNum);
        console.log("active op: " + activeOperation);
    });
});


const equalsButton = document.querySelector("#equal");

equalsButton.addEventListener("click", calculate);


function calculate(){
    if(secondNum == "nothing") return;

    if(activeOperation == "none"){
        resultElement.innerText = firstNum;
        return;
    }

    let result = operate(activeOperation, firstNum, secondNum);
    
    if (result == "Math Error") {
        firstNum = 0;
    } else {
        firstNum = +result;
    }

    secondNum = "nothing";

    resultElement.innerText = result;

    console.log(result);

    activeOperation = "none";

    operationButtons.forEach(operation => operation.classList.remove("selected-op"));
    
}

function clear() {
    firstNum = 0;
    secondNum = "nothing";
    activeOperation = "none";
    
    
    resultElement.innerText = "0";
    operationButtons.forEach(operation => operation.classList.remove("selected-op"));

}

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clear);


const percentButton = document.querySelector("#percent");

percentButton.addEventListener("click", () => {
    if(activeOperation == "none"){
        firstNum = percent(firstNum);
        resultElement.innerText = firstNum;
    }
    else{
        secondNum = percent(secondNum);
        resultElement.innerText = secondNum;
    }
});


const invertSignButton = document.querySelector("#invert-sign");

invertSignButton.addEventListener("click", () => {
    if(activeOperation == "none"){
        firstNum = invertSign(firstNum);
        resultElement.innerText = firstNum;
    }
    else{
        secondNum = invertSign(secondNum);
        resultElement.innerText = secondNum;
    }
});

const decimalButton = document.querySelector("#point");

decimalButton.addEventListener("click", () => {

    console.log(".");

    if(activeOperation == "none"){
        firstNum = decimalize(firstNum);
        resultElement.innerText = firstNum;
    }
    else{
        secondNum = decimalize(secondNum);
        resultElement.innerText = secondNum;
    }
});










