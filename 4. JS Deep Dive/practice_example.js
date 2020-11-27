class Messages {
    //Валидация
    //GUID для id 128 битный
    constructor(text = '', to = null, createdAt = null, author = null, isPersonal = null, id = null) {

        this.id = id || created.createdId();
        this.text = text;
        this.createdAt = createdAt || new Date();
        this.author = author || curentUser;
        this.isPersonal = isPersonal ?? !!to;  // ?? - если не null и indef то 1 иначе 2 аргумент
        this._to = to;
    }

    _validMessage() {
        return true;
    }

    validEditMessage(text, to) {
        return true;
    }

    writeMessages() {
        console.log(this.id + '. ' + this.author + ': ' + this.createdAt + '' + this.isPersonal);
    }
    set to() {
        if (1) { }
        this._to = to;
        this.isPersonal = !!to
    }
    get to() {
        return this._to;
    }
    //Date время только сегодня 
    set createdAt() {
        this._createdAt = to;
        this.createdAt = !!to;
    }
    get createdAt() {
        return this._createdAt;
    }
    editMessage(editObj = {}) {
        let { text, to } = editObj;
        if (this.validEditMessage(text, to)) {
            this.to = to;     // set to()
            this.text = text;
        }
    }
}

class Page { }

class MessagesList {
    _arr = [];
    // _totalLength
    // количество подгружаемых сообщений

    constructor(arr) {
        this._arr = arr;
    }

    addMessage(text = '', to = null, createdAt = null, author = null, isPersonal = null, id = null) {
        const a = new Messages(text, to, createdAt, author, isPersonal, id);
        if (a.valid()) {
            this._arr.push(a);
            return true;
        }
        return false;
    }

    get messages() {
        return this._arr;
    }

    get length() {

    }

    editMessage(idnew, text, to) {
        const message = this._arr.find(({ id }) => idnew === id);
        if (message) {
            const obj = { text: text, to: to };
            message.editMessage(obj);
            return true;
        }
        return false;
    }

    removMessage(mes) {
        const idx = this._arr.findIndex((message) => message.id === mes.id);
        if (idx !== -1) {
            this._arr.splice(idx, 1);
            return true;
        }
        return false;
    }

}
