
function fibonacci(n) {
    if(n < 2){
        return n;
    } else {
        for(let i = n-2; i < n; i++){
            console.log(fibonacci(i));
        }
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
const f = fibonacci(10);
console.log(f);

// 0 1 1 2 3 5 8 13 21 34 55

// 0 1 2 3 4 5 6 7  8  9  10

