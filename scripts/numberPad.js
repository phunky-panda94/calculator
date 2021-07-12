const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let input = '';
let numberOfOperators = 0;

const evaluate = () => {

    console.log(input);

    let result = calculate(input);
    display.textContent = result;
    input = result;
    numberOfOperators = 0;

    console.log(result);

};

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {

        if (numberOfOperators > 0) {
            display.textContent = '';
        }

        display.textContent+=e.target.textContent;
        input+=e.target.textContent;

    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {

        if (!input) {
            console.log('empty input');
            return;
        };

        input+=e.target.textContent;
        numberOfOperators++;

    });
});

clear.addEventListener('click', () => {
    display.textContent = '';
    input = '';
})

equal.addEventListener('click', () => {

    if (numberOfOperators == 0) {
        return input;
    }

    evaluate();

});