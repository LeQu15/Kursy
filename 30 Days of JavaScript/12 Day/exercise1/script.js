console.log(4000 * 12 + 10000 + 5500 * 12 + " euro")

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
points.sort((a, b) => a - b)
console.log(points)
let distance = points[0] - points[points.length - 1]
distance = Math.abs(distance)
console.log(distance)

const isValidVariable = function () {
    const text = "siema"
    if (text.includes("-") || text.match(/^\d/)) {
        return false
    } else {
        return true
    }
}

console.log(isValidVariable())