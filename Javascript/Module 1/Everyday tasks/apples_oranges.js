// TEMPLATE

'use strict';

// const priceString1Q = '29.6 UAH / Litr';
// const priceString2Q = '30.3 UAH / Litr';

// const priceNumber1Q = Number.parseFloat(priceString1Q);
// const priceNumber2Q = Number.parseFloat(priceString2Q);

// console.log('priceNumber1Q', priceNumber1Q);
// console.log('priceNumber2Q', priceNumber2Q);

// const roughMoney = priceNumber1Q + priceNumber2Q;

// console.log('roughMoney', roughMoney);
// console.assert(roughMoney === 59.9, 'Error in accuracy roughMoney');

// const accuratMoney = (priceNumber1Q * 100 + priceNumber2Q * 100) / 100;

// console.log('accuratMoney', accuratMoney);
// console.assert(accuratMoney === 59.9, 'Error in accuracy accuratMoney');

// Task execution
// Есть цены за килограмм и количество килограмм для двух продуктов.
// Следует рассчиать общий вес покупки и общую стоимость покупки.
// Обязательно сделайте проверку с помощью console.assert
// В проверку запишите ожидаемую сумму и текст сообщения об ошибке,
// если  сумма не совпадет с ожидаемым значением.

// Выведите ответ в строку "Total wight: 00.00kg. Cost: 00.00$" используя шаблонную строку
// и полученные значения веса и стоимости покупки.

const applePriceString = '0.4$ / kg';
const appleQuantityString = '1.4kg';

const orangePriceString = '1.3$ / kg';
const orangeQuantityString = '1.2kg';

const applePrice = Number.parseFloat(applePriceString);
const appleQuantity = Number.parseFloat(appleQuantityString);
const orangePrice = Number.parseFloat(orangePriceString);
const orangeQuantity = Number.parseFloat(orangeQuantityString);

// console.log(`Apple price per kilo: `, applePrice);
// console.log(`Apple quantity: `, appleQuantity);
// console.log(`Orange price: `, orangePrice);
// console.log(`Orange qauntity: `, orangeQuantity);

let appleCost = (applePrice * 100 * (appleQuantity * 100)) / 1000;
let orangeCost = (orangePrice * 100 * (orangeQuantity * 100)) / 1000;
// console.log(appleCost);
// console.log(orangeCost);
let totalCost = (appleCost * 100 + orangeCost * 100) / 100;
// console.log(`Total Cost: `, totalCost);

let totalWeight = (appleQuantity * 100 + orangeQuantity * 100) / 100;
// console.log(`Total Weight: `, totalWeight);

console.log(`Total cost: ${totalCost}. 
Total weight: ${totalWeight}`);
