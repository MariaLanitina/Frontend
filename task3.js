let t1 = process.argv[2];
let t2 = process.argv[3];
const x = new Date((t1 + t2) * 1000).toLocaleTimeString(); 
console.log(x);
