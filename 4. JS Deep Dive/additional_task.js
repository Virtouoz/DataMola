//Задание 1
//Реализовать однонаправленный список.

class Node {
    constructor(number = 0, next1 = null) {
        this.value = number;
        this.next = next1;
    }

}

class List {
    //constructor(root:? Node)
    constructor(value = new Node) {
        this.root = value;
    }
    //addNode(value: number, i?: number): boolean
    addNode(value, i) {
        let number = new Node(value);
        let a = this.root;
        if (i === undefined) {
            while (a.next) {
                a = a.next;
            }
            a.next = number;
            number.next = null;
            return true;
        } else if (i >= 0 && i <= this.lengthList()) {
            if (i === 0) {
                number.next = this.root.next;
                this.root.next = number;
                return true;
            }
            for (let j = 0; j < i; j++) {
                a = a.next;
            }
            number.next = a.next;
            a.next = number;
            return true;
        } else {
            return false;
        }
    }
    //removeNode(i?: number): boolean
    removeNode(i) {
        let a = this.root;
        if (i === undefined || i === this.lengthList()) {
            while (a.next.next) {
                a = a.next;
            }
            delete a.next;
            a.next = null;
            return true;
        } else if (i >= 0 && i < this.lengthList()) {
            if (i === 0) {
                this.root = this.root.next;
                //delete a;
            }
            for (let j = 0; j < i - 1; j++) {
                a = a.next;
            }
            let b = a.next;
            a.next = a.next.next;
            //delete b;
            return true
        } else {
            return false;
        }
    }
    //print()
    print() {
        let list = this.root;
        let array = list.value;
        list = list.next;
        while (list !== null) {
            array = array + ', ' + list.value;
            list = list.next;
        }
        console.log(array);
    }
    lengthList() {
        let tmp = this.root;
        let i = 0;
        while (tmp) {
            i++;
            tmp = tmp.next;
        }
        return i;
    }
}

let list = new List();
list.print();
console.log(list.lengthList());
list.addNode(1, 0);
list.print();
console.log(list.lengthList());
list.addNode(2, 1);
list.print();
console.log(list.lengthList());
list.addNode(3, 2);
list.print();
console.log(list.lengthList());
list.removeNode(4)
list.print();
console.log(list.lengthList());
list.removeNode()
list.print();
console.log(list.lengthList());



//Задание 2
//Реализовать арифметику в функциональном стиле.
/*
function add(number1, number2) {
    if (number2 !== undefined) {
        return number1 + number2;
    } else {
        return function add(number) {
            return number + number1;
        }
    }
}
function sub(number1, number2) {
    if (number2 !== undefined) {
        return number1 - number2;
    } else {
        return function sub(number) {
            return number - number1;
        }
    }
}
function mul(number1, number2) {
    if (number2 !== undefined) {
        return number1 * number2;
    } else {
        return function mul(number) {
            return number * number1;
        }
    }
}
function div(number1, number2) {
    if (number2 !== undefined) {
        return number1 / number2;
    } else {
        return function div(number) {
            return number / number1;
        }
    }
}
//pipe()
function pipe(funcNumber, ...theArgs) {
    return function pipe(number) {
        number = funcNumber(number);
        for (let i = 0; i < theArgs.length; i++) {
            number = theArgs[i](number);
        }
        return number;
    }
}

let a = add(1, 2); // 3
console.log(a);
let b = mul(a, 10); // 30
console.log(b);
let sub1 = sub(1); // sub1 отнимает от любого числа единицу
let c = sub1(b); // 29
console.log(c);
let d = mul(sub(a, 1))(c); // 58
console.log(d);
let doSmth = pipe(add(d), sub(c), mul(b), div(a)); // функция, последовательно выполняющая эти операции.
let result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
console.log(result);
let x = pipe(add(1), mul(2))(3); // 8
console.log(x);
*/