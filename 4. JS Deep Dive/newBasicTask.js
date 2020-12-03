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
    constructor(msgs = [new Message()]) {
        this.msg = [msgs];
    }

    //getPage(skip?: number, top?: number, filterConfig?: Object): Array<Message>
    getPage(skip = 0, top = 10, filterConfig) {
        let newMessages = new Array();
        newMessages = messages.slice(skip, skip + top);

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
                for (let i = 0; i < a.length; i++) {
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
        let newId1 = messages.findIndex(item => item.id === id1);
        return messages[newId1];
    }

    //add(msg: message): boolean
    add(msg) {
        if (MessageList.validate(msg)) {
            if (this.length + 1 === this.push(msg)) {
                return true;
            }
        }
        return false;
    }

    //edit(id: string, msg: message): boolean
    edit(id, msg) {
        let msgArray = get(id);
        if (msgArray !== undefined) {
            for (let keyMsg in msg) {
                for (let key in msgArray) {
                    if (keyMsg === key && keyMsg !== "id" && keyMsg !== "author" && keyMsg !== "createdAt") {
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
        let msg = get(id);
        let i = 0;
        messages.forEach(function (item) {
            if (item === msg) {
                messages.splice(i, 1);
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
                    (key === "text" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
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
