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
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }

};

function parse(input) {

    let parsed = input.split(/([x\+\-\/])/);

    num1 = Number(parsed[0]);
    operator = parsed[1];
    num2 = Number(parsed[2]);

};

//module.exports = calculate;