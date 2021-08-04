/* for (let i = 0; i <= 10; i++) {
    console.log(i)
}*/

/*let i = 0
while (i <= 10) {
    console.log(i)
    i++
}*/

/*let i = 0
do {
    console.log(i)
    i++
} while (i <= 10) */
console.log("")

/*for (let i = 10; i >= 0; i--) {
    console.log(i)
}*/

/*let i = 10
while (i >= 0) {
    console.log(i)
    i--
} */

/*let i = 10
do {
    console.log(i)
    i--
} while (i >= 0)*/
console.log("")

document.querySelector("button.literate").addEventListener("click", function () {
    const n = window.prompt("Podaj liczbę");
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }

    /*let i = 0
    while (i <= n) {
        console.log(i)
        i++
    }*/

    /* let i = 0
    do {
        console.log(i)
        i++
    } while (i <= n) */
})
console.log("");
/*
let symbol = "";
for (let i = 1; i <= 7; i++) {
    for (let y = 0; y < i; y++) {
        symbol += "#";
    }
    symbol += '\n';
}
console.log(symbol)
*/
console.log("");
/*
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}*/
console.log("");
/*
console.log('i    i^2   i^3')
for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i*i}    ${i * i * i}`)
}*/
console.log("");
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}*/
console.log("");
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}*/
console.log("");

/*for (let i = 2; i < 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        console.log(i);
}*/
console.log("");
/*
let add = 0;
for (let i = 0; i <= 100; i++) {
    console.log(i);
    add = add + i;
}
console.log(`Suma wynosi ${add}`);
*/
console.log("");
/*
let addOdd = 0;
let addEven = 0;
for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 2 == 0) {
        addEven = addEven + i;
    } else {
        addOdd = addOdd + i;
    }
}
console.log(`Suma liczb parzystych wynosi ${addEven} a suma liczb nieparzystych wynosi ${addOdd}`); */
console.log("");

/*addOdd = 0;
addEven = 0;
for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 2 == 0) {
        addEven = addEven + i;
    } else {
        addOdd = addOdd + i;
    }
}
const array = [addEven, addOdd]
console.log(array);*/
console.log("");

/*const numberArray = [];
for (let i = 1; i <= 5; i++) {
    const number = Math.floor(Math.random() * 101);
    numberArray.push(+number);
}
console.log(numberArray);*/
console.log("");

/*const arr = [];
while (arr.length < 5) {
    let number = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(number) === -1) arr.push(number);
}
console.log(arr);*/
console.log("");

/*const chars = 'ABCDEFGHIJKLMNOPRSTWUYZabcdefghijklmnoprstwuyz1234567890';
let text = '';
for (let i = 0; i <= 5; i++) {
    text += (chars.charAt(Math.floor(Math.random() *
        chars.length)));
}
console.log(text);*/
console.log("");