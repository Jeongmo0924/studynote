/** 구구단 13단 출력하기 */
// y가 1부터 14보다 작은 동안 1씩 증가하면서 반복하므로 반복의 범위는 1~13
// 반복문이 수행되는 동안 y값에 13을 곱해서 z값을 생성

// let y = 1;

// while (y <= 13) {
//   const z = 13 * y;
//   console.log("13 * %d = %d", y, z);
//   y++;
// }

// let i = 7;
// let a = 0;

// while (i + 4 <= 28) {
//   if (6 < i && i <= 11) {
//     let a = i;
//     console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", a); // 이러면 여기 들어가는 i는 7, 10
//   } else if (11 < i && i <= 18) {
//     let a = i + 2;
//     console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", a); // 여기는 i = 13, 16
//   } else if (18 < i && i <= 25) {
//     a = i + 4;
//     console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", a); // 여기는 i = 19, 22
//   } else {
//   }
//   i += 3;
// }

// console.log(i);
// console.log(a);

let i = 7;
let a = 0;

while ( i <= 24) {
  if ( 7<= i && i <= 11) {
    console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", i);
  } else if ( 11 < i && i <= 16) {
    console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", i + 2);
  } else if ( 16 < i && i <= 21) {
    console.log("c조의 2월 대면 날짜는 2월 %d일 입니다.", i + 4);
  } else {
    console.log("c조의 2월 대면 날짜는 2월 28일 입니다.");
  } i += 3;
} 