function solution(angle) {
  if (0 < angle && angle < 90) {
    return (answer = 1);
  } else if (angle == 90) {
    return (answer = 2);
  } else if (90 < angle && angle < 180) {
    return (answer = 3);
  } else if (angle == 180) return (answer = 4);
}
