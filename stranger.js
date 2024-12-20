// function solution(s) {
//   let answer = [];
//   let result = s.split('');
//   let sum = [];
//   for (i = 0; i < s.length; i++) {
//     for (j = 0; j < s.length; j++) {
//       if (i % 2 === 0) {
//         sum += result[i][j].toUpperCase();
//       } else {
//         sum += result[i][j].toLowerCase();
//       }
//     }
//     answer.push(sum);
//     return answer;
//   }
// }

function solution(s) {
  let answer = '';
  let result = s.split(' '); //아니 이게... 띄워쓰기 하나로 이렇게 된다는 말이냐고 진짜 짜증나!!!

  for (i = 0; i < result.length; i++) {
    for (j = 0; j < result[i].length; j++) {
      if (j % 2 === 0) {
        answer += result[i][j].toUpperCase();
      } else {
        answer += result[i][j].toLowerCase();
      }
    }
    if (i < result.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}
console.log(solution('try hello world'));
