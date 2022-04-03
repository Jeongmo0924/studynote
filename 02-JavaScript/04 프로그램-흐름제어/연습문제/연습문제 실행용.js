// // const 수학 = "B";

// // switch (수학) {
// //     case 'A':
// //     case 'B':
// //     case 'C':
// //         console.log("이 과목을 Pass 했습니다.");
// //         break;
// //     default:
// //         console.log("이 과목을 Pass하지 못했습니다.");
// //         break;
// // }

// const 수학 = "B";

// if (수학 == "A") {
//     console.log("이 과목을 Pass 했습니다.");
// } else if (수학 == "B") {
//     console.log("이 과목을 Pass 했습니다.");
// } else if (수학 == "C") {
//     console.log("이 과목을 Pass 했습니다.");
// } else {
//     console.log("이 과목을 Pass하지 못했습니다.");
// }

// let x = 2;
// let i = 1;

// while (i <= 10){
//     console.log("이진수 %d개는 %d개의 정보를 표시가능", i, x);
//     x = x * 2;
//     i++;
// }


// const 수학 = "B";

// if (수학 == "A" || 수학 == "B" || 수학 == "C") {
//     console.log("이 과목을 Pass 했습니다.");
// } else {
//     console.log("이 과목을 Pass하지 못했습니다.");
// }



// let x = 2;
// let i = 1;

// while (i <= 10){
//     console.log("이진수 %d개는 %d개의 정보를 표시가능", i, x);
//     x = x * 2;
//     i++;
// 

for (let x = 2, i = 1; i <= 10; i++, x = x * 2) {
    console.log("이진수 %d개는 %d개의 정보를 표시가능", i, x);
}