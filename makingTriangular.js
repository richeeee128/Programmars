/** 중. Making **Triangular**
첫째 줄에 정수 n이 주어진다. **(0≤n≤100)**
n줄 만큼 ‘*’로 이루어진 삼각형을 출력한다.
최상단의 별은 1개이며, 모든 줄의 별의 갯수는 홀수이다. */

function solution(star) {
  let tree = '';
  for (let i = 0; i <= star; i++) {
    //공백을 만들어 왼쪽에 쏠려있는 트리를 가운데로 밀어주는 역할을 한다
    for (let blank = 0; blank < star - i; blank++) {
      tree += ' ';
    }
    //원하는 만큼 별을 찍어준다
    for (let j = 0; j < i * 2 - 1; j++) {
      tree += '*';
    }
    //문자열에서 줄바꿈을 의미한다
    tree += '\n';
  }
  console.log(tree);
}
let star = 9;
solution(star);
