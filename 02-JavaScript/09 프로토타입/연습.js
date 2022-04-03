function Test(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Test.prototype = {
    get name(){
        return this._name;
    },
    set name(value){
        this._name = value
    },
    get gender(){
        return this._gender;
    },
    set gender(value){
        if(value == "male"){
            this._gender = "m";
        } else if (value == "female"){
            this._gender = "f";
        } else {throw Error("정확한 성별을 입력하세요(male / female)");}
    },
    get age() {
        return this._age;
    },
    set age(value){ 
        if (value < 0){
            throw Error("age cannot be negative");
        } else{
        this._age = value;
        }
    }
}
const jm = new Test("Jungmo", "male", 33);
const yw = new Test("Yeoul", "female", 25);

console.log(yw.gender);