function fibonacciSeries(n) {
  let fibSeries = [0, 1];
  let i = 2;

  while (i < n) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    i++;
  }

  return fibSeries;
}

const n = 10; // Change the value of n to generate Fibonacci series up to n numbers
const fibNumbers = fibonacciSeries(n);
console.log(`Fibonacci series up to ${n} numbers: ${fibNumbers.join(", ")}`);
