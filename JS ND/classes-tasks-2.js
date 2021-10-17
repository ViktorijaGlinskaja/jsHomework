console.group('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  console.dir(Player);
  const p1 = new Player("David Jones", 25, 175, 75);
  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
  subtract() {
    return this.a - this.b;
  }
  multiply() {
    return this.a * this.b;
  }
  divide() {
    return this.a / this.b;
  }
}

console.dir(Calculator)
const task2 = new Calculator(100, 10);
console.log({
  "sum": task2.add(),
  "substract": task2.subtract(),
  "multiply": task2.multiply(),
  "divide": task2.divide()
})
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    getFullName() {
      return `${this.firstname} ${this.lastname}`;
    }

    getemail() {
      return (`${this.firstname}.${this.lastname}@company.com`).toLowerCase();
    }
  }

  console.dir(Employee);
  const task3 = new Employee('Viktorija', 'Glinskaja');
  console.log({
    'Full name': task3.getFullName(),
    'email': task3.getemail(),
  })
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`;
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else {
        return `${other.name} is the same age as me.`;
      }
    }
  }
  const p1 = new Person('Viktorija', 26);
  const p2 = new Person('Piteris', 30);
  const p3 = new Person('Borisas', 6);

  console.log({
    'pirmas palyginimas': p1.compareAge(p2),
    'antras palyginimas': p1.compareAge(p3),

  })
}


console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius
    }
    getArea() { return Math.PI * (this.radius ** 2) }
    getPerimeter() { return 2 * Math.PI * this.radius }
  }

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }
    getfullname() {
      return this.fname + ' ' + this.lname;
    }
    getinitials() {
      return this.fname[0] + '.' + this.lname[0];
    }
  }
  const Person = new Name('Viktorija', 'Glinskaja');
  console.log({
    "Full name": Person.getfullname(),
    "Initials": Person.getinitials()
  });
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }

  ice1 = new IceCream("Chocolate", 13)
  ice2 = new IceCream("Vanilla", 0)
  ice3 = new IceCream("Strawberry", 7)
  ice4 = new IceCream("Plain", 18)
  ice5 = new IceCream("ChocolateChip", 3)

  const iceCreams = [ice1, ice2, ice3, ice4, ice5]

  const flavors = {
    "Plain": 0,
    "Vanilla": 5,
    "ChocolateChip": 5,
    "Strawberry": 10,
    "Chocolate": 10
  }

  const sweetestIcecream = arr => Math.max(...arr.map(({ flavor, numSprinkles }) => flavors[flavor] + numSprinkles));
  console.log(sweetestIcecream(iceCreams))
}

console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(number) {
      this.number = number;
    }
    getones() {
      return this.number / 1
    }
    getthrees() {
      return Math.floor(this.number / 3)
    }
    getnines() {
      return Math.floor(this.number / 9)
    }
  }
  const p1 = new OnesThreesNines(20);

  console.log(p1.getnines())
  console.log(p1.getones())
  console.log(p1.getthrees())

}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }
  User.userCount = 0;
}

console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return `Title: ${this.title}`;
    }

    getAuthor() {
      return `Author: ${this.author}`;
    }
  
  }
  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log(PP.title)
  console.log(PP.author)
  console.log(PP.getTitle())
  console.log(PP.getAuthor())

  console.log(H.title)
  console.log(H.author)
  console.log(H.getTitle())
  console.log(H.getAuthor())

  console.log(WP.title)
  console.log(WP.author)
  console.log(WP.getTitle())
  console.log(WP.getAuthor())
}
console.groupEnd();
