class Zerg {
    constructor(name, hp, dps, speed) {
        this._name = name;
        this._hp = hp;
        this._dps = dps;
        this._speed = speed;
    }

    attack(target) {
        console.log(this._name + "(이)가 " + target + "에게 " + this._dps + "의 데미지를 입혔습니다.")
    }

    move(position) {
        console.log(this._name + "(이)가 " + this._speed + "의 속도로 " + position + "까지 이동했습니다.")
    }
}

class Zergling extends Zerg {
    constructor(name){
        super(name, 50, 5, 10);
    }

    attack(target) {
        super.attack(target);
        console.log(">>> 할퀴기");
    }
}

class Hydra extends Zerg {
    constructor(name){
        super(name, 80, 8, 8);
    }

    attack(target){
        super.attack(target);
        console.log(">>> 침뱉기");
    }
}

const z1 = new Zergling("쩌글링1");
const z2 = new Zergling("쩌글링2");
z1.attack("마린");
z2.attack("파이어뱃");

const h1 = new Hydra("히드라1");
const h2 = new Hydra("히드라2");
h1.move("센터");
h2.move("앞마당");
h1.attack("SCV");
h2.attack("커맨드센터");





/** 프로토타입 다시보기 */

function Student(name, email, phoneno) {
    this._name = name;
    this._email = email;
    this._phoneno = phoneno;
};

Student.prototype.in = function() {
    console.log(this._name + "이 등교했습니다.");
}

Student.prototype.out = function(){
    console.log(this._name + "이 하교했습니다.");
}

Student.prototype.sendEmail = function() {
    console.log(this._email +  "에 이메일을 보냈습니다.");
}

Student.prototype.sendSms = function() {
    console.log(this._phoneno + "에 문자메시지를 전송하였습니다.");
}

const s1 = new Student("여울", "yeoul@naver.com", "010-2020-3030");
s1.in();
s1.out();
s1.sendEmail();
s1.sendSms();


// getter , setter


function Student2() {
    this._name = null;
    this._email = null;
    this._phoneno = null;
};

Student2.prototype.in = function() {
    console.log(this._name + "이 등교했습니다.");
}

Student2.prototype.out = function(){
    console.log(this._name + "이 하교했습니다.");
}

Student2.prototype.sendEmail = function() {
    console.log(this._email +  "에 이메일을 보냈습니다.");
}

Student2.prototype.sendSms = function() {
    console.log(this._phoneno + "에 문자메시지를 전송하였습니다.");
}

Object.defineProperty(Student2.prototype, "name", {
    get: function() {
        return this._name;
    },
    set: function(value) {
        if(!value){
            console.log("이름을 입력하세요");
            return;
        } else {
            this._name = value;
        }
    }
});

Object.defineProperty(Student2.prototype, "email", {
    get: function() {
        return this._email;
    },
    set: function(value) {
        if(!value){
            console.log("이메일을 입력하세요");
            return;
        } else {
            this._email = value;
        }
    }
});

Object.defineProperty(Student2.prototype, "phoneno", {
    get: function() {
        return this._phoneno;
    },
    set: function(value) {
        if(!value){
            console.log("휴대폰 번호를 입력하세요");
            return;
        } else {
            this._phoneno = value;
        }
    }
});

const s2 = new Student2("여울", "yeoul@naver.com", "010-2020-3030");
s2.name = "여울";
s2.email = "yeoul@naver.com";
s2.phoneno = "010-2020-3030";
s2.in();
s2.out();
s2.sendEmail();
s2.sendSms();


/** JSON을 활용한 프로토타입 정의 */

function Student3(name, email, phoneno){
    this._name = name;
    this._email = email;
    this._phoneno = phoneno;
}

Student3.prototype = {
    get name(){
        return this._name;
    },

    set name(value){
        if(!value){
            console.log("이름을 다시 확인하세요");
            return;
        } else {
            this._name = value;
        }
    },

    get email(){
        return this._email;
    },

    set email(value){
        if(!value){
            console.log("이메일을 다시 확인하세요");
            return;
        } else {
            this._email = value;
        }
    },

    get phoneno(){
        return this._phoneno;
    },

    set phoneno(value){
        if(!value){
            console.log("휴대폰 번호를 다시 확인하세요");
            return;
        } else {
            this._phoneno = value;
        }
    },

    in : function(){
        console.log(this.name + "(이)가 등교했습니다.");
    },
    out : function(){
        console.log(this.name + "(이)가 하교했습니다.");
    },
    sendEmail : function() {
        console.log(this.email + "로 이메일을 전송하였습니다..");
    },
    sendSms : function(){
        console.log(this.phoneno + "로 문자메시지를 전송하였습니다..");
    }
}

const s3 = new Student3();
s3.name = "정모";
s3.email = "operbjm@naver.com";
s3.phoneno = "010-7282-8132";
s3.sendEmail();
s3.sendSms();
s3.in();
s3.out();


/** class로 해보기 */

class Student4 {
    constructor(name, email, phoneno){
        this._name = name;
        this._email = email;
        this._phoneno = phoneno;
    }
    static count = 0;

    in() {
        console.log(this._name + "이 등교했습니다.class");
        Student4.count++;
        console.log("전교생은 고작... : " + Student4.count + "명...");
    }

    out() {
        console.log(this._name + "이 하교했습니다.class");
        Student4.count--;
        console.log("전교생은 고작... : " + Student4.count + "명...");
    }

    sendEmail() {
        console.log(this._name + "의 이메일인 " + this._email + "에 이메일을 보냈습니다.class");
    }

    sendSms() {
        console.log(this._name + "의 휴대폰 번호인 " + this._phoneno + "에 문자메시지를 전송했습니다.class");
    }
}

const s4 = new Student4("여울", "yeoul@gmail.com", "010-2020-3030");
const s5 = new Student4("정모", "operbjm@naver.com", "010-7282-8132");

s4.in();
s5.in();
s4.out();
s4.sendEmail();
s4.sendSms();