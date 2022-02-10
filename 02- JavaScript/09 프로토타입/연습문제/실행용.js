// function Student(name, a, b, c) {
//     this.name = name;
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Student.prototype = {
//     sum() {
//         return this.a + this.b + this.c;
//     },
//     avg() {
//         return this.sum() / 3
//     },
//     result() {
//         console.log(this.name + "의 총점은 " + this.sum() + "점이고 평균은 " + this.avg() + "점 입니다.");
//     }

// };

// const student1 = new Student("철수", 92, 81, 77);
// const student2 = new Student("영희", 72, 95, 98);
// const student3 = new Student("민혁", 80, 86, 84);

// student1.result();
// student2.result();
// student3.result();

// function Rectangle(){
//     this._width = null;
//     this._height = null;
// }

// Rectangle.prototype = {
//     get width(){
//         return this._width;
//     },
//     set width(value){
//         this._width = value;
//     },
//     get height(){
//         return this._height;
//     },
//     set height(value){
//         this._height = value;
//     },
//     getAround : function(){
//         return (this._width + this._height)*2; 
//     },
//     getArea : function(){
//         return this.width * this.height;
//     }       
// };

// const rect = new Rectangle();
// rect.width = 10;
// rect.height = 5;

// console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", rect.getAround(), rect.getArea());


class Student {
    constructor(name, a, b, c){
        this._name = name;
        this._a = a;
        this._b = b;
        this._c = c;
    }
    sum(){
        return this._a + this._b + this._c;
    }
    avg(){
        return this.sum() / 3;
    }
    result() {
        console.log(this._name + "의 총점은 " + this.sum() + "점이고 평균은 " + this.avg() + "점 입니다.");
    }
};

const student1 = new Student("철수", 92, 81, 77);
const student2 = new Student("영희", 72, 95, 98);
const student3 = new Student("민혁", 80, 86, 84);

student1.result()
student2.result()
student3.result()







class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    set _width(value){
        if(isNaN(value)){
            console.log("width값에 숫자를 입력하세요");
            return;
        } else {
            this.width = value;    
        }
    }

    get _width() {
        return this.width;
    }

    set _height(value){
        this.height = value;
    }
    

    get _height(){
        return this.height;
    }

    getAround() {
        return (this.width + this.height) * 2;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle("string", 5);
// console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", rect.getAround(), rect.getArea());




const af = 124;
console.log(!isNaN(af));