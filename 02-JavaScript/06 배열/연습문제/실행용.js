// // 문제 1.
// var check_list = [true, false, false, true, false];
// console.log("before --> " + check_list);

//     // codes here
// for (let i = 0; i < check_list.length; i++) {
//     if(check_list[i] == true) {
//         check_list[i] = false;
//     } else {
//         check_list[i] = true;
//     }
// }

// console.log("after --> " + check_list);


// // 문제2.

// var grade = [75, 82, 91];   // 성적표 배열
// var sum = 0, avg = 0;      // 총점과 평균점수 변수 생성

// // 총점 구하기
// for (let i = 0; i < grade.length; i++) {
//     sum += grade[i];
// }
// // 평균 구하기
// avg = sum / grade.length;

// // arr의 값을 소수점 둘째 자리까지로 제한한다.
// avg = avg.toFixed(2);
// console.log("총점: " + sum + "점, 평균점수: " + avg + "점");


// // 문제3.

// var time = [ 7, 5, 5, 5, 5, 10, 7 ];
// var money = 0;

// for (let i = 0; i < time.length; i++) {
//     if (i > 3) {
//         money += time[i] * 5200;
//     } else money += time[i] * 4500;
// }

// console.log("1주일간의 전체 급여: " + money + "원");



// // 문제 4.

// var price = [38000, 20000, 17900, 17900];
// var qty = [6, 4, 3, 5];
// var money = 0;
// let eachPrice = new Array (4);

// for(let i = 0; i < 4; i++) {
//     money2 = price[i] * qty[i];
//     money += money2;
//     eachPrice[i] = money2;
// }
    
// console.log("전체 결제 금액: " + money + "원");

// let max = eachPrice[0];
// for(let i = 1; i < 4; i++) {
//     if (max < eachPrice[i]) {
//         max = eachPrice[i];
//     }
// }

// console.log("가장 높은 상품 금액: " + max + "원");


// let freeShip = 0;

// for (let i = 0; i < 4; i++) {
//     if (eachPrice[i] >= 80000) {
//         freeShip++;
//     }
// }

// console.log("무료 배송 항목: " + freeShip + "건");



// /** 문제 7 */

// var price = [209000, 109000, 119000, 109000, 94000];
// console.log("상품가격 --> " + price);

// for (var i = 0; i < price.length - 1; i++) {
//     for (var j = i + 1; j<price.length; j++) {
//         if (price[i] > price[j]) {
//             var tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }

// console.log("낮은가격순 --> " + price);

// // 문제 8

// var arr = [5, 3, 2, 8, 9];
// console.log('before --> ' + arr);

// for (var i = 0; i < parseInt(arr.length / 2); i++) {
//     var tmp = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = tmp;
// }

// console.log('after --> ' + arr);

// /** 문제 9. */

// /** 학생 이름 배열 */
// var student = ['둘리', '도우너', '또치', '희동'];

// /** 성적표 배열*/
// var grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98]
// ];

// // 총점과 평균 점수를 저장할 변수
// var sum = 0, avg = 0;

// /** 총점과 평균 구하기 */

// for (let i = 0; i < 4; i++){
//     var sum2 = 0, avg2 = 0;
//     for(let j = 0; j<3; j++) {
//         sum2 += grade[i][j];
//         avg2 = sum2 / 3;
//     }
//     sum += sum2;
//     avg += avg2;
//     console.log(student[i] + ' 총점: ' + sum2 + "점, 평균: " + avg2.toFixed(2) + "점");
// }

// console.log("반 평균: " + avg / 4 + "점");

// /** 문제 11 */

// let inventory = [ [500, 291], [320, 586], [100, 460], [120, 558], [92, 18], [30, 72]];
// let gold = 0;

// for(let i = 0; i < inventory.length; i++) {
//     gold += (inventory[i][0] * inventory[i][1]) * 0.9;
// }

// console.log("아이템 총 판매가격: " + gold + "G");


/** 문제 12 */

// 자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 jumin을 아래와 같이 정의하시오.

// ```js
// ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]
// ```

// 정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현해보자. 판별 방법은 아래와 같다.

// - 기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다. 가중치는 주민등록번호의 순서에 따라 `2 3 4 5 6 7 8 9 2 3 4 5` 이다.
// - 먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
// - 합한 값을 11로 나눈 나머지 값을 구한다.
// - 11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
// - 나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.

let ssn = [0, 1, 1, 2, 1, 3, 1, 0, 0, 0, 1, 2, 3];
let weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5 ];
let sum = 0;

for(let i = 0; i<ssn.length - 1; i++) {
    let tmp = 0;
    tmp = ssn[i] * weight[i];
    sum += tmp;
}

// let a = sum % 11;
// let b = (11 - a) % 10
// let c = (b - ssn[12]) % 10;

let c = (((11 - (sum % 11)) % 10) - ssn[12]) % 10;

if (c == 0) {
    console.log("유효한 주민등록번호입니다.");
} else {
    console.log("유효하지 않은 주민등록번호 입니다.");
}