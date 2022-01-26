let age = 33;

if (age > 19) {
    console.log("성인입니다.");
    if (age < 30) {
        console.log("(20대)");
    } else if (age < 40) {
        console.log("(30대)");
    } else if (age < 50) {
        console.log("(40대)");
    } else if (age < 60) {
        console.log("50대");
    } else if (age < 70) {
        console.log("60대");
    } else {
        console.log("70대 이상");
    }
} else {
    console.log("청소년입니다.");
}

let sex = "male";
let blood = "A";

if (sex == "male" && blood == "A") {
    console.log("남성, A형");
    if (sex == "male" && blood == "B") {
        console.log("남성, B형");
    }
} else {

}

뭐 대충 이렇게 하면 된다~