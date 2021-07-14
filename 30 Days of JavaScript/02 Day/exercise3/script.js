let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(text.match(/love/gi));

let text2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(text2.match(/because/gi));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/%/gi, "").replace(/\$/gi, "").replace(/@/gi, "").replace(/#/gi, "").replace(/&/gi, "").replace(/;/gi, ""));

let annualIncome = 5000 * 12 + 10000 + 15000 * 12;
console.log(`His annual income is €${annualIncome}.`)