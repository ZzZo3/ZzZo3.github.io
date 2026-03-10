//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const killSwitch = document.getElementById('killSwitch')
// VARIABLES
var n = 0
const N = 472
var nPerSecond = 0


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

document.querySelectorAll('.rateButton').forEach((element)=>{
    let rate = parseFloat(element.getAttribute('data-rate'))
    element.innerText = '['+rate+'/sec]'
    element.addEventListener('click', (event)=>{
        let rate = parseFloat(element.getAttribute('data-rate'))
        element.innerText = '['+rate+'/sec]'
        nPerSecond += rate
    })
})

function run() {
    n += nPerSecond / 100
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    window.setInterval('run()', 10)
    console.log('   \"loadFunc()\" finished')
}