function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

findFactorialIterative(5);
findFactorialRecursive(5);

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

fibonacciIterative(3);

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(6);
