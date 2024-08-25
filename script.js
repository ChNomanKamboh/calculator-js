const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function appendDot() {
    display.value += '.';
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/ /g, ''));
    } catch (e) {
        display.value = 'Error';
    }
}

// GSAP animations
gsap.from(".calculator", { duration: 1.5, y: -150, opacity: 0, ease: "back.out(1.7)" });
