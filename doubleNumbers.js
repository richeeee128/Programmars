function doubleNumbers(numbers) {
  return numbers.map((x) => x * 2);
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]

const result = doubleNumbers([5, 10, 15]);
// [10, 20, 30]

doubleNumbers([]);
// []

console.log(result);
