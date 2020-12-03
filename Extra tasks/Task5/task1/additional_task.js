function createCalendar(containerId, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let newTable = new DocumentFragment();
    let elem;
    for (let i = 1; i < 8; i++) {
        elem = document.createElement('th');
        switch (i) {
            case 1:
                elem.textContent = 'пн';
                break;
            case 2:
                elem.textContent = 'вт';
                break;
            case 3:
                elem.textContent = 'ср';
                break;
            case 4:
                elem.textContent = 'чт';
                break;
            case 5:
                elem.textContent = 'пт';
                break;
            case 6:
                elem.textContent = 'сб';
                break;
            case 7:
                elem.textContent = 'вс';
                break;

            default:
                elem.textContent = 'error';
                break;
        }
        newTable.appendChild(elem);
    }

    elem = document.createElement('tr');
    newTable.appendChild(elem);

    for (let i = 0; i < getDay(d); i++) {
        elem = document.createElement('td');
        newTable.appendChild(elem);
    }

    while (d.getMonth() == mon) {
        elem = document.createElement('td');
        elem.textContent = d.getDate();
        newTable.appendChild(elem);

        if (getDay(d) % 7 == 6) {
            elem = document.createElement('tr');
            newTable.appendChild(elem)
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            elem = document.createElement('td');
            newTable.appendChild(elem);
        }
    }
    
    elem = document.createElement('tr');
    newTable.appendChild(elem);

    const cal = document.getElementById(containerId);
    cal.appendChild(newTable);

};

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



butt.onclick = function () {
    let month, year;
    let date = (document.getElementById('dataId').value);

    year = date[0] + date[1] + date[2] + date[3];
    if (date[6] !== '-') {
        month = date[5] + date[6];
    } else {
        month = date[5];
    }

    let dateNew = new Date(date);
    console.log(getDay(dateNew));

    createCalendar('calendar', year, month);
};

buttDelete.onclick = function () {
    let elem = document.getElementById("calendar");
    elem.parentNode.removeChild(elem);


    let bodyNew = new DocumentFragment();

    let tableNew = document.createElement('table');
    tableNew.id = 'calendar';
    bodyNew.appendChild(tableNew);

    document.body.appendChild(bodyNew);
}