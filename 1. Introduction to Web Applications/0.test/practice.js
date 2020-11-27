const ul = document.getElementById('ul');
const li = document.querySelectorAll('li');
const inp = ul.querySelectorAll('input');

const form = document.forms[0];
const textAr = form.elements[0];

const todo = JSON.parse(localStorage.getItem("key"));
for (let i of todo) {
    addLiView(i.name, i.check);
}

form.addEventListener('submit', (event) => {
    console.log('submit: ', textAr.value);
    addLi(textAr.value);
    textAr.value = '';
    event.preventDefault();
});
/*
for (let el of li) {
    liEvent(el);
}*/

ul.addEventListener('click', (event) => {
    console.log('about: ', event.target);

    const input = event.target.closet('input');
    console.log(input);
    if (input) {
        onChecked(event);
    }

    if (event.target.closet('li')) {
        console.log('liiiiiiiiiiii');
    }
});

function liEvent(elem) {
    elem.addEventListener('click', stopProp);
    elem.querySelector('input').addEventListener('click', onChecked);
}


function onChecked(event) {
    console.log(event.target);
    event.stopPropagation();
}

function stopProp(event) {
    console.log("stop propagation");
    event.stopPropagation();
}

function addLiView(value, check = false) {
    const newLi = document.createElement('li');
    const newLabel = document.createElement('label');
    newLabel.innerText = value;
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    // if (check) {
    newInput.checked = check;
    //}
    newLabel.appendChild(newInput);
    newLi.appendChild(newLabel);
    ul.appendChild(newLi);
}

function addLi(value) {
    addLiView(value);
    todo.push({ name: value, check: false });
    console.log(todo);
    localStorage.setItem('key', JSON.stringify(todo));
}
