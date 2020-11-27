//Модуль через замыкание
(function () {

    const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));

    var messages = new Array();
    var user = "curentUser";


    //createdMessage(text: string, isPersonal: boolean, to: string, author: string, createdAt: Date, id: string): message
    function createdMessage(text = 'qwe', isPersonal, to, author = user, createdAt = new Date(), id = uuid()) {
        msg = {
            id: id,
            text: text,
            createdAt: createdAt,
            author: author,
        }
        if (Object.prototype.toString.call(isPersonal) === '[object Boolean]') {
            msg.isPersonal = isPersonal;
        }
        if (Object.prototype.toString.call(to) === '[object String]') {
            msg.to = to;
        }

        return msg;
    }
    //createdfilterConfig(author: string, dateFrom: Date, dateTo: Date, text: string): filterConfig
    function createdfilterConfig(author, dateFrom, dateTo, text) {

        let filterConfig = {};
        if (Object.prototype.toString.call(author) === '[object String]') {
            filterConfig.author = author;
        }
        if (Object.prototype.toString.call(dateFrom) === '[object Date]') {
            filterConfig.dateFrom = dateFrom;
        }
        if (Object.prototype.toString.call(dateTo) === '[object Date]') {
            filterConfig.dateTo = dateTo;
        }
        if (Object.prototype.toString.call(text) === '[object String]') {
            filterConfig.text = text;
        }

        return filterConfig;
    }
    //getMessageInConsole(msg: message)
    function getMessageInConsole(msg) {
        console.log('id: ' + msg.id +
            "\ntext: " + msg.text +
            "\ncreatedAt: " + msg.createdAt +
            "\nauthor: " + msg.author +
            "\nisPersonal: " + msg.isPersonal +
            "\nto: " + msg.to);
    }
    //getMessageInConsole(filterConfig: filterConfig)
    function getfilterConfigInConsole(filterConfig) {
        if (filterConfig.author !== undefined)
            console.log('author: ' + filterConfig.author);
        if (filterConfig.dateFrom !== undefined)
            console.log('\ndateFrom: ' + filterConfig.dateFrom);
        if (filterConfig.dateTo !== undefined)
            console.log('\ndateTo: ' + filterConfig.dateTo);
        if (filterConfig.text !== undefined)
            console.log('\ntext: ' + filterConfig.text);
    }



    //getMessages(skip?: number, top?: number, filterConfig?: Object): Array<message> 
    function getMessages(skip = 0, top = 10, filterConfig) {
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
    //getMessage(id: string): message
    function getMessage(id1) {
        let newId1 = messages.findIndex(item => item.id === id1);
        return messages[newId1];
    }
    //validateMessage(msg: message): boolean
    function validateMessage(msg) {
        if (msg !== undefined) {
            let fl = 0;
            for (let key in msg) {
                if ((key === "id" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
                    (key === "text" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
                    (key === "author" && Object.prototype.toString.call(msg[key]) === "[object String]") ||
                    (key === "createdAt" && Object.prototype.toString.call(msg[key]) === '[object Date]')) {
                    fl++;
                }
            }
            if (fl === 4) {
                return true;
            }
        }
        return false;
    }
    //addMessage(msg: message): boolean
    function addMessage(msg) {
        if (validateMessage(msg)) {
            if (messages.length + 1 === messages.push(msg)) {
                return true;
            }
        }
        return false;
    }
    //editMessage(id: string, msg: message): boolean
    function editMessage(id, msg) {
        let msgArray = getMessage(id);
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
    //removeMessage(id: string): boolean
    function removeMessage(id) {
        let msg = getMessage(id);
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




    function test() {

        for (let i = 0; i < 20; i++) {
            let msg = createdMessage((i).toString(),
                i % 2 === 0 ? true : false,
                i % 2 === 0 ? "qwe" : "1232453",
                user,
                new Date(Date.now() + (i % 2 === 0 ? -i * 100000 : i * 100000)));
            addMessage(msg);
        }

        getMessages(0, 10).forEach(item => {
            getMessageInConsole(item);
        });

        getMessages(10, 10).forEach(item => {
            getMessageInConsole(item);
        });

        getMessages(0, 10, { author: user }).forEach(item => {
            getMessageInConsole(item);
        });

        let msg = createdMessage(
            123,
            5 % 2 === 0 ? true : false,
            4 % 2 === 0 ? "qwe" : "1232453",
            user,
            new Date(Date.now() + (2 % 2 === 0 ? -2.5 * 100000 : 2.5 * 100000)));
        console.log(addMessage(msg));

        let filterConfig1 = createdfilterConfig(user, new Date(Date.now() + 1 * 10000), new Date(Date.now() + 1000 * 10000));
        getMessages(0, 20, filterConfig1).forEach(item => {
            getMessageInConsole(item);
        });

    }






    test();

}());
