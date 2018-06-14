let d = process.argv[2];
let m = process.argv[3];
let y = process.argv[4];
let d0 = new Date(y, m, d);
let d1 = new Date(new Date(y).getFullYear()+1, 01, 01);
let dt = (d1.getTime() - d0.getTime()) / (1000*60*60*24);
console.log(Math.round(dt));
