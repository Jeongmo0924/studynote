/** Arrow Function */
console.group("Arrow Function");
const sum = (a, b) => console.log(a + b); // 해당 함수의 코드가 한 줄이라면 중괄호를 생략하고 Arrow 뒤에 바로 작성이 가능하다.

sum(3, 40);

const star = x => {                       // 해당 함수의 코드가 여러줄이라면 중괄호를 생략할 수 없다.
    for(let i = 0; i < x; i++){
        let str = "";
        for(let j = 0; j < i + 1; j++){
            str += "*";
        }console.log(str);
    }
}

star(5);
console.groupEnd("Arrow Function End");

/** 함수 대입 */
console.group("함수 대입");
function minus (a, b) {
    console.log(a - b);
}

const m = minus;                          // 특정 변수에 함수 이름 그 자체(파라미터 없이)를 대입할 경우, 그 변수에 함수 자체가 할당되어 함수처럼 사용할 수 있다.
m(3, 6);

const m2 = minus(400, 2);                 // 특정 변수에 함수와 파라미터를 함께 대입할 경우, 그 함수를 실행하고 return 값을 변수에 대입한다.
console.log(m2);                          // minus 함수는 console.log 함수를 실행할 뿐, 어떠한 데이터도 return하지 않기 때문에 undefined를 출력한다.

console.groupEnd("함수 대입 End");

/** Anonymous function */
console.group("Anonymous Function");

const multi = function(a, b){
    console.log(a * b);
};

multi(3, 6);
console.groupEnd("Anonymous Function End");

/** callback function */
console.group("Callback Function");

const doSomething = (a, b, cb) => {
    const q = cb(a, b);
    console.log(q);
}

const divide = (a, b) => a / b;

doSomething(5, 2, divide); 
doSomething(3, 7, minus); // console.log(a - b)는 어떠한 값도 return하지 않기 때문에, 해당 명령은 undefined를 출력한다. -> console.log(console.log(3 - 7);); -> undefined
console.log(console.log(console.log(console.log()))); // 가장 안에 위치한 console.log()는 빈칸을 출력하지만 그 이후의 console.log들은 undefined를 출력한다!
console.groupEnd("Callback Function End");

/** recursive function */
console.group("Recursive Function");
let strr = "";
const rec = (a, b) => {
    if(b < 0) {
        return;
    } else {
        strr += a;
        console.log(strr);
        rec(a, b-1);
    }
};

rec("헤", 5);                               // 자세한 설명은 생략한다.

console.groupEnd("Recursive Function End");

//** 템플릿 문자열 */

const qw = 10;
const qwe = "string";
console.log(`${qw}은 숫자 ${qwe}는 문자`); // 호옹이? 나만 몰랐던거야?

