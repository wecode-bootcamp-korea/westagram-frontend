function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! My name is ' + this.name);
    };
  }

  const person1 = new Person('asdf', 'asdf');
  const person2 = new Person('asdd0', 'aasdf');

person1.sayHello();
person2.sayHello();

console.log(`person1: `, typeof person1 );