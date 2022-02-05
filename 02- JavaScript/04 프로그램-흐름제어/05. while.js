let x = 1;              // 초기식 -> 반복에 사용될 조건값을 지정한다.

while (x <= 10) {       // 조건식 -> x가 10보다 작거나 같은 동안 반복수행
    const k = "x=" + x; // 반복이 진행되는 동안 수행할 명령
    console.log(k);
    x++;                // 증감식 -> 조건에 사용되는 값을 변경
}

console.log("x의 최종값:" + x);


let a = 0;

while (a < 100) {
	const k = "a = " + a;
	console.log(k);
	a += 10;
}