function valueItem(item) {
    li = document.createElement('li');
    li.textContent = item.value;
    return li;
}

function check(ul, li, item) {
    ul.appendChild(li);
    if (item.children)
        childrenNode(item, li);
}

function childrenNode(node, li) {
    let child;

    node.children.forEach((item) => {
        child = valueItem(item);
        let ul = document.createElement('ul');
        li.appendChild(ul);
        check(ul, child, item);
    });
};

function createList(title, list) {
    let newFrag = new DocumentFragment();
    let titleHtml = document.createElement('h2');

    titleHtml.textContent = title;
    newFrag.appendChild(titleHtml);

    let ul = document.createElement('ul');

    list.forEach((item) => {
        let li = valueItem(item);
        check(ul, li, item);
    });

    newFrag.appendChild(ul);
    document.getElementById('body').append(newFrag);
};

let list = [
    {
        value: 'Пункт 1.',
        children: null,
    },
    {
        value: 'Пункт 2.',
        children: [
            {
                value: 'Подпункт 2.1.',
                children: null,
            },
            {
                value: 'Подпункт 2.2.',
                children: [
                    {
                        value: 'Подпункт 2.2.1.',
                        children: null,
                    },
                    {
                        value: 'Подпункт 2.2.2.',
                        children: null,
                    }
                ],
            },
            {
                value: 'Подпункт 2.3.',
                children: null,
            }
        ]
    },
    {
        value: 'Пункт 3.',
        children: null,
    }
];

createList('Список', list);
