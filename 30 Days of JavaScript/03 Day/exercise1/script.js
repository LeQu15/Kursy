let firstName = 'Jan',
    lastName = 'Nowak',
    country = 'Poland',
    city = 'Warszawa',
    age = 21,
    isMarried = true,
    year = 2021;

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (year));

console.log(typeof (10) == 10);
console.log(parseInt(9.8) == 10);

console.log(2 > 1);
console.log(5 - 1 == 4);
console.log(3 / 2 > 0);
console.log(1 > 2);
console.log(5 + 1 == 4);
console.log(3 / 2 < 0);

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log("python".length > "jargon".length); //false

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 > 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
console.log(!("dragon".includes("on") && "python".includes("on"))); //false

const now = new Date()
console.log(now.getFullYear());
console.log(now.getMonth());

let dateYear = now.getFullYear();
let dateMonth = now.getMonth();
let dateDay = now.getDay();
console.log(`${dateYear}/${dateMonth}/${dateDay}`);

console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());