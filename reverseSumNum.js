// 하. 자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "`5+4+3+2+1=15`" 라는 문자열을 리턴합니다.
// 제한 조건
// - N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
  let num = String(n).split(''); //넘버인 n을 스트링으로 만들어서 한 자리씩 자름 // ['7','1','8','2','5','3']
  let answer = num.reverse(); // 배열로 만들어진 수를 뒤집음 ['3','5','2','8','1','7']
  let sum = answer.reduce((answer, value) => Number(answer) + Number(value), 0); // 뒤집어진 수들을 합침 answer가 배열이었기 때문에 숫자로 만들어줘야함 만들지 않으면 0(초기값)352817 이라는 문자열이 반환됨
  return answer.join('+') + '=' + String(sum); //조인으로 배열의 모든 요소들을 연결한 하나의 문자열을 반환. 숫자였던 sum을 문자열로 바꿔줌
}
solution();
console.log(solution(718253));
