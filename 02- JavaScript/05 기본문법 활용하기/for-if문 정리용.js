// let evenSum = 0;
// let oddSum = 0;

// for(let i = 1; i < 101; i++) {
//     if(i % 2 == 0) {
//         evenSum += i;
//     } else {
//         oddSum += i;
//     }
// }
// console.log("짝수의 합 : " + evenSum);
// console.log("홀수의 합 : " + oddSum);

// for(let i = 1; i < 101; i++) {
//     if( i % 3 == 0 && i % 7 ==0) {
//         console.log("3과 7의 공배수 : %d", i);
//     }
// }

let str = "";
for(let i = 1; i < 10; i++) {
    if ( i < 9 ){
        str += i + ",";
    } else { str += i}
}
console.log(str);