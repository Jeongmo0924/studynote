// function printStar(max) {
//     for(let i = 0; i < max; i++) {
//         let str = "";
//         for(let j = 0; j < i + 1; j++){
//             str += "*";
//         }console.log(str);
//     }
// }

// printStar(5);

// function printRevStar(max) {
//         for(let i = 0; i < max; i++) {
//             let str = "";
//             for(let j = 0; j < max - i; j++){
//                 str += "*";
//             }console.log(str);
//         }
//     }

// printRevStar(5);

/**
## 문제3

369게임은 숫자를 순서대로 말하면서 3,6,9가 포함된 횟수만큼 박수를 치는 게임이다.

1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 "짝"을 출력하고 그렇지 않은 경우에는 숫자를 출력하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 `myGame(n)`을 작성하시오.

힌트: 문자열은 그 자체가 배열로 인식됩니다.

ex)
```js
const str = "Hello";
console.log(str[0]); // --> H
console.log(str[1]); // --> e
console.log(str[2]); // --> l
```

#### 출력예시

myGame(35)를 호출한 경우

```
1
2
짝(3) --> 1번
4
5
짝(6) --> 1번
7
8
짝(9) --> 1번
10
11
12
짝(13) --> 1번
14
15
...
짝(29) --> 1번
짝(30) --> 1번
짝(31) --> 1번
짝(32) --> 1번
짝짝(33) --> 2번
짝(34) --> 1번
짝(35) --> 1번

박수를 총 OO번 쳤습니다.
...

```
 */

// function myGame(x) {
//     let clap = "";
//     let clapNum = 0;
//     for(let i = 0; i < x; i++){
//         if(i % 10 == (3 || 6 || 9) || 29 < i < 40) {
//             clap += ("짝(" + i + ") -->" 1번);
//             clapNum++;
//         } else if ( i % 33 == 0 || i % 36 == 0 || i )
//     }
// }



// function myGame(x) {
//     let clapNum = 0;    
//     for(let i = 1; i < x + 1; i++){
//         let clap = "";
//         let one = i % 10;
//         let ten = (i - one)/10;
//         if(one % 3 == 0 || ten % 3 == 0 && i > 9 ){
//             clap += ("짝(" + i + ") --> 1번");
//             clapNum += 1;
//         } else if(one % 3 == 0 && ten % 3 == 0){
//             clap += ("짝(" + i + ") --> 2번");
//             clapNum += 2;
//         } else {
//             clap += i;
//         }
//         console.log(clap);
//     }console.log("박수를 총 %d번 쳤습니다.", clapNum);
// }

// myGame(35);






// function myGame(x) {
//     let clapNum = 0;    
//     for(let i = 1; i < x + 1; i++){
//         let clap = "";
//         let one = i % 10;
//         let ten = (i - one)/10;
//         if(one % 3 == 0 && one != 0 && ten % 3 == 0 && i > 9){
//             clap += ("짝짝(" + i + ") --> 2번");
//             clapNum += 2;
//         } else if(one % 3 == 0 && one != 0 || ten % 3 == 0 && i > 9 ){
//             clap += ("짝(" + i + ") --> 1번");
//             clapNum += 1;
//         } else {
//             clap += i;
//         }
//         console.log(clap);
//     }console.log("박수를 총 %d번 쳤습니다.", clapNum);
// }

// myGame(99);

function myGame(n) {
    let count = 0;

    for(let i = 1; i < n + 1; i++) {
        const str = i + "";

        let say = "";
        let clap = 0;
        for(let j of str){
            if( j == "3" || j == "6" || j == "9"){
                say += "짝";
                clap++
            }
        }
        if ( clap == 0) {
            console.log(i);
        } else {
            console.log("%s (%d) --> %d번", say, i, clap);
            count += clap;
        }
    }
    console.log();
    console.log("박수를 총 %d번 쳤습니다", count);
}

myGame(36);




