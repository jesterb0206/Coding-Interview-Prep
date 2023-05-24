// 4 * 4 = 16 bytes of storage

const strings = ['a', 'b', 'c', 'd'];

strings[2]; // O(1)

// Push

strings.push('e'); // O(1)

// Pop

strings.pop();
strings.pop(); // O(1)

// Unshift

strings.unshift('x'); // O(n)

// Splice

strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);
