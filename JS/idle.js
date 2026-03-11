// BASE ᴇ
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const npsDisplay = document.getElementById('npsDisplay')
// VARIABLES
const max = 1*(10^30)
var n = 0
var nPerSecond = 0
// TICKER
let ticker = setInterval(tick, 10)
var tickMs = 10

stepButton.addEventListener('click', (event)=>{
    n++
    updateN()
})

function notate(numI,round) {
    if (round===undefined) {
        round = 1
    }
    numF = Math.round(numI / round) * round
    if (numF < 999999) {
        console.log('notate(): not large enough to justify')
        return numF
    }
    let digits = String(numF).split('.')[0].length
    console.log('digits: '+digits)
    return (numF / digits)+'ᴇ'+(digits-1)
}

function updateN() {
    if (n >= max) {
        n = max
        clearInterval(ticker)
        return
    }
    if (nPerSecond >= 100) {
        clearInterval(ticker)
        ticker = setInterval(tick, 1000)
        tickMs = 1000
    }
    nDisplay.innerText = '['+notate(n)+']'
    npsDisplay.innerText = '['+notate(nPerSecond,0.001)+'/sec]'
    document.querySelectorAll('.pageTitle').forEach((element)=>{
        element.textContent = '(ZzzZz) idling... ['+notate(n)+']'
    })
}

function tick() {
    n += (nPerSecond * tickMs / 1000)
    updateN()
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    document.querySelectorAll('.rateButton').forEach((element)=>{
        let rate = parseFloat(element.getAttribute('data-rate'))
        element.innerText = '+'+notate(rate)+'/sec'
        element.addEventListener('click', (event)=>{
            let rate = parseFloat(element.getAttribute('data-rate'))
            element.innerText = '+'+notate(rate)+'/sec'
            nPerSecond += rate
            console.log('nPerSecond: '+nPerSecond)
        })
    })
    console.log('   \"loadFunc()\" finished')
}