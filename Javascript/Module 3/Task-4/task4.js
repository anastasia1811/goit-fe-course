/* Напиши функцию countTotalSalary(employees) принимающую объект
зарплат. Функция считает общую сумму запрплаты работников и
возращает ее. Каждое поле объекта, передаваемого в функцию,
имеет вид "имя":"зарплата".

Вызовы функции для проверки работоспособности твоей реализации. */

// eslint-disable-next-line func-names
const countTotalSalary = function (employees) {
  // eslint-disable-next-line prefer-const
  let total = 0;
  const a = this.Object.values(employees);
  // const b = a.split(' ');
  console.log(typeof a);
  return a;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
