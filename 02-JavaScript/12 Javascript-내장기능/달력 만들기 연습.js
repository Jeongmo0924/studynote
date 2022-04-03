// const birthday = new Date(2022, 6, 24);
// console.log(birthday.toLocaleString());
// birthday.setDate(1);
// const startDay = birthday.getDay();
// console.log(startDay);

// const m = birthday.getMonth();
// birthday.setMonth(m+1);
// birthday.setDate(0);
// const lastDate = birthday.getDate();
// console.log(lastDate);

// const a = new Array(6);
// for(let i = 0; i < a.length; i++){
//     a[i] = new Array(7);
// }
// let counter = 1;

// for(let i = 0; i<a.length; i++){
//     for(let j = 0; j < a[i].length; j++){
//         if(i==0 && j<startDay || counter > lastDate){
//             a[i][j] = 0;
//         } else {
//             a[i][j] = counter++;
//         }
//     }
// }

// for(let i = 0; i < a.length; i++){
//     let str = "";
//     for(let j = 0; j < a[i].length; j++){
//         str += a[i][j] == 0 ? " \t" : (a[i][j] + " \t");
//     } console.log(str);
// }



const today = new Date();
today.setDate(1);
const first = today.getDay();

const lastDay = new Date();
const m = lastDay.getMonth();
lastDay.setMonth(m+1);
lastDay.setDate(0);
const last = lastDay.getDate();

const data = new Array(6);
for(let i = 0; i < data.length; i++){
    data[i] = new Array(7);
}
let counter = 1;


for(let i = 0; i < data.length; i++){
    let str = "";
    for(let j = 0; j < data[i].length; j++){
        if(i == 0 && j < first || counter > last){
            str += " \t";
        } else {
            str += counter + " \t";
            counter++
        }
    }console.log(str);
}
