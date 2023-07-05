

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

function remainder(a, b){
    let num = (a % b);
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
        case "%":
            return remainder(firstNum, secondNum);
        default:
            return "Math Error";
    };
}

console.log(operate("+", 3, 5));
console.log(operate("%", 5, 4));
console.log(operate("*", 3, 5));
console.log(operate("/", 3, 5));
console.log(operate("/", 5, 4));
console.log(operate("%", 4, 2));









