function fib(n) {
  if (n == 0) {
    return []
  } else if (n == 1) {
    return [0];
  }

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fibrec(n) {

  if (n <= 0) {
    return [];    
  } else if (n == 1){
    return [0];
  } else if (n == 2){
    return [0, 1];
  } else {
    let seq = fibrec(n - 1);
    let nextValue = seq[seq.length - 1] + seq[seq.length - 2];
    seq.push(nextValue);
    return seq;
  }
}
// Testing

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(5))
console.log(fib(8))

console.log(fibrec(0))
console.log(fibrec(1))
console.log(fibrec(2))
console.log(fibrec(3))
console.log(fibrec(5))
console.log(fibrec(8))
