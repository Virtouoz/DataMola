// let item = ['one', 'two', 'three'];
// let itemNew = item;
// item = ['new', 'Array'];
// console.log(item !== itemNew);

// item = 'test';
// itemNew = item;
// item += 'ing';
// console.log(item !== itemNew);
// console.log(item.indexOf('es'));
// console.log(item.toUpperCase());
// console.log(item);

// let foo = 'test';
// if (true) {
//     foo = 'new test';
//     console.log(foo);
// }
// console.log(foo);
// console.log(foo === 'new test');

// function test() {
//     foo = 'old test';
// }

// test();
// console.log(foo);
// console.log(window.foo);

// function test() {
//     foo = 'test';
// }

// test();

// console.log(window.foo === 'test');

function setFoo(fooInput) {
    this.foo = fooInput;
}

var foo = 5;
console.log('foo at the widow level is set to: ' + foo);

var obj = {
    foo: 10
};

console.log('foo inside of obj is set to: ' + obj.foo);

setFoo(15);
console.log('foo at the window level is now set to : ' + foo);

obj.setFoo = setFoo;
obj.setFoo(20);
console.log('foo inside of obj is now set to: ' + obj.foo);
console.log('foo inside of obj is now set to: ' + foo);
