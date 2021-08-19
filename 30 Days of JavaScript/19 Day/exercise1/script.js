function name() {
    const name = "Paweł"

    function sayMyName() {
        return name
    }
    return sayMyName
}
const sayName = name()

console.log(sayName())