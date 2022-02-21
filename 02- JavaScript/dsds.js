// const cal = new Array(6);

// for (let k of cal){
//     console.log(k);
//     k = 3;
//     console.log(k);
// }
// console.log(cal);



// const a = [3, 4];


// for(const k of a){
//     console.log(k);
// }

// for(const l in a){
//     console.log(l)
// }

// const b = [undefined, undefined];

// for(const o in b){
//     console.log(o);
// }

// const c = new Array(3);

// for(const p in c){
//     console.log(p);
// }


// for(const y in a){
//     a[y]++;
// }

// console.log(a);



// const arr = [undefined, undefined, undefined];

// for(const k in arr){
//     console.log(k);
// }


// const arr2 = new Array(6);

// // console.log(arr2.length);
// // console.log(arr2[2]);



// // for(const k in arr2){
// //     console.log(k);
// // }

// console.log(arr2);


// const num = 3;

// console.log(num % 2 == 0 ? "짝수" : "홀수");

// const year = 2022;
// let age = year - 1990 + 1;
// console.log("나는 %d세 입니다.", age);

// const age = 33;
// var year = 2022 - age + 1;
// console.log("나는 %d년도에 태어났습니다.", year);

// const numOfApples = 123;

// let extra = numOfApples % 10 == 0 ? 0 : 1;
// let basket = parseInt(numOfApples / 10) + extra;
// console.log(basket);

// const num = 456;
// let calculator = num - (num % 100);
// console.log(calculator);

// let i = 1;

// while(i < 10){
//     console.log("%d x %d = %d", 6, i, 6 * i);
//     i++;
// }


// let i = 1;
// let sum = 0;

// while(i < 101){
//     sum += i;
//     i++;
// }

// console.log(sum);

// for(let i = 1; i < 10; i++){
//     console.log("%d x %d = %d", 7, i, 7 * i);
// }

// let sum = 0;

// for(let i = 1; i < 1001; i++){
//     sum += i;
// }
// console.log(sum);



// const 수학 = "B";

// if(수학 == "A" || 수학 == "B" || 수학 == "C"){
//     console.log("이 과목을 Pass했습니다.");
// } else {
//     console.log("이 과목을 Pass하지 못했습니다.");
// }

// let num = 1;
// let a = 1;

// while(num < 11){
//     a *= 2;
//     num++;
// }

// console.log(a);

// let a = 1;

// for(let i = 1; i < 11; i++){
//     a *= 2;
// }

// console.log(a);

// let evenSum = 0;
// let oddSum = 0;

// for(let i = 1; i < 101; i++){
//     if(i % 2 == 0){
//         evenSum += i;
//     } else {
//         oddSum += i;
//     }
// }

// console.log(evenSum);
// console.log(oddSum);

// let str = "";

// for(let i = 1; i < 101; i++){
//     if(i % 3 == 0 && i % 7 ==0){
//         str += i + ' ';
//     }
// }

// console.log(str);

// let str = "";

// for(let i = 1; i < 10; i++){
//     str += i;
//     if(i < 9){
//         str += ", ";
//     }
// }
// console.log(str);


// for(let i = 2; i < 10; i++){
//     console.log("구구단 %d단 시작~!", i);
//     for(let j = 1; j < 10; j++){
//         console.log("%d x %d = %d", i, j, i*j);
//     }
// }

// for(let i = 9; i >= 0; i--){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// let i = 9;

// while(i >= 0){
//     if(i % 2 != 0){
//         console.log(i);
//     }
//     i--;
// }

// let sum = 0;

// for(let i = 1; i < 20; i++){
//     if(i % 2 == 0 || i % 3 == 0){
//         sum += i;
//         console.log(i);
//     }
// }
// console.log(sum);


// let sum = 0;

// for(let i = 1; i < 7; i++){
//     for(let j = 1; j < 7; j++){
//         const arr = [];
//         if(i + j == 6){
//             arr[0] = i, arr[1] = j
//             console.log(arr);
//             sum++;
//         }
//     }
// }
// console.log('경우의 수는 %d개 입니다.', sum);



// for(let i = 0; i < 4; i++){
//     let str = "";
//     for(let j = i; j < i + 4; j++){
//         str += j;
//         if(j < i+3){
//             str += " ";
//         }
//     }
//     console.log(str);
// }



// for(let i = 0; i < 7; i++){
//     let str = "";
//     for(let j = 1; j < i + 2; j++){
//         str += j;
//     }
//     console.log(str);
// }

// let number = 1;
// let start = number == 2 ? 2 : 3;

// for(let i = start; i < 10; i+= 2){
//     for(let j = 1; j < 10; j ++){
//         console.log("%d x %d = %d", i, j, i*j);
//     }
// }


// const data = [10, 20, 30, 40, 50];
// let sum = 0;

// for(let i = 0; i < data.length; i++){
//     sum += data[i];
// }
// console.log("총합 : %d, 평균 : %d", sum, sum/data.length);

// const arr = [1, 125, 5, 43, 1235, 125, 23, 125, 122335, 47456, 74569];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < parseInt(data.length/2); i++){
//     let tmp = data[i];
//     data[i] = data[data.length - i - 1];
//     data[data.length - i - 1] = tmp;
// }
// console.log(data);


// const arr = [1, 2, 5, 6, 61, 87, 21, 45, 125, 5467, 23, 12, 412];

// for(let i = 0; i < arr.length - 1; i++){
//     for( let j = i + 1; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//     }
// }

// console.log(arr);

// const point = [['철수', 92, 81, 76], ["영희", 72, 85, 84], ["민혁", 80, 86, 98]];
// let allSum = 0;

// for(let i = 0; i < point.length; i++){
//     let sum = 0;
//     for(let j = 1; j < point[i].length; j++){
//         sum += point[i][j];
//     }
//     allSum += sum;
//     console.log("%s의 총점은 %d이고, 평균은 %d입니다.", point[i][0], sum, (sum/(point[i].length - 1)).toFixed(2));
// }
// console.log("모든 학생의 총점은 %d점 입니다.", allSum);

// const arr = new Array(6);
// for(let i = 0; i < arr.length; i++){
//     arr[i] = new Array(7);
// }

// let count = 1;

// for(let i = 0; i < arr.length; i++){
//     let str = "";
//     for(let j = 0; j < arr[i].length; j++){
//         if(i == 0 && j < 2 || count > 31){
//             str += "\t";
//         } else {
//             str += count++ + "\t";
//         }
//     }console.log(str);
// }


// const check_list = [true, false, false, true, false];

// for(let i = 0; i < check_list.length; i++){
//     check_list[i] = !check_list[i]
// }
// console.log(check_list);


// const score = [75, 82, 91];
// let sum = 0;
// for(const k of score){
//     sum += k;
// }
// let avg = sum / score.length;
// console.log("총점 : %d, 평균 : %d", sum, avg.toFixed(2));


// const workTime = [7, 5, 5, 5, 5, 10, 7];
// let sum = 0;
// for(let i = 0; i < workTime.length; i++){
//     let mph = i > 3 ? 5200 : 4500;
//     sum += workTime[i] * mph;
// }

// console.log(sum);


// let price = [38000, 20000, 17900, 17900];
// let qty = [6, 4, 3, 5];
// let money = 0;

// for(let i = 0; i < price.length; i++){
//     money += price[i] * qty[i];
// }

// console.log(money);


// let price = [38000, 20000, 17900, 17900];
// let qty = [6, 4, 3, 5];
// let money = 0;
// let totalPrice = [];

// for(let i = 0; i < price.length; i++){
//     money += price[i] * qty[i];
//     totalPrice.push(price[i] * qty[i]);
// }

// let a = totalPrice[0];
// for(let i = 1; i < totalPrice.length; i++){
//     if(a < totalPrice[i]){
//         a = totalPrice[i];
//     }
// }

// let count = 0;
// for(const k of totalPrice){
//     if(k >= 80000){
//         count++;
//     }
// }
// console.log(count);

// const price = [209000, 109000, 119000, 109000, 94000];

// for(let i = 0; i < price.length-1; i++){
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

// const score = [
//     ['둘리', 78, 89, 96], 
//     ['도우너', 62, 77, 67], 
//     ['또치', 54, 90, 80], 
//     ['희동', 100, 99, 98]
// ];

// let totalAvg = 0;

// for(let i = 0; i < score.length; i++){
//     let sum = 0;
//     for(let j = 1; j < score[i].length; j++){
//         sum += score[i][j];
//         avg = sum/(score[i].length - 1)
//     }console.log("%s의 총점: %d, 평균: %d", score[i][0], sum, avg.toFixed(2));
//     totalAvg += avg;
// }

// console.log(totalAvg / score.length);


// const arr = [[500,291], [320,586], [100, 460], [120, 558], [92, 18], [30,72]];
// let gold = 0;
// for(let i = 0; i < arr.length; i++){
//     gold += arr[i][0] * arr[i][1] * 0.9;
// }
// console.log(gold);


// const ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];
// let sum = 0;

// for(let i = 0; i < 12; i++){
//     sum += i < 8 ? ssn[i] * (i + 2) : ssn[i] * (i - 6);
// }

// let a = sum % 11;
// let b = (11 - a) % 10;
// let c = b % 10;
// console.log(c == ssn[12] ? "유효한 주민번호" : "유효하지 않은 주민번호");


// const myJson = {}; // 빈 객체
// for(let i = 0; i < 10; i++) {
// 	const key = "value" + i;
// 	myJson[key] = i * 100;
// }
// console.log(myJson); 


// const bloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
// const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

// for(const k of bloodType){
//     result[k]++;
// }
// console.log(result);


// const exam = {
//     "철수": [89, 82, 79, 91],
//     "민영": [91, 95, 94, 89],
//     "남철": [65, 57, 71, 64],
//     "혜진": [82, 76, 81, 83]
// };

// // for(let k in exam){
// //     let sum = 0;
// //     for(const l of exam[k]){
// //         sum+= l;
// //     }
// //     let avg = sum / exam[k].length;
// //     console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", k, sum, avg.toFixed(2));
// // }

// let sum = 0;
// let studentCount = 0;

// for(let k in exam){
//     sum += exam[k][2];
//     studentCount++;
// }
// let avg = sum / studentCount;
// console.log(`모든 학생의 수학 총점은 ${sum}점 이고 평균은 ${avg}점 입니다`);


// const covid19 = [
//     {date: '0125', active: 426}, 
//     {date: '0126', active: 343}, 
//     {date: '0127', active: 547}, 
//     {date: '0128', active: 490}, 
//     {date: '0129', active: 460}, 
//     {date: '0130', active: 443}, 
//     {date: '0131', active: 338}, 
//     {date: '0201', active: 299}
// ];


// // let sum = 0;
// // for(const k of covid19){
// //     sum += k.active;
// // }
// // let avg = sum / covid19.length;
// // console.log(`누적 확진자 수 ${sum}` +  '\n' + `평균 확진자 수 ${avg}`);

// let a = covid19[0].active;
// let b = covid19[0].date;
// for(const k of covid19){
//     if(a < k.active){
//         a = k.active;
//         b = k.date;
//     }
// }
// console.log(`확진자가 가장 많이 나타난 날: ${b}`);


// const factorial = function(a){
//     if(a <= 1){
//         return 1;
//     } else {
//         return a * factorial(a - 1);
//     }
// }

// console.log(factorial(5));


// const gugu = function(a, b = 1){
//     if(b > 9){
//         return 1;
//     } else {
//         console.log(`${a} x ${b} = ${a * b}`);
//         return a * gugu(a, b+1);
//     }
// }

// gugu(9);


// 1 1 2   3   5   8   13  
// a b c   d   e   f   g
// a b a+b b+c c+d d+e e+f

// const pibonacci = function(a){
//     if(a < 2){
//         return a;
//     } else {
//         return pibonacci(a-1) + pibonacci(a-2);
//     }
// }

// console.log(pibonacci(6));

// function printStar(max) {
//     let str = "";
//     if(max < 1){
//         return 1;
//     } else {
//         for(let i = 0; i < max; i++){
//             str += "*";
//         }
//         console.log(str);
//         return printStar(max - 1);
//     }
// }

// printStar(5)


// function printStar(max) {
//     for(let i = 0; i < max; i++){
//         let str = "";
//         for(let j = 0; j < max - i; j++){
//             str += "*";
//         }console.log(str);
//     }
// }

// printStar(5)

// function myGame(n){
//     let clapCount = 0;
//     for(let i = 1; i <= n; i++){
//         const num = i + "";
//         let str = "";
//         let count = 0;
//         for(let k of num){
//             if(k == "3" || k == "6" || k =="9"){
//                 str += "짝";
//                 count++;
//                 clapCount++;
//             }
//         }
//         if(count == 0){
//             console.log(i);
//         } else {
//             console.log("%s (%d) --> %d번", str, i, count);
//         }
//     }
//     console.log("박수를 총 %d번 쳤습니다.", clapCount);
// }

// myGame(3344);


// class Student {
//     constructor(depart, studno) {
//         this._depart = depart;
//         this._studno = studno;
//     }
//     set depart(value) {
//         if(!value){
//             console.log("학과를 입력하세요.");
//             return;
//         }
//         this._depart = value;
//     }
//     get depart(){
//         return this._depart;
//     }
//     set studno(value) {
//         if(!value){
//             console.log("학번을 입력하세요.");
//             return;
//         }
//         this._studno = value;
//     }
//     get studno(){
//         return this._studno;
//     }
//     sayHello(){
//         console.log("나는 %s과 %d학번입니다.",this.depart, this.studno);
//     }
// }

// const yeoul = new Student("독어독문학", 18);
// yeoul.sayHello();
// yeoul.depart = "경영학";
// yeoul.sayHello();
// yeoul.studno = 18;


// class Account {
//     constructor(owner, balance) {
//         this._owner = owner;
//         this._balance = balance;
//     }
//     set owner(value){
//         this._owner = value;
//     }
//     get owner(){
//         return this._owner;
//     }
//     set balance(value){
//         this._balance = value;
//     }
//     get balance(){
//         return this._balance;
//     }
//     deposit(amount){
//         this._balance += amount;
//         console.log("%d원이 입금되었습니다. 현재 잔액 %d원",amount, this.balance);
//     }
//     withdraw(longAmount){
//         if(longAmount > this._balance){
//             console.log("잔액이 부족합니다.");
//             return;
//         } else {
//             this._balance -= longAmount;
//             console.log(longAmount + "원이 출금되었습니다. 현재 잔액 " + this.balance + "원");
//         }
//     }
// }

// const m1 = new Account("철수", 50000);

// m1.deposit(50000);
// m1.withdraw(70000);
// m1.deposit(42000);
// m1.withdraw(100000);
// console.log(m1.balance);




// let email = 'regettog@google.com';

// const index = email.indexOf('@');
// const id = email.slice(0,index);
// const domein = email.slice(index + 1);

// console.log(id);
// console.log(domein);
// console.log(email);


// covid19 = [
//     {date: '0125', active: 426}, 
//     {date: '0126', active: 343}, 
//     {date: '0127', active: 547}, 
//     {date: '0128', active: 490}, 
//     {date: '0129', active: 460}, 
//     {date: '0130', active: 443}, 
//     {date: '0131', active: 338}, 
//     {date: '0201', active: 299}
// ]



// let a = covid19[0].date;

// for(const k of covid19){
//     if(a < k.date){
//         a = k.date;
//     }
// }
// console.log("확진자가 가장 많이 나타난 날: " + a);


console.log(Math.random(5, 7));