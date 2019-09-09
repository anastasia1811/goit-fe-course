let max = Math.max(124, 0x3fa, 0b111111111);
console.log(max); // 1018

const toCSSHex = `#${max.toString(16)}`; // #3fa

console.log(toCSSHex);

const num0 = 0 % 3; // 0
const num1 = 1 % 3; // 1
const num2 = 2 % 3; // 2
const num3 = 3 % 3; // 0
const num4 = 4 % 3; // 1
const num5 = 5 % 3; // 2
const num6 = 6 % 3; // 0
const num123456 = 123456 % 3; // 0
const num123457 = 123456 % 3; // 1
const num123458 = 123458 % 3; // 2
const num123459 = 123459 % 3; // 0

let str = 'aa';
let str2 = 'a';

let res = str.length > 1 ? str : '0' + str; // 'aa'
let res2 = str2.length > 1 ? str2 : '0' + str2; // '0a'

console.log(res); // 'aa'
console.log(res2); // '0a'
