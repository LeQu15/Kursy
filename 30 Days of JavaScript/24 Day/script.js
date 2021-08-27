 const input = document.querySelector('input')
 const select = document.querySelector('select')
 const p = document.querySelector('p.mass')
 const button = document.querySelector('button')
 const image = document.querySelector('img')
 const container = document.querySelector('div.container')
 const box = document.querySelector('div.box')
 const span = document.querySelector('span')
 const value = document.querySelector('p.value')
 const two = document.querySelector('div.two')
 let number;



 button.addEventListener('click', () => {
     function choosePlanet() {
         if (select.value == 'earth') {
             image.src = 'images/earth.png'
             number = Number(input.value) * 9.8
         } else if (select.value == 'jupiter') {
             image.src = 'images/jupiter.png'
             number = Number(input.value) * 24.7
         } else if (select.value == 'mars') {
             image.src = 'images/mars.png'
             number = Number(input.value) * 3.7
         } else if (select.value == 'mercury') {
             image.src = 'images/mercury.png'
             number = Number(input.value) * 3.7
         } else if (select.value == 'moon') {
             image.src = 'images/moon.png'
             number = Number(input.value) * 1.7
         } else if (select.value == 'neptune') {
             image.src = 'images/neptune.png'
             number = Number(input.value) * 11.7
         } else if (select.value == 'pluto') {
             image.src = 'images/pluto.png'
             number = Number(input.value) * 0.49
         } else if (select.value == 'saturn') {
             image.src = 'images/saturn.png'
             number = Number(input.value) * 10.5
         } else if (select.value == 'uranus') {
             image.src = 'images/uranus.png'
             number = Number(input.value) * 9
         } else if (select.value == 'venus') {
             image.src = 'images/venus.png'
             number = Number(input.value) * 8.8
         }
         return number
     }
     choosePlanet()
     p.textContent = "The weight of the object on"
     p.style.fontSize = "27px"
     span.style.marginLeft = "3px"
     span.textContent = select.value.toUpperCase()
     span.style.fontWeight = "bold"
     span.style.fontSize = "27px"
     image.style.display = 'inline-block';
     container.style.height = "auto"
     container.style.padding = "50px"
     value.textContent = Number(number).toFixed(2) + " " + "N"
     value.style.boxSizing = 'padding-box'
     value.style.border = "2px solid gray"
     value.style.padding = "10px"
     value.style.display = "border-box"
     value.style.margin = "0"
     value.style.height = "140px"
     value.style.width = "140px"
     value.style.borderRadius = "50%"
     value.style.backgroundColor = "rgba(211, 211, 211, 0.2)"
     value.style.lineHeight = "140px"
     value.style.textAlign = "center"
     value.style.fontSize = "20px"
     value.style.fontWeight = "bold"
     box.style.height = "300px"
     two.style.marginTop = "0"
 })