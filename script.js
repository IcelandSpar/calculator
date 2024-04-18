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
    if (secondNumber == 0) {
        return alert('u funny lil guy');
    } else {
    return firstNumber / secondNumber;
}
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
} else if (operator == '*') {
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
    minusBtn.style.cssText = "background-color: #e3bbbd;";
    divideBtn.style.cssText = "background-color: #e3bbbd;";
    multiplyBtn.style.cssText = "background-color: #e3bbbd;";
    plusBtn.style.cssText = "background-color: #e3bbbd;";
});



    const buttonZero = document.querySelector(".buttonZero")

buttonZero.addEventListener('click', () => {
    if (screen.textContent.length > 8) {

    } else {
    screen.textContent = screen.textContent + "0"
    }
});
    //number
    const btn1 = document.querySelector(".btn1")

    btn1.addEventListener('click', () => {
if (screen.textContent.length > 8) {

} else {
        screen.textContent = screen.textContent + "1";
    }
    });


    //number
    const btn2 = document.querySelector(".btn2")

    btn2.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {

        screen.textContent = screen.textContent + "2";
    }
        
    });
    
    //number
    const btn3 = document.querySelector(".btn3")

    btn3.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {

        screen.textContent = screen.textContent + "3";
        }
    });
    //number
    const btn4 = document.querySelector(".btn4")

    btn4.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {

        screen.textContent = screen.textContent + "4";
        }
    });
    //number
    const btn5 = document.querySelector(".btn5")

    btn5.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {
        screen.textContent = screen.textContent + "5";
        }
    });
    //number
    const btn6 = document.querySelector(".btn6")

    btn6.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {
        screen.textContent = screen.textContent + "6";
    }
    });
    //number
    const btn7 = document.querySelector(".btn7")

    btn7.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {
        screen.textContent = screen.textContent + "7";
        }
    });
    //button
    const btn8 = document.querySelector(".btn8")

    btn8.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {
        screen.textContent = screen.textContent + "8";
        }
    });
    //button
    const btn9 = document.querySelector(".btn9")

    btn9.addEventListener('click', () => {
        if (screen.textContent.length > 8) {

        } else {
        screen.textContent = screen.textContent + "8";
        }
    });

    //dot
    const dot = document.querySelector(".dot")

    dot.addEventListener('click', () => {
if ((screen.textContent.split('.').length == 1 && screen.textContent.length < 8)) {


    screen.textContent = screen.textContent + ".";
} else if (((screen.textContent.split('.').length > 1))) {
screen.textContent = screen.textContent;
}
    });
  


function getScreenNumber() {
    return screen.textContent
}



function clearTextArea() {
    screen.textContent = '';
}





    const plusBtn = document.querySelector(".plusBtn");

    plusBtn.addEventListener('click', () => {
        firstNumber = parseFloat(getScreenNumber());
        operator = '+'
        



        screen.textContent = "";
        plusBtn.style.cssText = "background-color: #f3e2e3;";
        minusBtn.style.cssText = "background-color: #e3bbbd;";
        divideBtn.style.cssText = "background-color: #e3bbbd;";
        multiplyBtn.style.cssText = "background-color: #e3bbbd;";
    });

const minusBtn = document.querySelector(".minusBtn");

minusBtn.addEventListener('click', () => {
    firstNumber = parseFloat(getScreenNumber());
    operator = '-';


    screen.textContent = '';
    minusBtn.style.cssText = "background-color: #f3e2e3;";
    divideBtn.style.cssText = "background-color: #e3bbbd;";
    multiplyBtn.style.cssText = "background-color: #e3bbbd;";
    plusBtn.style.cssText = "background-color: #e3bbbd;";
});

const multiplyBtn = document.querySelector(".multiplyBtn");

multiplyBtn.addEventListener('click', () => {
    firstNumber = parseFloat(getScreenNumber());
    operator = '*';


    screen.textContent = '';

    minusBtn.style.cssText = "background-color: #e3bbbd;";
    divideBtn.style.cssText = "background-color: #e3bbbd;";
    multiplyBtn.style.cssText = "background-color: #f3e2e3;";
    plusBtn.style.cssText = "background-color: #e3bbbd;";

});

const divideBtn = document.querySelector(".divideBtn");

divideBtn.addEventListener('click', () => {
    firstNumber = parseFloat(getScreenNumber());
    operator = '/';


    screen.textContent = '';

    minusBtn.style.cssText = "background-color: #e3bbbd;";
    divideBtn.style.cssText = "background-color: #f3e2e3;";
    multiplyBtn.style.cssText = "background-color: #e3bbbd;";
    plusBtn.style.cssText = "background-color: #e3bbbd;";
});




const plusMinus = document.querySelector(".plusMinus");

plusMinus.addEventListener('click', () => {
    if (screen.textContent > 0) {
    screen.textContent = '-' + screen.textContent;
} else if (screen.textContent < 0) {
    screen.textContent =  screen.textContent.replace("-", "");
}
})


const percent = document.querySelector(".percent");

percent.addEventListener('click', () => {
screen.textContent = (parseFloat(screen.textContent / 100)).toPrecision(2);
});


const totalBtn = document.querySelector(".totalBtn")

totalBtn.addEventListener('click', () => {
   
    secondNumber = parseFloat(getScreenNumber());
    
    

    minusBtn.style.cssText = "background-color: #e3bbbd;";
    divideBtn.style.cssText = "background-color: #e3bbbd;";
    multiplyBtn.style.cssText = "background-color: #e3bbbd;";
    plusBtn.style.cssText = "background-color: #e3bbbd;";

    if (screen.textContent.length > 8) {
        screen.textContent = operate(firstNumber, secondNumber, operator).toPrecision(5);
    } else if (screen.textContent.length < 8){
        screen.textContent = operate(firstNumber, secondNumber, operator)
    }
});


const deleteBtn = document.querySelector('.deleteBtn');

deleteBtn.addEventListener('click', () => {
screen.textContent = screen.textContent.slice(0,-1)
});



