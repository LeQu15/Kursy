let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Wyczyść";
    const list = document.createElement('ul');
    list.style.listStyle = "none";
    document.body.appendChild(list);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liItems = document.createElement('li');
        liItems.style.fontSize = `${size++}px`
        liItems.textContent = `Element nr ${orderElement++}`;
        document.querySelector('ul').appendChild(liItems);
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;

}

init()