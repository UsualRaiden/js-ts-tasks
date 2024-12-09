class User {
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error('Invalid data types');
    }
    if (!firstName || !secondName || age <= 0) {
      throw new Error('Invalid data values');
    }

    this._firstName = firstName;
    this._secondName = secondName;
    this._age = age;
  }

  get name() {
    return `${this._firstName} ${this._secondName}`;
  }

  set firstName(name) {
    this._firstName = name;
  }

  set secondName(name) {
    this._secondName = name;
  }

  celebrateBirthday() {
    this._age += 1;
  }

  introduce() {
    return `My name is ${this._firstName} ${this._secondName}, I'm ${this._age}`;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Invalid age');
    }
    this._age = value;
  }
}

module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

module.exports.createUsers = function (data) {
  return data.map(userData => new User(userData.firstName, userData.secondName, userData.age));
};

module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

module.exports.createUsersSortFn = function (TestUtils) {
  function sort(users) {
    for (let i = 0; i < users.length - 1; i++) {
      for (let j = 0; j < users.length - i - 1; j++) {
        if (users[j + 1].age - users[j].age > 0) {
          const temp = users[j];
          users[j] = users[j + 1];
          users[j + 1] = temp;
        }
      }
    }
    return users;
  }
  return sort;
};

module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });

  return users;
};

module.exports.User = User;
