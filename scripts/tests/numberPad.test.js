/**
 * @jest-environment jsdom
 */

const fs = require('fs');
window.document.body.innerHTML = fs.readFileSync('/Users/Victor/webdev/calculator/index.html');
require('../numberPad');

describe('number buttons', () => {

    test('clicking number button adds number to input and display', () => {

        // Arrange
        
        // Act
        document.querySelector('#nine').click();
    
        // Assert
        expect(document.querySelector('.display').textContent).toEqual('9');
    
    });

});

describe('operator buttons', () => {

    test('click operator with no numbers returns nothing', () => {

        // Arrange
    
        // Act
        document.querySelector('#plus').click();

        // Assert
        expect(document.querySelector('.display').textContent).toEqual('');
    
    });

});
