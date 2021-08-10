const tenMostFrequentWords = function (n) {
    let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    paragraph = paragraph.replace(/\./g, '')
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

console.log(tenMostFrequentWords(10))