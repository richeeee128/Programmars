function solution(x) {
  //1. 쪼개서 각자 더한 값
  let answer = 0;
  const sum = String(x).split('');
  console.log(sum);
  //2. 더한 값으로 원래 숫자가 나누어 지는지
  for (i = 0; i < sum.length; i++) {
    answer += Number(sum[i]);
    console.log(answer);
  }
  //3. x = 하샤드 수 ? 맞다 true : 아니다 false
  return x % answer === 0 ? true : false;
}
solution(12);
