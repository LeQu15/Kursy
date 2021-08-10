let paragraph;

const cleanText = function () {
    paragraph = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    paragraph = paragraph.replace(/[^\w\s]/gi, '')
    return paragraph
}
console.log(cleanText())

const tenMostFrequentWords = function (n) {
    const arr = paragraph.split(" ")
    const result = []
    const array = []
    let word = arr[0]
    for (let i = 0; i < arr.length; i++) {
        word = arr[i]
        array.push(word)
    }
    let specialWords = arr.filter(function (value, index, array) {
        return array.indexOf(value) === index
    })
    let count = 0;
    for (let i = 0; i < specialWords.length; i++) {
        word = specialWords[i]
        array.forEach(w => (w.toLowerCase() === word.toLowerCase() && count++))
        result.push({
            word,
            count
        })
        count = 0;
    }
    result.sort((a, b) => {
        return b.count - a.count
    })
    return result.slice(0, n)

}

console.log(tenMostFrequentWords(3))