// var , let , const

// let score;
// score = 10;
// console.log(score);

// const score = 10;
// console.log(score)
// // DATA  TYPE
// //strings, numbers, boolean, null, undefined;

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);

// const name = 'John';
// const age = 30;

// //concatenation
// // console.log('My name is Name and i am age');
// console.log('My name is ' + name + ' and I am ' + age);
// //template string
// const hello = `My name is ${name} and i am ${age}`;

// console.log(hello);

// console.log(s.split(', '));

// //ARRAYS-variable that holds multiple values

// const fruits = ['apples', 'oranges', 'grapes', 'papaya'];

// fruits[4] = 'peaches';

// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['playing', 'reading', 'movies'],
//   address: {
//     street: 'ploymet 50st',
//     city: 'balcont',
//     state: 'AndhraPradesh',
//   },
// };

// // console.log(person.address.city);

// // const {
// //   firstName,
// //   lastName,
// //   address: { city },
// // } = person;

// // console.log(city);
// // person.email = 'john@gmail.com';
// // console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: 'Take Out Trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Dentist opt',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Meeting with Boss',
//     isCompleted: false,
//   },
// ];

// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//for

// for (let i = 0; i <= 10; i++) {
//   console.log(`for Loop Number:${i}`);
// }

// //while

// let i = 0;
// while (i < 10) {
//   console.log(`While Loop Number:${i}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

//forEach , map, filter
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });
// const todoComplete = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoComplete);

// const x = 10;
// const y = 11;

// if (x > 5 && y > 10) {
//   console.log('x is more than 5 or y is more than 10');
//   // } else if (x > 10) {
//   //   console.log('x is greater than 10');
//   // } else {
//   //   console.log('x is less than 10');
// }

// if (x > 5) {
//   if (y > 10) {
//   }
// }

// const x = 9;

// const color = 'green';

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// }

// const addNums = (num1) => num1 + 5;
// console.log(addNums(5));
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// // // instantiate object
// const person1 = new Person('John', 'Doe', 4 - 3 - 1970);
// const person2 = new Person('ploy', 'pi', 31 - 1 - 2001);

// console.log(person1.dob.getFullYear());
// console.log(person1.getBirthYear());

// console.log(person1.getFullName());

// console.log(person2.getFullName());
// console.log(person1);
// console.log(window);

// alert(1);
//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multiple elements
// console.log(document.querySelectorAll('.Item'));
// console.log(document.getElementsByClassName('Items'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.Items');
// items.forEach((Items) => console.log(Items));
// const ul = document.querySelector('.Items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'ploy';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   //   console.log(e.target);
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.Items').lastElementChild.innerHTML =
//     '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please Enter Your Fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
