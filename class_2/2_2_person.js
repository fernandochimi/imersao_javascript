var person_one = {age: 26, name: "John"};
var person_two = {age: 23, name: "Mary"};

function person() {
    console.log("My name is: " + this.name + " and I have " + this.age + "years old.");
    console.log(this);
}

person_one.print = person;
person_two.print = person;