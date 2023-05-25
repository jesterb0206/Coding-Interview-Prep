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

// Reference Type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2;
object1 === object3;

object1.value = 15;
object2.value;
object3.value;

[] === [];

// Context vs. Scope

function b() {
  let a = 4;
}

console.log(this);
console.log(this === window);

this.alert('Hello!');

function a() {
  console.log(this);
}

a();

const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

// Instantiation

class Player {
  constructor(name, type) {
    console.log('player', this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('wizard', this);
  }
  play() {
    console.log(`WEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Hi!');
newArray.pop();
console.log(newArray);
