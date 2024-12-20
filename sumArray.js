function sumArray(numbers) {
  return numbers.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

sumArray([1, 2, 3, 4, 5]); // 15
sumArray([10, 20, 30]); // 60
let result = sumArray([]);

console.log(result);
