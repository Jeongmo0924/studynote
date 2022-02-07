// const data = [10, 20, 30, 40, 50];
// let sum = 0;
// let avg = 0;

// for(let i = 0; i < data.length; i++) {
//     sum += data[i];
// }
// avg = sum / data.length;
// console.log(sum);
// console.log(avg);


// const data = [ 3, 66 ,213, 6, 12, 5125, 2312, 5254, 16236];

// let a = data[0];

// for(let i = 1; i < data.length; i++) {
//     if(a < data[i]) {
//         a = data[i];
//     }
// }
// console.log(a);

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// for(let i = 0; i < parseInt(data.length / 2); i++) {
//     let tmp = data[i];
//     data[i] = data[data.length - i - 1];
//     data[data.length - i - 1] = tmp;
// }
// console.log(data);


// const data = [12, 234, 126312, 43573, 12461, 58646, 1242346, 4574568, 5684568, 31543, 3453745, 867586, 256456];
// for(let i = 0; i < data.length - 1; i++){
//     for(let j = i + 1; j < data.length; j++) {
//         if( data[i] < data[j]) {
//             let tmp = data[i];
//             data[i] = data[j];
//             data[j] = tmp;
//         }
//     }
// }

// console.log(data);

// const grade = [
//     ["철수", 92, 81, 76],
//     ["영희", 72, 85, 84],
//     ["민혁", 80, 86, 98]
// ];

// let totalSum = 0;

// for(let i = 0; i < grade.length; i++) {
//     let sum = 0;
//     for(let j = 1; j < grade[i].length; j++){
//         sum += grade[i][j];
//         totalSum += grade[i][j];
//     }
//     let avg = sum / grade.length;
//     console.log("%s의 총점은 %d이고 평균은 %d이다.", grade[i][0], sum, avg.toFixed(2));
// }
// console.log("모든 학생의 총점은 %d이다.", totalSum);

let arr = new Array(5);
for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(7);
}
let date = 1;

for (let i = 0; i < arr.length; i++){
    let march = "";
    for(let j = 0; j < arr[i].length; j++) {
        if ( i == 0 && j < 2 || date > 31) {
            march += "\t";
        } else {
            march += date++
            march += "\t";
        }
    }console.log(march);
}