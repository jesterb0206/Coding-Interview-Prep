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
