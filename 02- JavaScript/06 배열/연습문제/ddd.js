let ssn = [9, 0, 0, 9, 2, 4, 1, 0, 5, 7, 4, 1, 2];
let weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
let sum = 0;


for(let i = 0; i<ssn.length - 1; i++) {
    let tmp = 0;
    tmp = ssn[i] * weight[i];
    sum += tmp;
}

let a = sum % 11;
console.log(18 + 45 + 12 + 28 + 8 + 10 + 21 + 16 + 5)
console.log((163 - a) / 11);
console.log("a : " + a);
let b = (11 - a) % 10
console.log(2%10);
console.log(b);
let c = (b - ssn[13]) % 10;
console.log(ssn[13]);
console.log(0 % 10);
console.log(c);

// let c = (((11 - (sum % 11)) % 10) - ssn[13]) % 10

if (c == 0) {
    console.log("유효한 주민등록번호입니다.");
} else {
    console.log("유효하지 않은 주민등록번호 입니다.");
}