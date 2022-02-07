// const check_list = [true, false, false, true, false];

// for (let i = 0; i < check_list.length; i++){
//     check_list[i] = !check_list[i];
//     }
// console.log(check_list);

// const grade = [75, 82, 91];
// let sum = 0;
// for(let i = 0; i < grade.length; i++){
//     sum += grade[i];
// }
// let avg = sum / grade.length;
// console.log("위 학생의 총점은 %d점이고, 평균은 %d점 입니다.", sum, avg.toFixed(2));

// const time = [7, 5, 5, 5, 5, 10, 7];
// let money = 0;
// for(let i = 0; i < time.length; i++){
//     if(i < 4){
//         money += time[i] * 4500;
//     } else {
//         money += time[i] * 5200;
//     }
// }
// console.log("위 학생의 일주일간 총 급여는 %d원 입니다.", money);


// const time = [7, 5, 5, 5, 5, 10, 7];
// let money = 0;
// for(let i = 0; i< time.length; i++){
//     money += time[i] * (i < 4 ? 4500 : 5200);
// }
// console.log("위 학생의 일주일간 총 급여는 %d원 입니다.", money);


// let price = [38000, 20000, 17900, 17900];
// let qty = [6, 4, 3, 5];
// let money = 0;

// for(let i = 0; i < price.length; i++){
//         money += price[i] * qty[i];
// }
// console.log("전체 결제 금액은 %d원 입니다.", money);

// let exp = price[0] * qty[0];

// for(let i = 0; i< price.length; i++){
//     if(exp < price[i] * qty[i]){
//         exp = price[i] * qty[i];
//     }
// }
// console.log("가장 비싼 항목의 금액은 %d원 입니다.", exp);

// let freeShip = 0;

// for(let i = 0; i < price.length; i++){
//     if(price[i] * qty[i] >= 80000){
//         freeShip++;
//     }
// }
// console.log("무료배송건은 총 %d건 입니다.", freeShip);

// const price = [209000, 109000, 119000, 109000, 94000];

// for(let i = 0; i < price.length - 1; i++){
//     for(let j = i + 1; j < price.length; j++){
//         if(price[i] > price[j]){
//             let tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }
// console.log(price);


// const arr = [5, 3, 2, 8, 9];

// for(let i = 0; i < parseInt(arr.length/2); i++){
//     let tmp = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = tmp;
// }
// console.log(arr);


// const student = ['둘리', '도우너', '또치', '희동'];

// const grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98]
// ];

// let sum = 0;
// let avg = 0;

// for(let i = 0; i < grade.length; i++){
//     let personal_sum = 0;
//     for(let j = 0; j < grade[i].length; j++){
//         personal_sum += grade[i][j];
//         sum += grade[i][j]
//     }
//     let personal_avg = personal_sum / grade[i].length;
//     avg += personal_avg;
//     console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student[i], personal_sum, personal_avg.toFixed(2));
// }
// console.log("반 전체의 총점은 %d점이고 평균은 %d점 입니다.", sum, avg/student.length);

// const inven = [[500, 291], [320, 586], [100, 460], [120, 558], [92, 18], [30, 72]];
// let gold = 0;
// for(let i = 0; i < inven.length; i++){
//     gold += (inven[i][0] * 0.9) * inven[i][1];
// } 
// console.log("총 %dG", gold);

/**
자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 jumin을 아래와 같이 정의하시오.

```js
ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]
```

정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현해보자. 판별 방법은 아래와 같다.

- 기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다. 가중치는 주민등록번호의 순서에 따라 `2 3 4 5 6 7 8 9 2 3 4 5` 이다.
- 먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
- 합한 값을 11로 나눈 나머지 값을 구한다.
- 11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
- 나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.
*/

const ssn = [0, 1, 1, 2, 1, 3, 1, 0, 0, 0, 1, 2, 3];
let add = 2;
let sum = 0;
for(let i = 0; i < ssn.length - 1; i++){
    sum += ssn[i] * add++;
    if(add > 9) {
        add = 2;
    }
}

let rem = sum % 11;
let rem2 = (11 - rem) % 10;

console.log(rem2 % 10 == ssn[ssn.length - 1] ? "유효한 주민등록번호입니다." : "유효하지 않은 주민등록번호입니다.");