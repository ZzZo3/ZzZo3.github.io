// BASE ᴇ
const pageTitle = document.getElementsByClassName('pageTitle')
const stepButton = document.getElementById('stepButton')
const nDisplay = document.getElementById('nDisplay')
const npsDisplay = document.getElementById('npsDisplay')
// VARIABLES
const max = 10**32
var n = 0
var nPerSecond = 0
// TICKER
var ticker = setInterval(tick, 10)
var tickMs = 10

stepButton.addEventListener('click', (event)=>{
    n++
    updateN()
})

function notate(numI,round) {
    if (round===undefined) {
        round = 1
    }
    var numF = Math.round(numI / round) * round
    if (numF < 1000000) {
        return String(numF)
    }
    let digits = String(numF).split('.')[0].length - 1
    let numS = (numF / 10**digits)+'ᴇ'+(digits)
    numS = numS.slice(0, -(numS.length - 4))
    return numS
}

function updateN() {
    if (n >= max) {
        n = max
        clearInterval(ticker)
        return
    }
    if (nPerSecond >= 100) {
        clearInterval(ticker)
        ticker = setInterval(tick, 100)
        tickMs = 100
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