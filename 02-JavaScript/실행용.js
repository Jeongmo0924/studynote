// const ssn = "9203211";

// let year = ssn.charAt(6) == 1 | ssn.charAt(6) ==  2 ? 19 + ssn.substring(0, 2) : 20 + ssn.substring(0, 2);
// let age = 2022 - year + 1;
// let gender = ssn.charAt(6) % 2 == 0 ? "여자" : "남자";

// console.log("당신은 %d세 %s입니다.", age, gender);


/*
100~200 사이의 임의의 숫자를 number 라는 변수에 저장하고, 1부터 number까지의 수 중에서 3의
배수에 대한 총 합을 구하시오. (범위에는 number가 포함됩니다.) (15분/5점)
*/

// function random(n1, n2){
//     return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// const number = random(100, 200);

// let sum = 0;

// for(let i = 1; i <= number; i++){
//     sum += i % 3 == 0 ? i : 0;
// }

// console.log(number);
// console.log(sum);


/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를 들어 18의 자릿수
합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다. 자연수 x를 입력받아 x가 하샤드
수인지 아닌지 검사하는 함수, solution을 완성하여 아래의 테스트 코드에 대한 출력 결과를 만드시오.
(30분/20점)
*/

function solution(x) {
    let str = "" + x;
    let sum = 0;
    for(const k of str){
        let a = Number(k);
        sum += a;
    }
    return x % sum == 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));


/*
과자 한 개의 가격이 K
사려고 하는 과자의 개수가 N
현재 가진 돈의 액수를 M
이라 할 때
K x N - M 여러분은 동수가 부모님께 받아야 하는 모자란 돈을 계산하려고 한다. 예를 들어, 과자 한 개의 가격이 30원, 사려고 하는 과자의 개수가 4개, 현재 동수가 가진 돈이 100원이라 할 때,
 동수가 부모님께 받아야 하는 돈은 20원이다. 과자 한 개의 가격이 250원, 사려고 하는 과자의 개수가 2개, 현재 동수가 가진 돈이 140원이라 할
때, 동수가 부모님께 받아야 하는 돈은 360원이다. 과자 한 개의 가격이 20원, 사려고 하는 과자의 개수가 6개, 현재 동수가 가진 돈이 120원이라 할 때
동수가 부모님께 받아야 하는 돈은 0원이다. 과자 한 개의 가격이 20원, 사려고 하는 과자의 개수가 10개, 현재 동수가 가진 돈이 320원이라 할 때
동수가 부모님께 받아야 하는 돈은 역시 0원이다.
*/

// function solution (K, N, M) {
//     return K * N > M ? (K * N) - M : 0;
// }

// // K=30, N=4, M=100인 경우
// console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", solution(30, 4, 100));
// // K=250, N=2, M=140인 경우
// console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", solution(250, 2, 140));
// // K=20, N=6, M=120인 경우
// console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", solution(20, 6, 120));
// // K=20, N=10, M=320인 경우
// console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", solution(20, 10, 320));


/*
어느 학급의 중간고사 평균 성적이 아래의 표와 같았다. 
민수 철영 나영 수철 영민
82   76   91   98   64
학생의 성적에 대해 아래의 요구사항을 충족하는 Student 클래스를 작성하고 각 메서드의
실행결과를 제시시오. (60분/50점)
*/
/*
요구사항
1. 생성자에서 원소가 0개인 빈 배열 grade를 생성합니다. 
2. setter에 학생 한명의 점수를 주입하면 grade의 원소로 추가됩니다. getter는 제공되지 않습니다. 
3. 주입된 점수의 총점과 평균을 배열로 리턴하는 getSumAvg() 함수를 제공합니다. 
4. 주입된 점수 중에서 최하점과 최고점을 JSON으로 리턴하는 getMinMax() 함수를 제공합니다. 
5. 주입된 점수에 대한 분산을 리턴하는 getVar() 함수를 제공합니다. 
6. 주입된 점수에 대한 표준편차를 리턴하는 getStd() 함수를 제공합니다. 
*/

// class Student {
//     constructor(){
//         this._grade = [];
//     }
//     set grade(value){
//         this._grade.push(value);
//     }
//     getSumAvg(){
//         let sum = 0;
//         for(const k of this._grade){
//             sum += k;
//         }
//         let avg = sum / this._grade.length;
//         return [sum, avg];
//     }
//     getMinMax(){
//         let min = this._grade[0];
//         for(let k of this._grade){
//             if(min > k){
//                 let tmp = min;
//                 min = k;
//                 k = tmp;
//             }
//         }
//         let max = this._grade[0];
//         for(let k of this._grade){
//             if(max < k){
//                 let tmp = max;
//                 max = k;
//                 k = tmp;
//             }
//         }
//         return { '최하점' : min, '최고점' : max};
//     }
//     getVar(){
//         let sum = 0;
//         for(const k of this._grade){
//             sum += k;
//         }
//         let avg = sum / this._grade.length;
//         let devTotal = 0;
//         for(const k of this._grade){
//             let dev = k - avg;
//             devTotal += dev * dev;
//         }
//         return (devTotal / this._grade.length).toFixed(2);
//     }
//     getStd(){
//         let sum = 0;
//         for(const k of this._grade){
//             sum += k;
//         }
//         let avg = sum / this._grade.length;
//         let devTotal = 0;
//         for(const k of this._grade){
//             let dev = k - avg;
//             devTotal += dev * dev;
//         }
//         return (Math.sqrt(devTotal/this._grade.length)).toFixed(2);
//     }
// }

// let classRoom = new Student();
// classRoom.grade = 82;
// classRoom.grade = 76;
// classRoom.grade = 91;
// classRoom.grade = 98;
// classRoom.grade = 64;
// console.group("getSumAvg()결과")
// console.log(classRoom.getSumAvg());
// console.groupEnd();
// console.group("getMinMax()결과")
// console.log(classRoom.getMinMax());
// console.groupEnd();
// console.group("getVar()결과")
// console.log(classRoom.getVar());
// console.groupEnd();
// console.group("getStd()결과")
// console.log(classRoom.getStd());

