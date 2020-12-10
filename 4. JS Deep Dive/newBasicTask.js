<<<<<<< HEAD
const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
let globalUser = 'Sacha';
let id = 0;

function createId() {
    return (++id).toString();
}


class Message {

    constructor(text = '', to = '', isPersonal = null, author = globalUser, createdAt = new Date(), id = createId()) {
        this._id = id;
        this._text = text;
        this._createdAt = createdAt;
        this._author = author;
        this.isPersonal = (to !== '') ? true : false;
        this._to = to;
    }

    set id(id) {
        try {
            if (this._id !== id) {
                throw new Error('Error');
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    set createdAt(createdAt) {
        try {
            if (this._createdAt !== createdAt) {
                throw new Error('Error');
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    set author(author) {
        try {
            if (this._author !== author) {
                throw new Error('Error');
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    set to(to) {
        if (to) {
            this._to = to;
            this.isPersonal = !!to;
        }
    }
    set text(text) {
        if (text) {
            this._text = text;
        }
=======
var user = "curentUser";
const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));

class Message {

    constructor(text = 'qwe', isPersonal, to, author = user, createdAt = new Date(), id = uuid()) {
        this._id = id;
        this.text = text;
        this._createdAt = createdAt;
        this._author = author;
        this.isPersonal = isPersonal
        this.to = to;
    }

    set id(value) {
        //this._id = value;
    }
    set createdAt(createdAt) {
        //this._createdAt = createdAt;
    }
    set author(author) {
        //this._author = author;
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
    }

    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get author() {
        return this._author;
    }
<<<<<<< HEAD
    get to() {
        return this._to;
    }
    get text() {
        return this._text;
    }
=======

>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
}

class MessageList {

    //constructor(msgs: Array<Message>)
<<<<<<< HEAD
    constructor(messages) {
        this._messages = [];
        messages.forEach((msg) => (MessageList.validate(msg) ? this._messages.push(msg) : console.log(msg)));
=======
    constructor(msgs = [new Message()]) {
        this.msg = [msgs];
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
    }

    //getPage(skip?: number, top?: number, filterConfig?: Object): Array<Message>
    getPage(skip = 0, top = 10, filterConfig) {
        let newMessages = new Array();
<<<<<<< HEAD
        newMessages = this._messages.slice(skip, skip + top);
=======
        newMessages = messages.slice(skip, skip + top);

>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
        for (let key in filterConfig) {

            if (Object.prototype.toString.call(filterConfig[key]) === '[object Date]' && key === "dateFrom") {
                let a = [];
                newMessages.forEach(item => {
                    if (item.createdAt < filterConfig.dateFrom) {
                        a.push(newMessages.indexOf(item, 0));
                    }
                });
                a.reverse();
                for (let i = 0; i < a.length; i++) {
                    newMessages.splice(a[i], 1)
                }
            }

            if (Object.prototype.toString.call(filterConfig[key]) === '[object Date]' && key === "dateTo") {
                let a = [];
                newMessages.forEach(item => {
                    if (item.createdAt > filterConfig.dateTo) {
                        a.push(newMessages.indexOf(item, 0));
                    }
                });
                a.reverse();
<<<<<<< HEAD
                for (let i = 1; i < a.length; i++) {
=======
                for (let i = 0; i < a.length; i++) {
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
                    newMessages.splice(a[i], 1);
                }
            }

            if (Object.prototype.toString.call(filterConfig[key]) === '[object String]' && key === "author") {
                let a = [];
                newMessages.forEach(item => {
                    if (item.author !== filterConfig.author) {
                        a.push(newMessages.indexOf(item, 0));
                    }
                });
                a.reverse();
                for (let i = 0; i < a.length; i++) {
                    newMessages.splice(a[i], 1);
                }
            }

            if (Object.prototype.toString.call(filterConfig[key]) === '[object String]' && key === "text") {
                let a = [];
                newMessages.forEach(item => {
                    if (item.text !== filterConfig.text) {
                        a.push(newMessages.indexOf(item, 0));
                    }
                });
                a.reverse();
                for (let i = 0; i < a.length; i++) {
                    newMessages.splice(a[i], 1)
                }
            }
        }

        newMessages.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return 1;
            }
            if (a.createdAt < b.createdAt) {
                return -1;
            }
            return 0;
        });

        return newMessages;
    }

    //get(id: string): Message
    get(id1) {
<<<<<<< HEAD
        //this.getMessageInConsole(this._messages[this._messages.findIndex(item => item.id === id1)]);
        return this._messages[this._messages.findIndex(item => item.id === id1)];
=======
        let newId1 = messages.findIndex(item => item.id === id1);
        return messages[newId1];
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
    }

    //add(msg: message): boolean
    add(msg) {
        if (MessageList.validate(msg)) {
<<<<<<< HEAD
            this._messages.push(msg);
=======
            if (this.length + 1 === this.push(msg)) {
                return true;
            }
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
        }
        return false;
    }

    //edit(id: string, msg: message): boolean
    edit(id, msg) {
<<<<<<< HEAD
        let msgArray = this.get(id);
        if (msgArray !== undefined && msgArray.author === msg.author) {
            for (let keyMsg in msg) {
                for (let key in msgArray) {
                    if (keyMsg === key && keyMsg !== "_id" && keyMsg !== "_author" && keyMsg !== "_createdAt") {
=======
        let msgArray = get(id);
        if (msgArray !== undefined) {
            for (let keyMsg in msg) {
                for (let key in msgArray) {
                    if (keyMsg === key && keyMsg !== "id" && keyMsg !== "author" && keyMsg !== "createdAt") {
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
                        msgArray[key] = msg[keyMsg];
                    }
                }
            }
            return true;
        }
        return false;
    }

    //remove(id: string): boolean 
    remove(id) {
<<<<<<< HEAD
        let msg = this.get(id);
        let i = 0;
        this._messages.forEach((item) => {
            if (item.id === msg.id && item.author === globalUser) {
                this._messages.splice(i, 1);
=======
        let msg = get(id);
        let i = 0;
        messages.forEach(function (item) {
            if (item === msg) {
                messages.splice(i, 1);
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
                return true;
            }
            i++;
        });
        return false;
    }

    //static validate(msg: Message): boolean
    static validate(msg) {
        if (msg !== undefined) {
            let fl = 0;
            for (let key in msg) {
                if ((key === "_id" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
<<<<<<< HEAD
                    (key === "_text" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
=======
                    (key === "text" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
                    (key === "_author" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
                    (key === "_createdAt" && Object.prototype.toString.call(msg[key]) === '[object Date]')) {
                    fl++;
                }
            }
            if (fl === 4) {
                return true;
            }
        }
        return false;
    }

<<<<<<< HEAD
    getMessageInConsole(msg) {
        console.log('id: ' + msg.id +
            "\ntext: " + msg.text +
            "\ncreatedAt: " + msg.createdAt +
            "\nauthor: " + msg.author +
            "\nisPersonal: " + msg.isPersonal +
            "\nto: " + msg.to);
        return true;
    }

    //addAll(msgs: Array<Message>): Array<Message> 
    addAll(msgs) {
        let arrMesg = [];
        msgs.map((msg) => (MessageList.validate(msg) ? this._messages.push(msg) : arrMesg.push(msg)));
        return arrMesg;
    }
    //clear()
    clear() {
        this._messages = [];
    }
}


let mess = [
    new Message('Сообщение1', 'Anna', true, 'Sacha', new Date('2020-11-12T20:05:00')),
    new Message('Сообщение2', 'Sacha', true, 'Anna', new Date('2020-11-12T20:06:00')),
    new Message('Сообщение3', 'Anna', true, 'Ivan', new Date('2020-11-12T20:08:00')),
    new Message('Сообщение4', 'Sacha', true, 'Ivan', new Date('2020-11-12T20:06:00')),

    new Message('Сообщение5', 'Ivan', true, 'Sacha', new Date('2020-11-12T20:07:00')),

    new Message('Сообщение6', 'Anna', true, 'Ivan', new Date('2020-11-12T20:10:00')),
    new Message('Сообщение7', '', false, 'Sergey', new Date('2020-11-12T20:01:00')),
    new Message('Сообщение8', '', false, 'Sacha', new Date('2020-11-12T20:13:00')),
    new Message('Сообщение9', 'Sergey', true, 'Anna', new Date('2020-11-12T20:24:00')),
    new Message('Сообщение10', '', false, 'Pavel', new Date('2020-11-12T20:13:00')),
    new Message('Сообщение11', 'Чубака', true, 'Антон', new Date('2020-11-12T20:16:00')),
    new Message('Сообщение12', '', false, 'Рома', new Date('2020-11-12T20:18:50')),
    new Message('Сообщение13', 'Anna', true, 'Саша', new Date('2020-11-12T20:14:00')),
    new Message('Сообщение14', '', false, 'Чубака', new Date('2020-11-12T20:20:00')),
    new Message('Сообщение15', '', false, 'Энакин', new Date('2020-11-12T20:21:30')),
    new Message('Сообщение16', '', false, 'Полина', new Date('2020-11-12T20:21:00')),
    new Message('Сообщение17', '', false, 'Костя', new Date('2020-11-12T20:22:50')),
    new Message('Сообщение18', '', false, 'Victoriy', new Date('2020-11-12T20:20:00')),
    new Message('Сообщение19', '', false, 'Sergey', new Date('2020-11-12T20:23:00')),
    new Message('Сообщение20', '', false, 'Victoriy', new Date('2020-11-12T20:22:00')),
    new Message('Сообщение21', '&&&&',),
];

const messages = new MessageList(mess);
console.log('All messages: ', messages);

console.log('Mesg  id = 1');
console.log(messages.get('1'));
console.log('Mesg  id = 14');
console.log(messages.get('14'));

console.log('Тест 1 add() = {text: Тест 1, to: Victoriy}');
let test1Mes = new Message('Тест 1', 'Victoriy');
messages.add(test1Mes);
console.log(messages.get('22'));

console.log('');
console.log('Редактирование user !== автор');
let test2Mes = new Message('Тест 2', '', '', 'Anna');
console.log(messages.get('5'));
messages.edit('5', test2Mes);
console.log(messages.get('5'));

console.log('');
console.log('Редактирование user === автор');
let test3Mes = new Message('Тест 3', '', '', 'Sacha');
console.log(messages.get('5'));
messages.edit('5', test3Mes);
console.log(messages.get('5'));

console.log('Remove id = 2 and user !== author');
console.log(messages.remove('2'));
console.log(messages.get('2'));

console.log('Remove id = 5 and user === author');
console.log(messages.remove('5'));
console.log(messages.get('5'));

console.log('All messages: ', messages);

console.log('filterConfig { text: Сообщение7, dateTo: 2020-11-12T19:30:00 }');
console.log(messages.getPage(0, 10, { text: 'Сообщение7', dateTo: new Date('2020-11-12T19:30:00') }));

console.log('Clear');
messages.clear();
console.log(messages);

console.log('addAll', messages.addAll(mess));
console.log(messages);
=======

    //addAll(msgs: Array<Message>): Array<Message> 

    //clear()

    //Добиться неизменяемости полей id, createdAt и author с помощью get/set.

}

let mess = new MessageList ();
let mess1 = new Message();
console.log(mess);
mess.push(mees1);
console.log(mess.add(new Message));

console.log(mess[0]);
console.log(mess);

let mes = new Message();

console.log(mes.id = 6);
console.log(mes);
>>>>>>> 01d42284d06296cc2cea43aee279c6fc5329cf67
