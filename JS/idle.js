//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const killSwitch = document.getElementById('killSwitch')
// VARIABLES
var n = 0
const N = 472


stepButton.addEventListener('click', (event)=>{
    n++
    if (n >= N) {
        n = N
        nDisplay.innerText = '['+n+']'
        document.querySelectorAll('.pageTitle').forEach((element)=>{
            element.textContent = '(ZzzZz) idling... ['+n+']'
        })
    } else {
        nDisplay.innerText = '['+n+']'
        document.querySelectorAll('.pageTitle').forEach((element)=>{
            element.textContent = '(ZzzZz) idling... ['+n+']'
        })
    }
})

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    /* code go here */
    console.log('   \"loadFunc()\" finished')
}