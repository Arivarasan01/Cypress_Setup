var maxValue = Math.max(1, 3, 4, 12, 10, 204, 194);
console.log('Maximum Value: ', maxValue);

var minValue = Math.min(1, 3, 4, 12, 10, 204, 194);
console.log('Minimum Value: ', minValue);

console.log(Math.round(29.5));
console.log(Math.round(50.4));
console.log(Math.round(34.7));

console.log(Math.ceil(0.1));
console.log(Math.ceil(4.4));
console.log(Math.ceil(9.0));

console.log(Math.floor(0.1));
console.log(Math.floor(4.4));
console.log(Math.floor(9.0));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

var randomNumber = Math.floor(Math.random() * numberOfChoices + firstValue);

var numberOfChoices = 12;
var firstValue = 1;
var randomnumber = Math.floor(Math.random() * numberOfChoices + firstValue);
console.log('Random Number: ', randomNumber);