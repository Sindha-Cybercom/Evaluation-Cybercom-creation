var arr = [10, 20, '60', 30, 54, 39]

const out = arr.reduce((acc, current) => acc + parseFloat(current), 0)
console.log(out);
