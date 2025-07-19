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
document.addEventListener('keydown', (event) => {   
    if (keyToDiv.hasOwnProperty(event.key)) {clickButton(keyToDiv[event.key])}
  });
document.addEventListener('keyup', (event) => {
    if (keyToDiv.hasOwnProperty(event.key)) {unclickButton(keyToDiv[event.key])}
  });
const buttons = document.getElementsByClassName("indButton");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', function(buttonClicked) {
        const clikcedId = buttonClicked.target.id;
        clickButton(clikcedId);
    });
    if(buttons[i].id != "btnAC" && buttons[i].id != "btnDivide" && buttons[i].id != "btnMultiply" && buttons[i].id != "btnMinus" && buttons[i].id != "btnAdd" && buttons[i].id != "btnEquals" ) {buttons[i].addEventListener('mouseup', function(buttonClicked) {
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
    button.style.backgroundColor = 'orange'
};