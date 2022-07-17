const Dt = new Date();
const date = new Date(Date.parse(Dt) + 1000 * 60 * 60 * 308 + 1000 * 60 * 8);

console.log(date.toLocaleString());
