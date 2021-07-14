let date = new Date();
let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
let day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
let year = date.getFullYear();
const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

console.log(`${year}-${month}-${day} ${hours}:${minutes}`)