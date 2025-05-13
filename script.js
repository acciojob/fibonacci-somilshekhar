function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, fib;

  for (let i = 3; i <= num; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return b;
}


module.exports = fibonacci;
