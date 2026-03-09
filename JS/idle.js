//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
// VARIABLES
var n = 0

function cap() {
    alert('no more.')
}

stepButton.addEventListener('click', (event)=>{
    n++
    if (n > 471) {
        n = 472
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