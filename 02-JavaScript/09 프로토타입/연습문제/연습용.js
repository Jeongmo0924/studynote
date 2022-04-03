
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

