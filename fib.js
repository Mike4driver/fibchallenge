
function fib(n) {
    if (n <= 1) return n;
    else {
        return (fib(n-1) + fib(n-2));
    }
}

if (!isNaN(process.argv[2]) && parseInt(process.argv[2]) >= 0) count = parseInt(process.argv[2]);
else console.log("Pass in the number (greater than zero) of itterations as an argument")
results = []
for (let n = 0; n <= count; n++) results.push(fib(n));
console.log(`values: ${results.join(", ")}`)
for (let n = 0; n < results.length; n++) {
    if (n-2 >=0 ) {
        console.log(`Calculation ${results[n-2]} + ${results[n-1]} = ${results[n]}`)
    }
}