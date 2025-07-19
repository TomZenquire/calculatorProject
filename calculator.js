const keyToDiv = {
    0: "btn0",
    1: "btn1",
    2: "btn2",
    3: "btn3",
    4: "btn4",
    5: "btn5",
    6: "btn6",
    7: "btn7",
    8: "btn8",
    9: "btn9",
    "+": "btnAdd",
    "-": "btnMinus",
    "*": "btnMultiply",
    "x": "btnMultiply",
    "Backspace": "btnBackspace",
    "=": "btnEquals",
    "/": "btnDivide",
    ".": "btn.",
    "Enter": "btnEquals",
};
const divToNumber = {
    "btn0": 0,
    "btn1": 1,
    "btn2": 2,
    "btn3": 3,
    "btn4": 4,
    "btn5": 5,
    "btn6": 6,
    "btn7": 7,
    "btn8": 8,
    "btn9": 9,
};
document.addEventListener('keydown', (event) => {   
    if (keyToDiv.hasOwnProperty(event.key)) {clickButton(keyToDiv[event.key])}
  });
document.addEventListener('keyup', (event) => {
    if (keyToDiv.hasOwnProperty(event.key) && 
        keyToDiv[event.key] != "btnAC" && keyToDiv[event.key] != "btnDivide" && keyToDiv[event.key] != "btnMultiply" && 
        keyToDiv[event.key] != "btnMinus" && keyToDiv[event.key] != "btnAdd" && keyToDiv[event.key] != "btnEquals"
    ) {unclickButton(keyToDiv[event.key])}
  });
const buttons = document.getElementsByClassName("indButton");
const screen = document.getElementById('screen');
var currentValue = ""
var storedValue = ""
var fucntionCalled = ""

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', function(buttonClicked) {
        const clikcedId = buttonClicked.target.id;
        clickButton(clikcedId);
    });
    if(buttons[i].id != "btnAC" && buttons[i].id != "btnDivide" && buttons[i].id != "btnMultiply" && 
        buttons[i].id != "btnMinus" && buttons[i].id != "btnAdd" && buttons[i].id != "btnEquals")
        {buttons[i].addEventListener('mouseup', function(buttonClicked) {
        const clikcedId = buttonClicked.target.id;
        unclickButton(clikcedId);
    })};
};
function unclickButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.removeProperty('background-color');
};

function clickButton(buttonId) {
    for (let i = 0; i < buttons.length; i++) {
        const clikcedId = buttons[i].getAttribute('id');
        unclickButton(clikcedId);
    };
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = 'orange';
    updateCurrentValue(divToNumber[buttonId],buttonId);
};

function updateCurrentValue(newValue,buttonId) {
     if(buttonId == "btnAC") {
        updateScreenValue(""); storedValue = "";
     } else if(buttonId == "btnBackspace") {
        currentValue == "0." ? screen.innerHTML = null : updateScreenValue(currentValue.slice(0, currentValue.length -1))
     } else if(buttonId == "btnMultiply") {
        storedValue = currentValue; updateScreenValue(""); fucntionCalled = "Times"
     } else if(buttonId == "btnDivide") {
        storedValue = currentValue; updateScreenValue(""); fucntionCalled = "Divide"
     } else if(buttonId == "btnAdd") {
        storedValue = currentValue; updateScreenValue(""); fucntionCalled = "Add"
     } else if(buttonId == "btnMinus") {
        storedValue = currentValue; updateScreenValue(""); fucntionCalled = "Minus"
     } else if(buttonId == "btnEquals") {
        if (storedValue == "") {storedValue = 0}; if (currentValue == "") {currentValue = 0}
        if (fucntionCalled == "") {} else
        if (fucntionCalled == "Add") {currentValue = Number(storedValue) + Number(currentValue); updateScreenValue(currentValue.toString())} else
        if (fucntionCalled == "Minus") {currentValue = Number(storedValue) - Number(currentValue); updateScreenValue(currentValue.toString())} else
        if (fucntionCalled == "Times") {currentValue = Number(storedValue) * Number(currentValue); updateScreenValue(currentValue.toString())} else
        if (fucntionCalled == "Divide") {currentValue = Number(storedValue) / Number(currentValue); updateScreenValue(currentValue.toString())}
     } else if(buttonId == "btn.") {
        if (!currentValue.includes(".")) {currentValue == "" ? updateScreenValue("0."): updateScreenValue(currentValue + ".")}
     } else if(buttonId == "btn0") {
        if (currentValue == "") {updateCurrentValue("0.")} else {updateScreenValue(currentValue + "0")}
     } else {updateScreenValue(currentValue + newValue)}
}

function updateScreenValue(numberInput) {
    currentValue = numberInput  
        document.getElementById("curentValue").innerHTML = currentValue
        document.getElementById("storedValue").innerHTML = storedValue
    const length = numberInput.slice(0,7).includes(".") ? 7 : 6
    screen.innerHTML = numberInput.toString().replace(".","").length > 6 ? numberInput.slice(0,length) : numberInput
}