`use strict`;

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(' ').length;
  const total = message * pricePerWord;
  //   console.log(message);
  return total;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
