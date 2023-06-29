// function solution(price, money, count) {
//   const totalPrice = '';
//   for (i = 0; count >= i; i++) {
//     count[i] * price - money;
//   }
//   return totalPrice;
// }

function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  return money < totalPrice ? Math.abs(money - totalPrice) : 0;
}
