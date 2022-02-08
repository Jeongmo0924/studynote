// function printStar(max) {
//     for(let i = 0; i < max; i++) {
//         let str = "";
//         for(let j = 0; j < i + 1; j++){
//             str += "*";
//         }console.log(str);
//     }
// }

// printStar(5);


// 문제1번을 재귀함수 기법으로 다시 구현해 보세요.

// let str = "";

// function printStar(max, current=1) {
//     for(let i = 0; i < current; i++){
//         str += "*";
//     } 
//     current++;
//     if(current > max + 1){
//         return;
//     } else {
//         console.log(str);
//         printStar(max - 1);
//     }
// }
// printStar(5);



// let str = "";
// function printStar(max, current=1) {
//     str += "*";
//     if(current > max){
//         return;
//     } else {
//         console.log(str);
//         printStar(max, current+1);
//     }
// }

// printStar(5);



// // max는 최대 행 수, current는 현재 출력중인 행의 위치
let str = "";

function printRevStar(max, current=1) {
    if(current > max){
        return;
    } else {
        str = "";
        for(let i = 0; i < max - current + 1; i++){
        str += "*";
    }
    console.log(str);
    printRevStar(max, current + 1);
    }
}

printRevStar(5);

// 5, 1 - 5
// 5, 2 - 4
// 5, 3 - 3
// 5, 4 - 2
// 5, 5 - 1