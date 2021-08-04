const arr = [];
const arrFiveElements = [1, 2, 3, 4, 5, 6, 7];
console.log(arrFiveElements.length);
console.log(arrFiveElements[0], arrFiveElements[Math.floor(arrFiveElements.length / 2)], arrFiveElements[arrFiveElements.length - 1]);


const mixedDataTypes = ["firstElement", 2, true, null, "fifthElement", 6];
console.log(mixedDataTypes.length);


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(itCompanies.toString() + " are big IT companies");

if (itCompanies.includes('Facebook')) {
    console.log(itCompanies[0]);
} else {
    console.log("Company is not found");
}

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 + 1)));


itCompanies.sort();
itCompanies.reverse();

itCompanies.shift();
console.log(itCompanies);
itCompanies.unshift("Oracle");

itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);
itCompanies.unshift("Google");
itCompanies.sort();
itCompanies.reverse();

itCompanies.pop();
console.log(itCompanies);
itCompanies.push("Amazon");

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);