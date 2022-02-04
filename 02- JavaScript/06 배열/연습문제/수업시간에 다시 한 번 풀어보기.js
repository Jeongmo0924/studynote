/** 1번 문제 */

let check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

// for(let i = 0; i < check_list.length; i++) {
//     if(check_list[i] == true){
//         check_list[i] = false;
//     } else {check_list[i] = true;}
// }

// 간단하게

for(let i = 0; i < check_list.length; i++){
    check_list[i] = !check_list[i];
}

console.log("after --> " + check_list);


/** 2번 문제 */

let grade = [75, 82, 91];
let sum = 0, avg = 0;

for(let i = 0; i < 3; i++) {
    sum += grade[i];
    avg = sum / grade.length;
}

// 간단하게 만들기
// for(const p of grade) {
//     sum += p;
// }

// avg = sum / grade.length;
// avg == avg.toFixed(2);

console.log("총점 : %d, 평균점수 : %d", sum, avg.toFixed(2));

/** 3번 문제 */

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

for (let i = 0; i < time.length; i++) {
    money += time[i] * ((i<4) ? 4500 : 5200);
}

console.log("1주일간의 전체 급여: " + money + "원");

/** 4번 문제 */

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let money2 = 0;

for(let i = 0; i < price.length; i++){
    money2 += price[i] * qty[i];
}

console.log("전체 결제 금액: " + money2 + "원");

/** 5번 문제 */

let money3 = price[0] * qty[0];

for(let i = 1; i < price.length; i++){
    money2 = price[i] * qty[i];
    if (money2 > money3) {
        money3 = money2;
    }
}

console.log("가장 높은 상품 금액: " + money3 + "원");

/** 6번 문제 */

let freeShip = 0;

for(let i = 0; i < price.length; i++){
    money2 += price[i] * qty[i];
    if(price[i] * qty[i] >= 80000){
        freeShip++
    }
}

console.log("무료배송 항목: " + freeShip + "건");

/** 7번 문제 */

let price2 = [209000, 109000, 119000, 109000, 94000];
console.log("상품 가격 --> " + price2);

for ( let i = 0; i < price2.length - 1; i++) {
    for( let j = i+1; j < price2.length; j++) {
        if (price2[i] > price2[j]) {
            let tmp = price2[i];
            price2[i] = price2[j];
            price2[j] = tmp;
        }
    }
}

console.log("낮은 가격순 --> " + price2);

/** 8번 문제 */
let arr= [ 5, 3, 2, 8, 9];
console.log("before --> " + arr);

for (let i = 0; i < parseInt(arr.length / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
}

console.log("after --> " + arr);

/** 9번 문제 */
let student = ['둘리', '도우너', '또치', '희동'];
let grade2 = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];

let sum2 = 0;
let avg2 = 0;

for (let i = 0; i < student.length; i++) {
    let sum3 = 0;
    for (let j = 0; j < grade2[i].length; j++){
        sum3 += grade2[i][j];
        sum2 += sum3;
    }
    avg2 = sum3 / 3;
    
    console.log(student[i] + ' 총점: ' + sum3 + "점, 평균: " + avg2.toFixed(2) + "점");
}
console.log("반평균 : " + sum2/12);

