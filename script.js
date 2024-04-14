let firstNumber = 0;
let secondNumber = 0;
let operator = '';

let total = 0;








function add(firstNumber, secondNumber) {
return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};



function operate(firstNumber, secondNumber, operator) {
if(operator == '+') {
    return add(firstNumber, secondNumber);
} else if (operator == '-') {
    return subtract(firstNumber, secondNumber);
} else if (operator == '/') {
    return divide(firstNumber, secondNumber);
} else if (operator = '*') {
    return multiply(firstNumber, secondNumber);
}
}




const screen = document.querySelector(".screen")


//clear
const clear = document.querySelector(".clear")

clear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    screen.textContent = "";
});

function printToScreen() {

    const buttonZero = document.querySelector(".buttonZero")

buttonZero.addEventListener('click', () => {

    screen.textContent = screen.textContent + "0"
});
    //number
    const btn1 = document.querySelector(".btn1")

    btn1.addEventListener('click', () => {

        screen.textContent = screen.textContent + "1";
    });


    //number
    const btn2 = document.querySelector(".btn2")

    btn2.addEventListener('click', () => {
        

        screen.textContent = screen.textContent + "2";
        
    });
    
    //number
    const btn3 = document.querySelector(".btn3")

    btn3.addEventListener('click', () => {

        screen.textContent = screen.textContent + "3";
    });
    //number
    const btn4 = document.querySelector(".btn4")

    btn4.addEventListener('click', () => {

        screen.textContent = screen.textContent + "4";
    });
    //number
    const btn5 = document.querySelector(".btn5")

    btn5.addEventListener('click', () => {

        screen.textContent = screen.textContent + "5";
    });
    //number
    const btn6 = document.querySelector(".btn6")

    btn6.addEventListener('click', () => {

        screen.textContent = screen.textContent + "6";
    });
    //number
    const btn7 = document.querySelector(".btn7")

    btn7.addEventListener('click', () => {

        screen.textContent = screen.textContent + "7";
    });
    //button
    const btn8 = document.querySelector(".btn8")

    btn8.addEventListener('click', () => {

        screen.textContent = screen.textContent + "8";
    });
    //button
    const btn9 = document.querySelector(".btn9")

    btn9.addEventListener('click', () => {

        screen.textContent = screen.textContent + "9";
    });
    //dot
    const dot = document.querySelector(".dot")

    dot.addEventListener('click', () => {

    screen.textContent = screen.textContent + ".";
    });
  
} 

function getScreenNumber() {
    return screen.textContent
}



function clearTextArea() {
    screen.textContent = '';
}



function getOperator() {

    const plusBtn = document.querySelector(".plusBtn");

    plusBtn.addEventListener('click', () => {
        firstNumber = parseFloat(screen.textContent);
        operator = '+'
        screen.textContent = "+";
    });
    return operator
}




printToScreen();

getOperator();


const totalBtn = document.querySelector(".totalBtn")

totalBtn.addEventListener('click', () => {
    secondNumber = parseFloat(screen.textContent);
    total = operate(firstNumber, secondNumber, operator);
    screen.textContent = total;
});


