/** 
 * 배열 순서대로 정렬하기
 */
const data = [ 1241 ,12412, 4, 125, 15433, 5, 1351, 25125, 23136, 458, 58456, 46, 1346234, 7524];
console.log(data);

// i는 배열의 원소 중 마지막을 제외한 항목을 스캔한다.
for (let i = 0; i < data.length - 1; i++) {
    // j는 배열의 원소 중 i번째 다음 원소부터 마지막 원소까지 스캔
    for (let j = i + 1; j < data.length; j++) {

        // 부등호 방향 ">" : 오름차순 (순차정렬)
        // 부등호 방향 "<" : 내림차순 (역순정렬)
        if (data[i] < data[j]) {
            const tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}

console.log(data);


// 연습 ->

let data2 = [123 ,513353, 62457, 258245, 1342, 547344, 5613, 45654, 8124, 4335, 123, 454275, 124];

// 큰 수부터 정렬하시오.

for (i = 0; i < data2.length - 1; i++) {
    for ( j= i+1; j < data2.length; j++ ) {
        if ( data2[i] > data2[j]) {
            const temp = data2[i];
            data2[i] = data2[j];
            data2[j] = temp;
        }
    }
}

console.log(data2);



// 연습 다시

let data3 = [ 2345, 678, 124, 9758, 134, 467, 124, 6749, 124, 658, 1235, 5467, 124512];

for(let i = 0; i < data3.length - 1; i++) {
    for (let j = i + 1; j < data3.length; j++) {
        if(data3[i]>data3[j]){
            const tmp = data3[i];
            data3[i] = data3[j];
            data3[j] = tmp;
        }
    }
}

console.log(data3);