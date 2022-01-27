for(let i=0; i<7; i++) {
    let str="";

    for(let j = 0; j < 7 - i; j++) {
        str += "*";
    }

    console.log(str);
}

/**
 * i는 0 ~ 6까지
 * i가 0일 때 j는 7
 * i가 1일 때 j는 6
 * i가 2일 때 j는 5
 * i가 n일 때 j는 7-i
 */