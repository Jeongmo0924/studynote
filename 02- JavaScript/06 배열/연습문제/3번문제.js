let time = [7, 5, 5, 5, 5, 10, 7];
let money = 0;

// for(let i = 0; i < time.length; i++) {
//     if(i < 4) {
//         money += time[i] * 4500;
//     } else { 
//         money += time[i] * 5200;}
// }

// 간단하게

// for(let i = 0; i < time.length; i++){ 
//     let x = (i<4) ? 4500 : 5200;
//     money += time[i] * x;   
// }

// 더 간단하게

for(let i = 0; i < time.length; i++){ 
    money += time[i] * ((i < 4) ? 4500 : 5200);
}

console.log(money);