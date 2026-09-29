/*
Class is a blueprint for creating objects. It defines the properties and methods that the objects will have.

class is special type of function that is used to create objects. It is called with the new keyword and initializes the properties of the object.
example:
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  let user1 = new User("John", 30);
  user1.greet(); // Output: Hello, my name is John and I am 30 years old.
}
Constructor method is a special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created.

typeof class:function;

Typeof class methods:
1. Constructor: The method used to create and initialize an object.
2. Instance methods: Methods that are called on an instance of the class.
3. Static methods: Methods that are called on the class itself, not on instances of the class.

Inheritance is a mechanism that allows a class to inherit properties and methods from another class. The class that inherits is called the subclass, and the class being inherited from is called the superclass.

class Animal {
  constructor(name) {
    this.name = name;
  }
    speak() {
    console.log(`${this.name} makes a sound.`);
    }
    eat() {
    console.log(`${this.name} is eating.`);
  }
}

extends keyword is used to create a subclass that inherits from a superclass.

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the superclass
    this.breed = breed;
  }
    speak() {
    console.log(`${this.name} barks.`);
}   
}

super() keyword is used to call the constructor of the superclass. It must be called before using this in the subclass constructor.

calling super.speak() in the subclass method will call the speak() method of the superclass.

calling super() makes sure that SuperConstructor() gets called and initalizes the instance



*/