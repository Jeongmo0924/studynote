// for(let i = 2; i < 10; i++){
//     console.group("구구단 %d단", i);
//     for(let j = 1; j < 10; j++) {
//         console.log("%d x %d = %d", i, j, i*j);
//     }
//     console.groupEnd();
// }

// for(let i = 0; i < 5; i++) {
//     console.group("i에 대한 반복수행 시작 >> i = " + i);
//     for (let j = 0; j < i + 1; j++){
//         console.log("i = %d, j = %d", i, j);
//     }
//     console.groupEnd();
// }

// for(let i = 0; i < 10; i++) {
//     let star = "";
//     for(let j = 0; j < i + 1; j++) {
//         star += "*";
//     } console.log(star);
// }

for(let i = 0; i < 10; i++) {
    let star = "";
    for(let j = 0; j < 10-i; j++) {
        star += "*";
    } console.log(star);
}