/** 2022 - 02 - 02 복습 */


/** 연습1.
2022년2월 달력 만들기
*/

console.group("###### 연습 1. 2022년 2월 달력 만들기");
let array = new Array(6);

for(let i = 0; i < array.length; i++) {
    array[i] = new Array(7);
}

console.log(array);

let date = 1;

for(let i = 0; i < array.length; i++) {
    for(let j=0; j<array[i].length; j++) {
        if(i == 0 && j < 2 || date > 28) {
            array[i][j] = 0;
        } else {
            array[i][j] = date++;
        }
    }
}

console.log(array);



for(let i = 0; i < array.length; i++) {
    let month = "";
    for(let j = 0; j<array[i].length; j++){
        if(array[i][j] == 0){
            month += "\t";
        }else {
            month += array[i][j] + "\t";
        }
    }
    console.log(month);
}

console.groupEnd();

/** 별찍기 */

console.group("###### 별찍기");

for(let i = 0; i < 10; i++){
    let star = "";
    for(let j = 0; j < 10; j++) {
        if(i >= j){
            star += "*";
        } 
    }
    console.log(star);
}

for(let i = 0; i < 10; i++){
    let star2 = "";
    for(let j = 0; j < 10 - i; j++){
        star2 += "*";
    }
    console.log(star2);
}

console.groupEnd();

/** 1부터 300까지의 숫자 중 3과 7의 공배수 */

console.group("###### 1부터 300까지의 숫자 중 3과 7의 공배수");
let gbs = "";
for(i=1; i < 301; i++) {
    if( i % 3 == 0 && i % 7 == 0){
        gbs += i + " ";
    }
}

console.log(gbs)
console.groupEnd();

//** 1부터 3000까지의 짝수의 합, 홀수의 합 */

console.group("###### 1부터 3000까지의 짝수의 합, 홀수의 합");
let evenSum = 0;
let oddSum = 0;

for (let i = 1; i < 3001; i++){
    if (i % 2 == 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}

console.log("짝수의 합 = " + evenSum);
console.log("홀수의 합 = " + oddSum);
console.groupEnd();

//** 구구단 */

console.group("###### for문 구구단 1~ 9단");
for( i = 2; i < 10; i++){
    console.log("구구단 %d단" , i);
    for ( j = 1; j < 10; j++){
        console.log("%d x %d = %d", i, j, i * j);
    }
}

console.groupEnd();
//** while문으로 구구단 */

console.group("###### while문으로 구구단 6단");
let b = 6;
let a = 1;

while (a < 10) {
    console.log("%d x %d = %d", b, a, a * b);
    a++;
}

console.groupEnd();
//** switch문으로 힉점 구하기 */

console.group("###### switch문으로 학점 구하기");
let 자바 = "D";

switch (자바) {
    case 'A' : console.log( "A학점");
    break;
    case 'B' : console.log( "B학점");
    break;
    case 'C' : console.log( "C학점");
    break;
    case 'D' : console.log( "D학점");
    break;
    case 'F' : console.log( "F학점");
    break;
    default : console.log("잘못된 학점입니다.");    
}

switch (자바) {
    case 'A' :
    case 'B' :
    case 'C' : console.log( "Pass");
               break;
    default : console.log("NonPass");    
    break;
}

console.groupEnd();


/** 헷갈렸던 달력 만들기 재복습 2022년 3월 */

console.group("###### 헷갈렸던 달력 만들기 재복습 3월 달력");

let march = new Array(5);  // 5개의 빈 인벤토리를 가진 열 생성
let marchDate = 1;

// 5개의 빈 인벤토리마다 각각 7개의 빈 인벤토리를 가진 행 생성
for(let i = 0; i < march.length; i++) {
        march[i] = new Array(7)
}

console.log(march);

// 0열 중 0,1행 그리고 marchDate가 31보다 큰 경우를 0으로 설정한 뒤 marchDate에 1씩 더함
for(let i = 0; i < march.length; i++) {
    for(let j = 0; j < march[i].length; j++){
        if(i==0 && j < 2 || marchDate > 31){
            march[i][j] = 0;
        } else {
            march[i][j] = marchDate++;
        }
    }
}

console.log(march);

// 새로운 변수를 만들고 그 변수에 각각의 인덱스를 배치시킴. 이 때 
// \t 를 사용하여 각 인덱스들 사이를 벌려놓음

for(let i = 0; i < march.length; i++){
    let march2 = "";
    for(let j= 0; j < march[i].length; j++) {
        if(march[i][j] == 0){
            march2 += "\t";
        } else {
            march2 += march[i][j] + "\t"
        }
    }
    console.log(march2);
}

console.groupEnd();

/** 별찍기 한 번 더 + 뇌절 */

console.group("###### 별찍기 한 번 더 + 뇌절까지");

for(let i = 0; i < 10; i++){
    let star = "";
    for (let j = 0; j < i + 1; j++){
        star += "*";
    }console.log(star);
}

for(let i = 0; i < 10; i++){
    let star = "";
    for (let j = 0; j < 10 - i; j++){
        star += "*";
    }console.log(star);
}

for(let i = 0; i < 10; i++){
    let star = "";
    for (let j = 0; j < 10 - i; j++){
        star += " ";
    } for(let k = 1; k < i + 1; k++) {
        star += "*";
    }
    console.log(star);
}

for(let i = 0; i < 10; i++){
    let star = "";
    for (let j = 0; j < i + 1; j++){
        star += " ";
    } for(let k = 1; k < 10 - i; k++) {
        star += "*";
    } 
    console.log(star);
}

for(let i = 0; i < 10; i++){
    let star = "";
    for (let j = 0; j < 10 - i; j++){
        star += " ";
    } for(let k = 1; k < i + 1; k++) {
        star += "*";
    } for (let l = 0; l < i + 1; l++){
        star += "*";
    } 
    console.log(star);
}

for(let i = 0; i < 10; i++){
    let star = " ";
    for (let j = 0; j < i + 1; j++){
        star += " ";
    } for(let k = 1; k < 10 - i; k++) {
        star += "*";
    } for (let l = 0; l < 10 - i; l++){
        star += "*";
    } 
    console.log(star);
}

console.groupEnd();