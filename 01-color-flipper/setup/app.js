const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById('btn')
let span = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    const randomNumber = getRandomNumber()

    span.textContent = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
})

const getRandomNumber=()=>{
    return Math.floor(Math.random() * colors.length)
}
