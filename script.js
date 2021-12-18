const span = document.querySelector("#value")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")

let countNum = 0

/* Option 1 */

//Func decrease
/* decreaseBtn.addEventListener('click', function(){
    countNum--
    setColorAndValue()
})

//Func reset
resetBtn.addEventListener('click', function(){
    countNum = 0
    setColorAndValue()
})

//Func increase
increaseBtn.addEventListener('click', function(){
    countNum++
    setColorAndValue()
})
 */



/* ----------Option 2 with Foor loop------------*/

const allBtns = document.querySelector(".btn") //brings array-like NodeList allBtns.length => 3
//const allBtns = [{decreaseBtn}, {resetBtn}, {increaseBtn}]
console.log(allBtns.length)

for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", function(event){
        console.log(event.target, "this is event target" )
        const classes = event.target.classList;
        console.log(classes, 'these are classes')
        if (classes.contains("decrease")) {
            countNum--
        } else if (classes.contains("increase")) {
            countNum++
        } else {
            countNum = 0;
        }
        setColorAndValue()
    })
}

/* ----------Option 3------------ */
/* allBtns.forEach(function(el){
    el.addEventListener("click", function(event){
        console.log(event.target, "this is event target" )
        const classes = event.target.classList;
        console.log(classes, 'these are classes')
        if (classes.contains("decrease")) {
            countNum--
        } else if (classes.contains("increase")) {
            countNum++
        } else {
            countNum = 0;
        }
        setColorAndValue()
    })    
}) */

/* -------------Option 4--------------- */

//allBtns.forEach(addEventToBtn) //high order method that under hood looping through array
/* 
function addEventToBtn(el) {
    el.addEventListener("click", function(event){
        //console.log(event.target, "this is event target" )
        const classes = event.target.classList;
        //console.log(classes, 'these are classes')
        if (classes.contains("decrease")) {
            countNum--
        } else if (classes.contains("increase")) {
            countNum++
        } else {
            countNum = 0;
        }
        setColorAndValue()
    })

} */

// out sourc global func setting color and value
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
// event is an object