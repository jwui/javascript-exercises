var sum = 0;
const sumAll = function (num1, num2) {
  for (let i = num1; i < num2 + 1; i++) {
    sum += i;
  }
  console.log(sum);
};

sumAll(1, 5);
// Do not edit below this line
module.exports = sumAll;
