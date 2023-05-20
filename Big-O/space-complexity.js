function boo(n) {
  for (let i = 0; i < n; i++) {
    console.log('Boo!');
  }
}

boo([1, 2, 3, 4, 5]); // O(1)

function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'Hi!';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n)
