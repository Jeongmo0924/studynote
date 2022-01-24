"use strict"; // 엄격모드 적용 --> ES6호환기능만 사용하도록 명시

// 메시지 그룹핑
console.group("MyMessage1");
    console.log('hello world1');
    console.log('hello world2');
    console.log('hello world3');
    console.log('hello world4');
    console.log('hello world5 안녕하세요 ddddd');
console.groupEnd();

console.group("MyMessage2"); // 출력하는 내용을 그룹으로 묶음
    console.log('hello world6');
    console.log('hello world7');
    console.group("MyMessage2-1"); // 그룹 안에 하위그룹 생성
        console.log('hello world8');
        console.log('hello world9');
        console.log('hello world10');
    console.groupEnd(); // 하위 그룹으로 묶기
    console.log('hello world11');
console.groupEnd(); // 그룹으로 묶기 끝!!
