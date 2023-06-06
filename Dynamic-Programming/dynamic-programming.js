function addTo80(n) {
  return n + 80;
}

addTo80(5);

function memoizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('Waiting!');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizeAddTo80();

console.log(1, memoized(6));
console.log(2, memoized(6));

let calculations = 0;

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(35));
console.log('Dynamic Programming', fasterFib(100));
console.log('Dynamic Programming 2', fibonacciMaster2(100));
console.log('We did ' + calculations + ' calculations!');
