const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let span = document.querySelector('.color');
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let colors= "#"

        for(let i = 0; i < 6; i++){
            colors += hex[getRandomNumber()]
        }

        span.textContent = colors;
        document.body.style.backgroundColor = colors
})

let getRandomNumber=()=> {
    return Math.floor(Math.random() * hex.length)
}
