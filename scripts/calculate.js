let num1;
let num2;
let operator;

function calculate(input) {

    // parse input to identify numbers and operator
    parse(input);

    // perform operation on numbers
    switch (operator) {
        case '+':
            return num1 + num2;
        case '−':
            return num1 - num2;
        case '×':
            return num1 * num2;
        case '÷':
            if (num2 == 0) {
                return 'error';
            }
            return num1 / num2;
        case '%':
            return num1 / 100;
    }

};

function parse(input) {

    let parsed = input.split(/([%×\+−÷])/);

    num1 = Number(parsed[0]);
    operator = parsed[1];
    num2 = Number(parsed[2]);

};

//module.exports = calculate;