// fetch('https://api.chucknorris.io/jokes/random1')
//     .then((response) => {
//         if (response.status !== 200) {
//             throw new Error("Not ok!!");
//         }
//         return response.json()
//     })
//     .then(data => key(data))
//     .catch((err) => console.log(err));

// function key(data) {
//     for (const key in data) {
//         console.log(data[key]);
//     }
// }



let A = () => {
    let tr = document.createElement('tr');
    let column1 = createElement('td',[column1],tr);
};













function getJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(response => response.value)
}

function setTime(timeot, value, fail) {
    return new Promise((resolve, reject) => {
        setTimeout(fail ? reject : resolve, timeot, value);
    });
}

getJoke()
    .then(console.log);

Promise.all([setTime(1000, 'a'), setTime(1500, 'b'), setTime(500, 'c')])
    .then(console.log);

Promise.allSettled([setTime(1000, 'a', true), setTime(1500, 'b'), setTime(500, 'c')])
    .then(console.log);

Promise.any([setTime(900, 'a', true), setTime(1500, 'b'), setTime(500, 'c'),])
    .then((response) => console.log('any:') || response)
    .then((response) => console.log(response));

Promise.race([setTime(1000, 'a', true), setTime(1500, 'b'), setTime(500, 'c')])
    .then(console.log);


//*Reduce
const arr = [setTime(1000, 'a', true), setTime(1500, 'b'), setTime(500, 'c'),
getJoke(), getJoke(), getJoke(), getJoke()];

// arr.reduce((acc, elem) => {
//     return acc.then(elem)
// }, Promise.resolve())
//     .then((r) => console.log('reduce: ', r));

const data = [];
arr.reduce((acc, elem) => {
    return acc.then((r) => {
        if (r) {
            data.push(r);
        }

        return elem;
    })
}, Promise.resolve())
    .then((r) => console.log('reduce:', data));

const dataNew = [];
arr.reduce(async (acc, elem) => {
    const r = await acc;
    if (r) {
        dataNew.push(r);
    }

    return elem;
}, Promise.resolve())
    .then((r) => console.log('rduceNew:', dataNew));

async function newFoo() {
    try {
        const r = await setTime(1000, 'await', dataNew);
        console.log('asyn foo:', r);
        return r;
    } catch (e) {
        console.error('error');
    }
    const r = await getJoke();
    console.log('asyn foo:  ', r);
}



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://46.101.141.135:3000/users", requestOptions)
    .then(response => {
        response.json();
        console.log();
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



var formdata = new FormData();
formdata.append("name", "dimas");
formdata.append("pass", "********");

var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

fetch("http://46.101.141.135:3000/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
