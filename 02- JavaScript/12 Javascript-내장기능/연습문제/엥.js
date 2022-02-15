function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const balls = new Array(45);

for(let i = 0; i < balls.length; i++){
    balls[i] = i+1;
}

const lotto = new Array(6);

for(let i=0; i<lotto.length; i++){
    console.log(balls);

    const rnd = random(0, balls.length - 1);

    lotto[i] = balls [rnd];
    console.log(lotto[i])
    balls.splice(rnd, 1);
}

console.log(lotto);