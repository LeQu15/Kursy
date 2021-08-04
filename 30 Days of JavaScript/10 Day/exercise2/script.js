//union
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//intersection
A = new Set(a)
B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)
console.log(C)

//find a with b

A = new Set(a)
B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)
console.log(C)