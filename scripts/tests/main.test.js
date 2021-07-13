/**
 * @jest-environment jsdom
 */

const fs = require('fs');
window.document.body.innerHTML = fs.readFileSync(__dirname + '/../../index.html');
require('../main');

afterEach(() => {
    document.querySelector('.display').textContent = '';
});

describe('number buttons', () => {

    test('clicking number button adds number to input and display', () => {

        document.getElementById('nine').click();
    
        expect(document.querySelector('.display').textContent).toEqual('9');
    
    });

    test('clicking number button after operator displays only the number', () => {

        document.getElementById('one').click();
        document.getElementById('plus').click();
        document.getElementById('one').click();

        expect(document.querySelector('.display').textContent).toEqual('1');

    });

});

describe('operator buttons', () => {

    test('clicking operator with no numbers returns nothing', () => {

        document.getElementById('plus').click();

        expect(document.querySelector('.display').textContent).toEqual('');
    
    });

    test('clicking operator button after second number evaluates the input', () => {

        
        document.getElementById('one').click();
        document.getElementById('plus').click();
        document.getElementById('one').click();
        document.getElementById('plus').click();

        expect(document.querySelector('.display').textContent).toEqual('2');

    });

    test('clicking equal button evaluates the input', () => {

        document.getElementById('one').click();
        document.getElementById('plus').click();
        document.getElementById('one').click();
        document.getElementById('equal').click();

        expect(document.querySelector('.display').textContent).toEqual('2');

    });

});

describe('clear button', () => {

    test('clicking AC clears the display', () => {

        document.getElementById('one').click();
        document.getElementById('clear').click();

        expect(document.querySelector('.display').textContent).toEqual('');
        
    });

    test('clicking AC with empty input returns empty display', () => {

        document.getElementById('clear').click();
        
        expect(document.querySelector('.display').textContent).toEqual('');

    });

});

describe('decimal button', () => {

    test('clicking decimal button where input already has decimal does nothing', () => {

        document.getElementById('zero').click()
        document.getElementById('decimal').click();
        document.getElementById('decimal').click();
        
        expect(document.querySelector('.display').textContent).toEqual('0.');

    });

    test('clicking decimal button after number adds decimal to display', () => {

        document.getElementById('zero').click();
        document.getElementById('decimal').click();

        expect(document.querySelector('.display').textContent).toEqual('0.');

    });

    test('clicking decimal button with empty input does nothing', () => {

        document.getElementById('decimal').click();
        expect(document.querySelector('.display').textContent).toEqual('');

    });

   

});


