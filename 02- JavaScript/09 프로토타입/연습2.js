const User = function(id, email){
    this._id = id;
    this._email = email;
}

const foo = new User("ddk", "fo@naver.com");

User.prototype.summary = function(){
    return "아이디는 = " + this._id + " 이메일은 = " + this._email;
}
// foo._phoneNum = "010 1212 1213";
console.log(foo);
console.log(foo.summary());

