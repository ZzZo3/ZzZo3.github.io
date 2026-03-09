//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const killSwitch = document.getElementById('killSwitch')
// VARIABLES
var n = 0
const N = 10 //472

function suicide() {
    alert('no more.')
    killSwitch.innerHTML += '<image src="./assets/photo/LSPpillar.jpeg">'
}

stepButton.addEventListener('click', (event)=>{
    n++
    if (n >= N) {
        n = N
        nDisplay.innerText = '['+n+']'
        suicide()
    } else {
        nDisplay.innerText = '['+n+']'
    }
})

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    /* code go here */
    console.log('   \"loadFunc()\" finished')
}