const balanceBrackets = require('./balance-brackets');

test('[] is balanced', () => {
  expect(balanceBrackets('[]')).toBeTruthy();
});

test('[]{}() is balanced', () => {
  expect(balanceBrackets('[]{}()')).toBeTruthy();
});

test('[({})]{}() is balanced', () => {
  expect(balanceBrackets('[({})]{}()')).toBeTruthy();
});

test('({(){}[]})[]. is balanced', () => {
  expect(balanceBrackets('({(){}[]})[].')).toBeTruthy();
});

test('{{[[(())]]}} is balanced', () => {
  expect(balanceBrackets('{{[[(())]]}}')).toBeTruthy();
});

test('[(}] is not balanced', () => {
  expect(balanceBrackets('[(}]')).toBeFalsy();
});

test('{[(])} is not balanced', () => {
  expect(balanceBrackets('{[(])}')).toBeFalsy();
});

test('[[] is not balanced', () => {
  expect(balanceBrackets('[[]')).toBeFalsy();
});


test('[]] is not balanced', () => {
  expect(balanceBrackets('[]]')).toBeFalsy();
});
