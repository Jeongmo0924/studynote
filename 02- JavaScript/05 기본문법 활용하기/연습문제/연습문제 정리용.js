// for(let i = 9; i > 0; i -= 2){
//     console.log(i);
// }


// let i = 9;
// while (i > 0) {
//     console.log(i);
//     i -= 2;
// }

// let sum = 0;

// for(let i = 1; i < 20; i++){
//     if(i % 2 == 0 || i % 3 ==0){
//         sum += i;
//     }
// }

// console.log(sum);

// let sum = 0;
// for(let i = 1; i < 7; i++){
//     for(let j = 1; j < 7; j++){
//         if(i + j == 6) {
//             console.log("[%d, %d]", i, j);
//             sum++;
//         }
//     }
// } console.log("경우의 수는 %d개 입니다.", sum);

// for(let i = 0; i < 4; i++){
//     let str = "";
//     for(let j = i; j < i + 4; j++){
//         str += j + " ";
//     } console.log(str);
// }


// for (let i = 0; i < 4; i++) {
//     let str = "";   
//     for (let j=0; j<4; j++) {
//         str += i + j;

//         if (j + 1 < 4) {
//             str += " ";
//         }
//     }console.log(str);
// }


// for(let i = 1; i < 8; i++) {
//     let num = "";
//     for ( let j = 1; j < 1 + i; j++){
//         num += j;
//     }console.log(num);
// }

let number = 2;

// 1 -> 3,5,7,9
// 2 -> 2,4,6,8
// 

// let start = number == 1 ? 2 : 3;
// for(let i = start; i < 10; i += 2){
//     console.group("%d단", i);
//     for (let j = 1; j < 10; j++){
//         console.log("%d x %d = %d", i, j, i*j);
//     }console.groupEnd()
// }

for(let i = 4 - number; i < 10; i += 2) {
    console.group("%d단",i);
    for(let j = 1; j < 10; j++){
        console.log("%d x %d = %d",i,j,i*j);
    }console.groupEnd();
}