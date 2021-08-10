class Animal {
    constructor(name, age, color, legs) {
        console.log(this)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getInfo() {
        const info = this.name + " " + this.age
        return info
    }
    get getAppearance() {
        const appearance = this.color + " " + this.legs
        return appearance
    }
}

const hamster = new Animal("Max", 2, "brown", 4)
console.log(hamster)
console.log(hamster.getInfo)
console.log(hamster.getAppearance)

class Dog extends Animal {
    constructor(name, age, color, legs, isHealthy) {
        super(name, age, color, legs)
        this.isHealthy = isHealthy
    }
    saySomething() {
        console.log("Woof!")
    }
    get getInfo() {
        const info = this.name + " " + this.age + " " + this.isHealthy
        return info
    }
}

class Cat extends Animal {
    saySomething() {
        console.log("Meow!")
    }
}

const d1 = new Dog("Grey", 5, "brown", "4", true)
d1.saySomething()

const c1 = new Cat("Garfield", 8, "orange", "4")
c1.saySomething()

console.log(d1.getInfo)