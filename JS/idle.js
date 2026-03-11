//BASE
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const nDisplay = document.getElementById('nDisplay')
const npsDisplay = document.getElementById('npsDisplay')
// VARIABLES
var n = 0
const N = 472
var nPerSecond = 0


stepButton.addEventListener('click', (event)=>{
    n++
    updateN()
})

function updateN() {
    if (n >= N) {
        n = N
        nDisplay.innerText = '['+Math.round(n)+']'
        npsDisplay.innerText = '['+(Math.round(nPerSecond * 100) / 100)+'/sec]'
        document.querySelectorAll('.pageTitle').forEach((element)=>{
            element.textContent = '(ZzzZz) idling... ['+Math.round(n)+']'
        })
    } else {
        nDisplay.innerText = '['+Math.round(n)+']'
        document.querySelectorAll('.pageTitle').forEach((element)=>{
            element.textContent = '(ZzzZz) idling... ['+Math.round(n)+']'
        })
    }
}

function tick() {
    console.log('tick()')
    n += (nPerSecond / 100)
    updateN()
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    document.querySelectorAll('.rateButton').forEach((element)=>{
        let rate = parseFloat(element.getAttribute('data-rate'))
        element.innerText = '+'+rate+'/sec'
        element.addEventListener('click', (event)=>{
            let rate = parseFloat(element.getAttribute('data-rate'))
            element.innerText = '+'+rate+'/sec'
            nPerSecond += rate
            console.log('nPerSecond: '+nPerSecond)
        })
    })
    window.setInterval(tick, 10)
    console.log('   \"loadFunc()\" finished')
}