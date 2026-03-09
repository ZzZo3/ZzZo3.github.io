//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
// VARIABLES
var n = 0
const N = 472
const tempN = 15

function cap() {
    alert('no more.')
    window.open('https://n0n-sense.org/naught')
}

stepButton.addEventListener('click', (event)=>{
    n++
    if (n > tempN) {
        n = tempN
        cap()
    }
    nDisplay.innerText = '['+n+']'
})

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    /* code go here */
    console.log('   \"loadFunc()\" finished')
}