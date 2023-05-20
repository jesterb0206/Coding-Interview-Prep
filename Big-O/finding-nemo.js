const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo1(nemo);
