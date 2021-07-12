/**
 * @jest-environment jsdom
 */

require('./numberPad');

test('clicking number button adds number to input and display', () => {

    // Arrange
    document.body.innerHTML = '<div class="display">' + '<button class="number">1</button>' + '</div>';
 
    // Act
    document.querySelector('.number').click();

    // Assert
    expect(document.querySelector('.display').textContent).toEqual('1');

});