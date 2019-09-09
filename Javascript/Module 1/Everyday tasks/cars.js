// const carBrands = 'ford tesla bmw mercedes-benz citroen honda toyota';

// const wordLength = 'mercedes-benz'.length; // 13
// const wordBeginfromLetter = 'citroen'[4]; // c
// const wordEndedLetters = 'tesla'['tesla'.length - 1]; // w
// const wordCapitalize =
//   'honda'[0].toUpperCase() + 'honda'.slice(3).toLowerCase(); // Honda

// const positionStart = carBrands.indexOf('tesla');
// const positionEnd = carBrands.indexOf('tesla') + 'tesla'.length;

// const carBrandsWithoutOneBrand =
//   carBrands.slice(0, positionStart).trim() + carBrands.slice(positionEnd);

// console.log('wordLength =', wordLength); // 13
// console.log('wordBeginfromLetter =', wordBeginfromLetter); // c
// console.log('wordEndedLetters =', wordEndedLetters); // w
// console.log('wordCapitalize =', wordCapitalize); // Honda
// console.log('positionStart =', positionStart); // 5
// console.log('positionEnd =', positionEnd); // 10
// console.log('carBrandsWithoutOneBrand =', carBrandsWithoutOneBrand); // 10

// ============ Задача дня ==============
// Удалить из строки проданный товар и вставить в строку новые товары.
// Строку вывести в консоль, с помощью asser сделать проверку
const products = 'apple orange grape watermelon kiwi bananas';
const sales = 'watermelon';
const newProducts = 'melon tomato';
let stock;

const wordLength = products.length;
const wordBeginfromLetter =
  `watermellon`[0].toLowerCase() +
  `watermellon`.slice(1, 3).toUpperCase() +
  `watermellon`.slice(4).toLowerCase();

const saled = products.indexOf(`watermellon`) + `watermellon`.length;
console.log(saled);
