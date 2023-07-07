

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

// console.log(operate("+", 3, 5));
// console.log(operate("%", 5, 4));
// console.log(operate("*", 3, 5));
// console.log(operate("/", 3, 5));
// console.log(operate("/", 5, 4));
// console.log(operate("%", 4, 2));

// let displayValue = "";


// let displayElement = document.querySelector("#workout");

// displayElement.innerText = displayValue;




let resultValue = "0";

let resultElement = document.querySelector("#result p");

resultElement.innerText = resultValue;



function addDisplay(text){
    if(resultValue == "0"){
        resultValue = "";
    }
    resultValue += text;
    resultElement.innerText = resultValue;
}

activeOperation = "none";

const numbers = document.querySelectorAll(".num");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(resultValue.length < 12){
            operations.forEach(operation => operation.classList.remove("selected-op"));
            if(activeOperation == "none"){
                let num = number.innerText;
                addDisplay(num);
                firstNum = +num;
            }
            else{
            }
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











