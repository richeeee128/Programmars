//1 번 삽질
// function solution(x, n) {
//   var answer = [];
//   answer.forEach(function(num){
//    answer.push(num);
//   })

// }//x, x+x (x+x)+x (x+x+x)+x...개

//2 번 삽질
// function solution(x, n) {
//     var answer = [];
//     for(let x = 0; x<n.length; x++){
//         answer.push(n.length[x])
//     }
//     return
// }//x, x+x (x+x)+x (x+x+x)+x...개

function solution(x, n) {
  var answer = [];
  const num = 0;
  for (i = 0; i < n; i++) {
    num += x;
    answer.push(num);
  }
  return;
} //x, x+x (x+x)+x (x+x+x)+x...개
