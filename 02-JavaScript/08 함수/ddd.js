// function something(x, y, cb){
//     cb(x, y);
// }

// something(5, 2, (a, b) => console.log(a * b));

function bb (a, b) { console.log( a * b)};
bb(6, 2);

const c = console.log(5 * 2);
// 이걸 모르는거였어!
// c라는 변수에 함수를 할당하는데, 할당과 동시에 왜 함수가 실행이 되는지!

const d = 5 * 2;


const f = console.log("WTF");


const as = 5;
function ad (x) {
    return x + 1;
}
const ax = ad(as);
// 변수에 함수와 값을 할당했을 때, = 변수에 수식을 입력했을 때, => 그 즉시 수식(함수)가 실행되고 그 결과값을 할당한다.
console.log(ax);

console.log(ad(as));



/** 콜백함수를 파라미터로 요구하는 함수 정의하기 */
function something(x, y, cb) {
    // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
    const result = cb(x, y);
    console.group(cb);
    console.log(x + "와" + y + "의 연산 결과는" + result);
    console.groupEnd();
};


something(5, 7, (a, b) => {
    for(let i = a; i < b; i++) {
        console.log("7 x " + i + " = " + (i*7));
    }
});