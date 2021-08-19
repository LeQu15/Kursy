function rect() {
    let a = 5
    let b = 10
    let result = 0

    function area() {
        result = a * b
        return result
    }

    function circumference() {
        result = 2 * a + 2 * b
        return result
    }

    function test() {
        result = Math.sqrt(a * a + b * b)
        return result
    }
    return {
        area: area(),
        circumference: circumference(),
        test: test()
    }
}

const innerFunct = rect()

console.log(innerFunct.area)
console.log(innerFunct.circumference)
console.log(innerFunct.test)