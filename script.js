const span = document.querySelector("#value")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")

let countNum = 0

/* Func decrease */
decreaseBtn.addEventListener('click', function(){
    countNum--
    setColorAndValue()
})

/* Func reset */
resetBtn.addEventListener('click', function(){
    countNum = 0
    setColorAndValue()
})

/* Func increase */
increaseBtn.addEventListener('click', function(){
    countNum++
    setColorAndValue()
})

//func setting color and value
function setColorAndValue () {
    if (countNum < 0) {
        span.style.color = 'red'; 
    } else if (countNum > 0) {
        span.style.color = 'green'; 
    } else {
        span.style.color = 'black';
    }
    span.innerText = countNum
}