// let i = 0;
// let str = "";
// while (i < 5) {
//     str += "*";
//     console.log(str);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5 - i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }

// const names = ["재석", "민영", "종민", "광수", "승기", "새정"];
// const points = [82, 91, 54, 62, 88, 90];

// for (let i = 0; i < points.length - 1; i++) {
//     for (let j = i + 1; j < points.length; j++) {
//         if (points[i] < points[j]) {
//             let tmp = points[i];
//             points[i] = points[j];
//             points[j] = tmp;
//             let tmp2 = names[i];
//             names[i] = names[j];
//             names[j] = tmp2;
//         }
//     }
// }

// console.log(points);
// console.log(names);

// let str2 = "Life is too short, You need Javascript";
// let count = 0;

// while (true) {
//     let a = str2.indexOf("e");
//     if (a < 0) {
//         break;
//     } else {
//         str2 = str2.substring(a+1);
//         count++;
//     }
// }

// console.log(count);

// let camera = [283890, 299990, 1317990, 535000, 227560, 465300, 300000, 1890630, 942670, 2898970];

// let count=0;
// for(let i = 0; i < camera.length; i++){
//     if(camera[i] < 1500000){
//         count++;
//     }
// }

// console.log(count);

let a = 100;
let count = 0;
console.log(parseInt(1 * 0.6));

// let b = parseInt(a * 0.6);
// a = b;
// console.log(a);

while (true) {
    let b = 0;
    b = parseInt(a * 0.6);
    if (b == 0) {
        console.log(count + 1 + "번째 : " + b);
        break;
    } else {
        a = b;
        count++;
        console.log(count + "번째 : " + b);
    }
}

console.log("총 " + count + "번 튀어오름");

let count2 = 0;

let ss = "18";
console.log(ss.indexOf("8"));
console.log(ss.substring(2));

for (let i = 1; i < 10001; i++) {
    let str = "" + i;
    for(const k of str){
        if(k == 8){
            count2++;
        }
    }
}

console.log(count2);