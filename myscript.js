let equationArray = [];
let tempStorage = "";
let symNotBlocked = true;


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

function clearScreen() {
    equationOutput.innerHTML = "";
    answerOutput.innerHTML = "";
    tempStorage = "";
    equationArray = [];
    symNotBlocked = true;
}

function appendStorage() {
    equationArray.push(tempStorage);
    tempStorage = "";

}




// Events
for (i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function(e) {
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
        equationOutput.innerHTML += ` ${e.target.innerText} `;
        appendStorage()
        equationArray.push("+")
        symNotBlocked = false;
    }
})