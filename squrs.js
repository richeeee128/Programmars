// var sizes = [
//   [14, 4],
//   [19, 6],
//   [6, 16],
//   [18, 7],
//   [7, 11],
// ];
// // 정렬을 한 뒤
// // [0] 가장 작은 큰 = width
// // [1] 가장 작은 큰 = height
// // width * height = 최소 직사각형
// console.log(sizes);
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  for (i = 0; i < sizes.length; i++) {
    const [width, height] = sizes[i];
    maxWidth = Math.max(maxWidth, Math.max(maxWidth, width));
    maxHeight = Math.max(maxHeight, Math.max(maxHeight, height));
  }

  return maxWidth * maxHeight;
}
console.log(solution(sizes));
//지갑 크기 정렬
//

// function solution(sizes) {
//   let maxW = 0;
//   let maxH = 0;

//     const [width, height] = sizes[i];
//     maxW = Math.max(maxW, Math.max(width, height));
//     maxH = Math.max(maxH, Math.min(width, height));

//   return maxW * maxH;
// }

// const sizes = [
//   [14, 4],
//   [19, 6],
//   [6, 16],
//   [18, 7],
//   [7, 11],
// ];

// console.log(solution(sizes));
function solution(sizes) {
  sizes.sort((a, b) => {
    const areaA = a[0] * a[1];
    const areaB = b[0] * b[1];
    return areaA + areaB;
  });

  const minWidth = sizes[0][0];
  const minHeight = sizes[0][1];
  return minWidth * minHeight;
}

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];

console.log(solution(sizes));
