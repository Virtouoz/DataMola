let arr = [1, 2, 3];

alert(arr.__proto__ === Array.prototype);

const proto = { a: 1 };

const obj = { b: 2 };

Object.setPrototypeOf(obj, proto);

for (let key in obj) console.log(key);

Object.keys(obj);

Object.getPrototypeOf(obj);

function f() {
    return this.a;
}

const obj1 = { a: 1, b: { a: 2 }, f };

//console.log(obj1.f());
//console.log(obj1.b.f());

function sum(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const increment = sum.bind(null, 1);

console.log(increment(1));


class Point {
    _a1 = 1;
    _b1 = 1;

    getA1() {
        return this._a1;
    }

    getB1() {
        return this._b1;
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x + this._a1}, ${this.y + this.getB1()})`;
    }
}

const point = new Point(2, 2);
console.log(point + '!');