class Message {
    constructor(text = '', to = 'curentUser', createdAt = new Date(), author = 'curentUser', isPersonal = false, id = 0) {
        this._id = id;
        this.text = text;
        this._createdAt = createdAt;
        this._author = author;
        this.isPersonal = isPersonal // ?? !!to;          // ?? - если не null и indef то 1 иначе 2 аргумент
        this.to = to;
    }

    set id(value) {
        this._id = value;
    }
    set createdAt(createdAt) {
        this._createdAt = createdAt;
    }
    set author(author) {
        this._author = author;
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
}

class MessageList {
    //constructor(msgs: Array<Message>)
    constructor(msgs) {
        this.msgs = msgs;
    }
    //addMessage(msg: message): boolean
    add(msg) {
        if (MessageList.validate(msg)) {
            this.msgs.push(msg);
            return true;
        }
        return false;
    }
    //rmoveMessage(id: string): boolean
    remove(id) {
        if (id >= 0) {
            const idx = messages.findIndex((message) => message.id === id);
            if (idx !== -1) {
                messages.splice(idx, 1);
                return true;
            }
        }
        return false;
    }
    //getMessage(id: string): message
    get(id) {
        if (id >= 0) {
            let idNew = id;
            const message = messages.find(({ id }) => idNew === id);
            if (messages === undefined)
                return false;
            return message;
        }
        return false;
    }
    //editMessage(id: string, msg: message): boolean
    edit(id, msg) {
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
    //getPage(skip?: number, top?: number, filterConfig?: Object): Array<message> 
    getPage(skip = 0, top = 10, filterConfig) {
        let array = messages.slice(skip, top);
        if (filterConfig !== undefined) {
            let { author, dateFrom, dateTo, text } = filterConfig[0];
            let author1 = author,
                text1 = text;
            console.log("text: " + text1 + "\ndateFrom: " + dateFrom + "\ndateTo: " + dateTo + "\nauthor: " + author1);
            if (author1 === true) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                array.sort((a, b) => a.author > b.author ? 1 : -1);
            }
            if (text1 === true) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                array.sort((a, b) => a.text > b.text ? 1 : -1);
            }
            if ((dateFrom !== undefined) && (dateTo !== undefined)) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                //array = array.filter(({ createdAt }) => (createdAt >= dateFrom && createdAt <= dateTo));
                if (array !== undefined) {
                    array.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
                }
            }
        }
        return array;
    }
    //static validate(msg: message): boolean
    static validate(msg) {
        let flag = 0;
        if ((msg.text.length >= 0)
            && (msg.author.length >= 0)
            && (msg.isPersonal === true || msg.isPersonal === false)
            && (msg.to.length >= 0))
            return true;
        return false;
    }

    addAll(msgs) {

        return msgs;
    }

    clear() {

    }
}

let message = new Message('text', 'to', Date(), 'author', true, 12);
console.log(message);
let message2 = new Message('text2', 'to2', Date(), 'author2', true, 22);
console.log(message2);
let a = message;
console.log('id: ' + a.id + "\ntext: " + a.text + "\ncreatedAt: " + a.createdAt + "\nauthor: " + a.author + "\nisPersonal: " + a.isPersonal + "\nto: " + a.to);
let b = [{ message }, { message }];
let messageList = new MessageList(b);

console.log(messageList);
console.log('----------------------');
//

messageList.add(message2);

console.log(messageList);


a = messageList[0];
console.log('id: ' + a.id + "\ntext: " + a.text + "\ncreatedAt: " + a.createdAt + "\nauthor: " + a.author + "\nisPersonal: " + a.isPersonal + "\nto: " + a.to);
