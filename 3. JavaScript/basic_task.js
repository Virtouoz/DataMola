const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));

class Message {
    constructor(text = '', to = 'curentUser', createdAt = new Date(), author = 'curentUser', isPersonal = false, id = uuid()) {
        this.id = id;
        this.text = text;
        this.createdAt = createdAt;
        console.log(this.createdAt);
        this.author = author;
        this.isPersonal = isPersonal // ?? !!to;          // ?? - если не null и indef то 1 иначе 2 аргумент
        this.to = to;
    }
}

let messages = [
    {
        id: 1,
        text: 'Привет!',
        createdAt: new Date('2020-10-12T23:00:50'),
        author: 'Иванов Иван',
        isPersonal: true,
        to: 'Петров Петр'
    },
    {
        id: uuid(),
        text: 'Привет!',
        createdAt: new Date('2020-10-12T22:01:00'),
        author: 'Петров Петр',
        isPersonal: true,
        to: 'Иванов Иван'
    },
    {
        id: 3, //---ИСПРАВИТЬ-------------------------------------
        text: 's',//---ИСПРАВИТЬ------------------------------------
        createdAt: new Date('2020-10-12T21:02:00'),
        author: 'Иванов Иван',
        isPersonal: true,
        to: 'Петров Петр'
    },
    {
        id: uuid(),
        text: 'Нормально!',
        createdAt: new Date('2020-10-12T20:02:00'),
        author: 'Петров Петр',
        isPersonal: true,
        to: 'Иванов Иван'
    }
];

//addMessage(msg: message): boolean
function addMessage(msg) {
    if (validateMessage(msg)) {
        messages.push(msg);
        return true;
    }
    return false;
}
//rmoveMessage(id: string): boolean
function removeMessage(id) {
    if (id !== -1) {
        const idx = messages.findIndex((message) => message.id === id);
        if (idx !== -1) {
            messages.splice(idx, 1);
            return true;
        }
    }
    return false;
}
//getMessage(id: string): message
function getMessage(id) {
    if (id !== -1) {
        let idNew = id;
        const message = messages.find(({ id }) => idNew === id);
        return message;
    }
    return false;
}
//editMessage(id: string, msg: message): boolean
function editMessage(id, msg) {
    if ((id >= 0) && (validateMessage(msg))) {
        let { text, isPersonal, to } = msg;
        let idNew = id;
        let message = messages.find(({ id }) => idNew === id);
        if (message === undefined) {
            return false;
        } else {
            if (text !== undefined) {
                message.text = text;
            }
            if (isPersonal !== undefined) {
                message.isPersonal = isPersonal;
            }
            if (to !== undefined) {
                message.to = to;
            }
            return true;
        }
    }
    return false;
}
//getMessages(skip?: number, top?: number, filterConfig?: Object): Array<message> 
function getMessages(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;
    let array = messages.slice(skip, top);
    if (filterConfig !== undefined) {
        let { author, dateFrom, dateTo, text } = filterConfig;
        let author1 = author,
            text1 = text;
        console.log("text: " + text1 + "\ndateFrom: " + dateFrom + "\ndateTo: " + dateTo + "\nauthor: " + author1);
        if (author1 !== undefined) {
            array = array.filter(({ author }) => author === author1);
        }
        if (text1 !== undefined) {
            array = array.filter(({ text }) => text === text1);
        }
        if ((dateFrom !== undefined) && (dateTo !== undefined)) {
            array = array.filter(({ createdAt }) => (createdAt >= dateFrom && createdAt <= dateTo));
        }
    }
    return array;
}
//validateMessage(msg: message): boolean
function validateMessage(msg) {
    const data = { dateFrom: new Date('2019-10-12T21:01:00'), dateTo: new Date('2021-10-12T21:03:00') };
    let flag = 0;
    if ((msg.id.length === uuid().length)
        && (msg.text.length >= 0)
        && (msg.author.length >= 1)
        && (msg.isPersonal === true || msg.isPersonal === false)
        && (msg.to.length >= 0)
        && (msg.createdAt >= data.dateFrom)
        && (msg.createdAt <= data.dateTo))
        return true;
    return false;
}



const a1 = { text: 's', dateFrom: new Date('2020-10-12T21:01:00'), dateTo: new Date('2020-10-12T21:03:00'), author: 'Иванов Иван' };
//console.log(getMessages(0, 10, a1));

const msg1 = new Message('Hi', 'Иван иваныч',new Date(), 'my', true, uuid());
addMessage(msg1);



for (let i = 0; i < 5; i++) {
    const msg = new Message();
    addMessage(msg);
}

//console.log(getMessage(3));

const msg = new Message();
//console.log(editMessage(3, { to: 'hi' }));
//console.log(removeMessage(1));
//console.log(removeMessage(4));
//console.log(getMessage(3));

let a;
for (let i = 0; i < messages.length; i++) {
    console.log('id: ' + messages[i].id + "\ntext: " + messages[i].text + "\ncreatedAt: " + messages[i].createdAt + "\nauthor: " + messages[i].author + "\nisPersonal: " + messages[i].isPersonal + "\nto: " + messages[i].to);
    a = getMessage(messages[i].id);
}

//console.log('id: ' + a.id + "\ntext: " + a.text + "\ncreatedAt: " + a.createdAt + "\nauthor: " + a.author + "\nisPersonal: " + a.isPersonal + "\nto: " + a.to);


