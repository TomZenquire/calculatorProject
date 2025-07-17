document.addEventListener('keydown', (event) => {
    if (event.key == 0) {clickButton("btn0")} else
    if (event.key == 1) {clickButton("btn1")} else
    if (event.key == 2) {clickButton("btn2")} else
    if (event.key == 3) {clickButton("btn3")} else
    if (event.key == 4) {clickButton("btn4")} else
    if (event.key == 5) {clickButton("btn5")} else
    if (event.key == 6) {clickButton("btn6")} else
    if (event.key == 7) {clickButton("btn7")} else
    if (event.key == 8) {clickButton("btn8")} else
    if (event.key == 9) {clickButton("btn9")} else
    if (event.key == "+") {clickButton("btnAdd")} else
    if (event.key == "-") {clickButton("btnMinus")} else
    if (event.key == "*") {clickButton("btnMultiply")} else
    if (event.key == "x") {clickButton("btnMultiply")} else
    if (event.key == 'Backspace') {clickButton("btnBackspace")} else
    if (event.key == "=") {clickButton("btnEquals")} else
    if (event.key == "/") {clickButton("btnDivide")} else
    if (event.key == ".") {clickButton("btn.")} else
    if (event.key == 'Enter') {clickButton("btnEquals")}
  });
  document.addEventListener('keyup', (event) => {
    if (event.key == 0) {unclickButton("btn0")} else
    if (event.key == 1) {unclickButton("btn1")} else
    if (event.key == 2) {unclickButton("btn2")} else
    if (event.key == 3) {unclickButton("btn3")} else
    if (event.key == 4) {unclickButton("btn4")} else
    if (event.key == 5) {unclickButton("btn5")} else
    if (event.key == 6) {unclickButton("btn6")} else
    if (event.key == 7) {unclickButton("btn7")} else
    if (event.key == 8) {unclickButton("btn8")} else
    if (event.key == 9) {unclickButton("btn9")} else
    if (event.key == "+") {unclickButton("btnAdd")} else
    if (event.key == "-") {unclickButton("btnMinus")} else
    if (event.key == "*") {unclickButton("btnMultiply")} else
    if (event.key == "x") {unclickButton("btnMultiply")} else
    if (event.key == 'Backspace') {unclickButton("btnBackspace")} else
    if (event.key == "=") {unclickButton("btnEquals")} else
    if (event.key == "/") {unclickButton("btnDivide")} else
    if (event.key == ".") {unclickButton("btn.")} else
    if (event.key == 'Enter') {unclickButton("btnEquals")}
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