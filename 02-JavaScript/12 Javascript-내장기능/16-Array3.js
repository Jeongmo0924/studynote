/** 
 * 배열을 탐색하는 방법 
 */

// 테스트를 위한 배열
const arr = [10, 20, 30, 40, 50];

/**
 * 배열에 대한 반복처리(1) - 배열의 원소 스캔하기
 */
for(let i = 0; i < arr.length; i++){
    if(i == 3){
        console.log(" ~~~ 반복중단!!!");
        break;
    }
    console.log("%d번째 원소 ==> %d", i, arr[i]);
}

console.log("--------------------------------------");

// 콜백함수에게 배열의 값과 인덱스를 전달한다.
// 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
arr.forEach((v, i) => {
    if( i == 3) {
        console.log(" ~~~ 반복 중단!!!!");
        // 콜백함수 역시 함수이므로 break를 사용해서 중단할 수 없다. (ERROR : Illegal break statement) break는 for/while문에서만 작동됨
        // forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 동작중인 현재 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
        return; 
    }
    console.log("%d번째 원소 ==> %d", i, v);
});

console.log("--------------------------------------");

/**
 * 배열에 대한 반복처리(2) - 탐색 중단
 */
arr.some((v, i) => {
    // some함수는 콜백함수가 true를 리턴하는 순간 반복을 중단한다.
    if( i == 3) {
        console.log(" ~~~ 반복중단!!!");
        return true;
    }
    console.log("%d번째 원소 ==> %d", i, v);
});

console.log("--------------------------------------");

/**
 * 배열에 대한 반복처리(3) - 콜백함수에서 리턴하는 값들을 하나의 배열로 묶기
 */
// 전통적인 방법
const d1 = [];
for(let i = 0; i < arr.length; i++){
    //배열의 맨 뒤에 새로운 원소 추가 --> 확장
    if(arr[i] % 4 ==0){
        d1.push(arr[i]);
    }
}

console.log(d1);

// forEach를 사용하는 방법
const d2 = [];
arr.forEach((v, i) => {
    if(v % 4 ==0){
        d2.push(v);
    }
});
console.log(d2);

// map 함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
// const hello = arr.map(function(v, i){
//     return v + 1;
// });

// 콜백함수를 화살표 함수로 변환(ES6)
// const hello = arr.map((v, i) => {
//     return v + 1;
// });

// 화살표 함수는 처리 로직이 한 줄인 경우 {}와 ;, return 키워드 생략이 가능
const hello = arr.map((v, i) => v + 1);

// -> Array(5) [20, 30, 40, 50, 60]
console.log(hello);

const d3 = arr.map((v, i) => {
    if( v % 4 == 0){
        return v;
    }
});

console.log(d3);

// map 함수의 리턴은 반드시 원본 함수와 같은 길이의 배열이 된다.
// 특정 조건을 만족하는 값들만 골라서 다른 배열에 저장하고자 할 경우 .filter를 사용하자
// 다시 한 번 리마인드 해보면 filter 함수의 경우 콜백함수에서 true가 리턴되는 경우 그 원소를 새로운 배열의 원소로 저장시키고 false가 리턴되는 경우는 버린다.