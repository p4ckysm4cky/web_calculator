let equationArray = [];
let tempStorage = "";
let symNotBlocked = false;


// DOMs

const equationOutput = document.getElementById("equation");
const answerOutput = document.getElementById("answer");


const clearBtn = document.getElementById("ac");
const delBtn = document.getElementById("del");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const equalBtn = document.getElementById("equal");


const numBtns = Array.from(document.getElementsByClassName("num"));


// Functions
function roundNumber(number) {
    return Math.round(number * 100) / 100;
}



function clearScreen() {
    equationOutput.innerHTML = "";
    answerOutput.innerHTML = "";
    tempStorage = "";
    equationArray = [];
    symNotBlocked = true;
}

function appendStorage() {
    if (tempStorage !== ""){
        equationArray.push(tempStorage);
        tempStorage = "";
    }
}

function evaluate() {
    symbol = equationArray[1];
    switch (symbol) {
        case "+":
            return roundNumber(parseFloat(equationArray[0]) + parseFloat(equationArray[2]));
            break;
        case "*":
            return roundNumber(parseFloat(equationArray[0]) * parseFloat(equationArray[2]));
            break;
        case "/":
            if (parseFloat(equationArray[2]) === 0) {
                clearScreen();
                answerOutput.innerHTML = "ERROR";
                return "ERROR";
            } else {
                return roundNumber(parseFloat(equationArray[0]) / parseFloat(equationArray[2]));
            }
            break;
        case "-":
            return roundNumber(parseFloat(equationArray[0]) - parseFloat(equationArray[2]));
            break;
    }
}


function autoEvaluate() {
    appendStorage();
    if (equationArray.length >= 3) {
        answerOutput.innerHTML = ""
        answer = evaluate();
        equationOutput.innerHTML = answer;
        equationArray = [answer];
    }
}



// Events
for (i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function(e) {
    if (answerOutput.innerHTML !== ""){
        clearScreen();
    }
        equationOutput.innerHTML += e.target.innerText;
        tempStorage += e.target.innerText;
        symNotBlocked = true;
    })
}

clearBtn.addEventListener("click", function(e) {
    clearScreen();
})


plusBtn.addEventListener("click", function(e) {
    if (symNotBlocked) {
        autoEvaluate();
        equationOutput.innerHTML += ` ${e.target.innerText} `;   
        equationArray.push("+");
        symNotBlocked = false;
    }
})

multiplyBtn.addEventListener("click", function(e) {
    if (symNotBlocked) {
        autoEvaluate();
        equationOutput.innerHTML += ` ${e.target.innerText} `;   
        equationArray.push("*");
        symNotBlocked = false;
    }
})

equalBtn.addEventListener("click", function(e) {
    appendStorage()
    if (symNotBlocked && equationArray.length === 3) {
        answer = evaluate()
        answerOutput.innerHTML = answer

    }
})

divideBtn.addEventListener("click", function(e) {
    if (symNotBlocked) {
        autoEvaluate();
        equationOutput.innerHTML += ` ${e.target.innerText} `;   
        equationArray.push("/");
        symNotBlocked = false;
    }
})

minusBtn.addEventListener("click", function(e) {
    if (symNotBlocked) {
        autoEvaluate();
        equationOutput.innerHTML += ` ${e.target.innerText} `;   
        equationArray.push("-");
        symNotBlocked = false;
    }
})


delBtn.addEventListener("click", function(e) {
    if (tempStorage !== "") {
        tempStorage = tempStorage.slice(0, -1);
        equationOutput.innerHTML = equationOutput.innerHTML.slice(0, -1);
    }
})