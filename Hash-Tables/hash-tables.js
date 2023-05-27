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
