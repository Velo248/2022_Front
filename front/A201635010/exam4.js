const max = 9, min = 5;

let a = [];
for(let i = 0; i<10;i++){
    a[i]=Math.floor(Math.random()*(max-min+1)+min);
}
a.sort();
console.log(a);