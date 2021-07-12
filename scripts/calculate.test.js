const calculate = require('./calculate');

describe('add', () => {

    test('1 + 1 = 2',() => {
        expect(calculate('1+1')).toEqual(2);
    });
    
    test('1 + 10 = 11',() => {
        expect(calculate('1+10')).toEqual(11);
    });

});

describe('subtract', () => {

    test('2 - 1 = 1', () => {
        expect(calculate('2-1')).toEqual(1);
    });

    test('20 - 5 = 15', () => {
        expect(calculate('20-5')).toEqual(15);
    });

});

describe('multiply', () => {

    test('2 x 2 = 4', () => {
        expect(calculate('2x2')).toEqual(4);
    });

    test('10 x 5 = 50', () => {
        expect(calculate('10x5')).toEqual(50);
    });

});

describe('divide', () => {

    test('4 / 2 = 2', () => {
        expect(calculate('4/2')).toEqual(2);
    });

    test('50 / 10 = 5', () => {
        expect(calculate('50/10')).toEqual(5);
    });

});

describe('percent', () => {

    test('5% = 0.05', () => {
        expect(calculate('5%')).toEqual(0.05);
    });

});