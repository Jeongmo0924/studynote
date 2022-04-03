async function hello() { return "Hello"};

hello().then((value) => console.log(value));

const a = [1, 2, 3, 4]
const b = 555;

function getData () {
    return new Promise (function(resolve, reject) {
        for(let i = 0; i < 66; i++){
            a[i]++;
        }
        resolve(a);
    });
}

getData().then(function(resolvedData) {
    console.log(resolvedData);
}).catch(function(resolvedData){
    console.log(resolvedData);
})