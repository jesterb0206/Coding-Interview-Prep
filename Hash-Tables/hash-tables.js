let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('Ahh!');
  },
};

user.age; // O(1)
user.spell = 'abracadabra'; // O(1)
user.scream(); // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
