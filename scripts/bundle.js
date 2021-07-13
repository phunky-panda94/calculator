(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

module.exports = calculate;

},{}],2:[function(require,module,exports){
const calculate = require('./calculate');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const percent = document.getElementById('percent');
const backspace = document.getElementById('backspace');

let input = '';
let numberOfOperators = 0;

const evaluate = () => {

    let result = calculate(input);
    display.textContent = result;
    input = result;
    numberOfOperators = 0;

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

        if (numberOfOperators == 1) {
            evaluate();
        }

        input+=e.target.textContent;
        numberOfOperators++;

    });
});

equal.addEventListener('click', () => {

    if (numberOfOperators == 0) {
        return input;
    }

    evaluate();

});

clear.addEventListener('click', () => {
    display.textContent = '';
    input = '';
})

decimal.addEventListener('click', (e) => {

    if (!input || input.includes('.')) {
        console.log('empty input');
        return;
    };

    display.textContent+=e.target.textContent;
    input+=e.target.textContent;

});

percent.addEventListener('click', (e) =>  {

    input+=e.target.textContent;
    evaluate();

});

backspace.addEventListener('click', () => {

    input = input.slice(0,input.length-1);
    display.textContent = input;

});
},{"./calculate":1}]},{},[2]);
