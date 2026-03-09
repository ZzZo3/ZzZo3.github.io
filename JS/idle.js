//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
// VARIABLES
var n = 0

stepButton.addEventListener('click', (event)=>{
    n++
    nDisplay.innerText = '['+n+']'
})

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    /* code go here */
    console.log('   \"loadFunc()\" finished')
}