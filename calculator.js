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
}
document.addEventListener('keydown', (event) => {   
    if (keyToDiv.hasOwnProperty(event.key)) {clickButton(keyToDiv[event.key])}
  });
document.addEventListener('keyup', (event) => {
    if (keyToDiv.hasOwnProperty(event.key)) {unclickButton(keyToDiv[event.key])}
  });
const buttons = document.getElementsByClassName("indButton");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', function(buttonClicked) {
        const clikcedId = buttonClicked.target.id
        clickButton(clikcedId);
    });
    buttons[i].addEventListener('mouseup', function(buttonClicked) {
        const clikcedId = buttonClicked.target.id
        unclickButton(clikcedId);
    });
}
function unclickButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.removeProperty('background-color')
}

function clickButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = 'orange'
}