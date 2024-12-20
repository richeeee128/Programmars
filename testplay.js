//결국 아무거나 했을 떄 0의 개수를 세어서 결과값이 나오게 만든다는 거잖아
// let arr1 = [0, 1, 0, 0];
// let counter = 0; // 입력받을 배를 세는 변수
// function solution(arr1) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] === 0) {
//       counter++; // 배의 개수 증가
//     }
//   }
//   switch (
//     counter //배의 개수에 따라
//   ) {
//     case 0:
//       return '윷'; //0개인 경우
//     case 1:
//       return '도'; //1개인 경우
//     case 2:
//       return '개'; //2개인 경우
//     case 3:
//       return '걸'; //3개인 경우
//     case 4:
//       return '모'; //4개인 경우
//   }
//   return counter;
// }
// console.log(solution(arr1));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
  return numbers.reduce((prev, value) => (prev += value / numbers.length), 0);
}
solution();
console.log(solution(numbers));

// let n = 10;
// let index = [];
// function solution(n) {
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       index.push(i);
//     }
//   }
//   return (answer = index.reduce((prev, value) => (prev += value)));
// }
// solution(n);
// console.log(answer);

// let strlist = ['We', 'are', 'the', 'world!'];
// function solution(strlist) {
//   for (const   of strlist) {

//   }
// }

// console.log(answer);

function solution(star) {
  let output = ''; //빈문자열로 초기화

  for (let i = 0; i < star; i++) {
    //열심히 별을 찍기 위해서 돌림 트리의 높이인(9)를 부르면 됨
    for (let blank = 0; blank < star - i - 1; blank++) {
      //밖에 공백이 자리를 만듦 별이 하나씩 줄어들면서 크게 보면 절반의 사각형을 만드는 셈으로 별을 가운데로 몰 수 있게 함
      output += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      //원래 있는 숫자에 2를 곱하고 별을 찍음
      output += '*';
    }
    output += '\n'; //한 줄 하고 다음 줄, 한 줄하고 다음 줄이 나오기 위한 수
  }
  console.log(output);
}
let star = 9;
solution(star);
