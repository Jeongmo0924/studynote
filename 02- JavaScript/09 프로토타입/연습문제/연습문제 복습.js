// ## 문제1. 

// 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

// 이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

// 작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

// 클래스는 JSON 형식으로 작성되어야 합니다.

// | 이름 | 국어 | 영어 | 수학 |
// |---|---|---|---|
// | 철수 | 92 | 81 | 77 |
// | 영희 | 72 | 95 | 98 |
// | 민혁 | 80 | 86 | 84 |


// #### 출력결과

// ```
// 철수의 총점은 249점 이고 평균은 83점 입니다.
// 영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
// 민혁의 총점은 264점 이고 평균은 88점 입니다.
// ```

class Student {
    constructor (kor, eng, math){
        if(!isNaN(kor) && !isNaN(eng) && !isNaN(math)){
            this._kor = kor;   
            this._eng = eng;
            this._math = math;
        } else {
            throw Error("점수 입력을 다시 확인하세요");
            return;
        }
    }

    set kor(value) {
        if(isNaN(value)){
            throw Error("kor 값에 숫자값을 입력하세요.");
            return;
        } else {
            this._kor = value;
        }
    }

    get kor() {
        return this._kor;
    }

    set eng(value) {
        if(isNaN(value)){
            throw Error("eng 값에 숫자값을 입력하세요.");
            return;
        } else {
            this._eng = value;
        }
    }

    get eng() {
        return this._eng;
    }

    set math(value) {
        if(isNaN(value)){
            throw Error("math 값에 숫자값을 입력하세요.");
            return;
        } else {
            this._math = value;
        }
    }

    get math() {
        return this._math;
    }

    sum(){
        return this.kor + this.eng + this.math;
    }

    avg(){
        return this.sum() / 3;
    }
}

const students = [
    ["철수", 92, 81, 77],
    ["영희", 72, 95, 98],
    ["민혁", 80, 86, 84]
];


for(const k of students){
    const s = new Student(k[1], k[2], k[3]);
    console.log(k[0] + "의 총점은 " + s.sum() + "점이고 평균은 " + s.avg() + "점 입니다.");
}





const a = new Student("sf", 19, 22);