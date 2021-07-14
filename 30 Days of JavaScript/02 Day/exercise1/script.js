let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 3));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(' '));

let text1 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(text1.split(","));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let text2 = "You cannot end a sentence with because because because is a conjunction";
console.log(text2.indexOf('because'));
console.log(text2.lastIndexOf('because'));
console.log(text2.search('because'));

let text3 = ' 30 Days Of JavaScript '
console.log(text3.trim());

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Script'));
console.log(challenge.match(/a/gi));

let text4 = "30 Days Of";
console.log(text4.concat(" JavaScript"));

console.log(challenge.repeat(2));