`use strict`;
// Напиши фукцнию findLongestWord(string), которая принимает параметром п
// роизвольную строку (в строке будут только слова и пробелы) и
// возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

// 1. преобразовать строку в массив
// 2. Посчитать длину каждого элемента массива
// 3. Сравнить все элементы массива с 0 и вернуть самое длинное
//

// function findLongestWord(string) {
//   string = string.split(' ');
//   for (i = 0; i < string.length; i += 1) {
//     // const word = string[i].length;
//     const longestWord = Math.max(string[i].length);
//     // const longest w
//     console.log(longestWord);
//     // return longestWord;
//   }
// }

function findLongestWord(string) {
  words = string.split(' ');
  // eslint-disable-next-line prefer-const
  let longestWord = '';

  words.forEach((element) => {
    if (element.length > longestWord.length) {
      return (longestWord = element);
    }
    return longestWord;
  });
  return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
//
console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.log(
  findLongestWord(
    'Метод forEach() виконує надану функцію один раз для кожного елемента масиву',
  ),
);
