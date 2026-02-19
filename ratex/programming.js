//BASE
const vNum = '0.6.a'
const pageTitle = document.getElementsByClassName('pageTitle')
//WRITING
const input = document.getElementById('input')
const output = document.getElementById('output')
const saveData = document.getElementById('saveData')
const pullData = document.getElementById('pullData')
const clearData = document.getElementById('clearData')
const saveAsBox = document.getElementById('saveAsBox')
const pullSavedBox = document.getElementById('pullSavedBox')
const closeSaveAs = document.getElementById('closeSaveAs')
const closePullData = document.getElementById('closePullData')
const confirmSaveAs = document.getElementById('confirmSaveAs')
const confirmPullData = document.getElementById('confirmPullData')
const copyIn = document.getElementById('copyIn')
const copyOut = document.getElementById('copyOut')
const simplify = document.getElementById('simplify')
const erase = document.getElementById('erase')
//CALCULATION
const calcInput = document.getElementById('calcInput')
const calcOutput = document.getElementById('calcOutput')
const roundPrompt = document.getElementById('roundPrompt')
const roundBox = document.getElementById('roundBox')
const confirmRound = document.getElementById('confirmRound')
const closeRound = document.getElementById('closeRound')
let rounded = true
let roundTo = 0.001
//STORAGE
const storage = document.getElementById('storage')
storage.textContent = Object.keys(localStorage)

function setRF() {
    localStorage.setItem('RF+','RF+ default value')
    const RFplus = fs.readFileSync('./RF+.txt').toString()
    if (RFplus != null) {
        localStorage.setItem('RF+',RFplus)
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function displayData() {
    storage.textContent = Object.keys(localStorage)
}
displayData()

let exclusiveMappings = [
//OPERATORS & QUERIES
    ['∴','type'],
    ['∴?','type?','typeq','typequery','typequeer'],
    ['∴→','types','typeval','typeeval','type->'],
    ['→','->','eval','evaluates'],
    ['≤','<='],
    ['≤?','<=?','<=q','<=query','<=queer'],
    ['≥','>='],
    ['≥?','>=?','>=q','>=query','>=queer'],
    ['∈','elem','element'],
    ['∈?','elem?','elemq','elemquery','elemqueer','element','elementq','elementquery','elementqueer'],
//BINARY OPERATORS
    ['&','and'],
    ['//','or'],
    ['⨈','xor'],
    ['!','not'],
//SETS
    ['𝕊','set','setset','sets'],
    ['ℂ','comps','setcomp','complex'],
    ['ℝ','reals','setreal'],
    ['ℚ','rats','setrat','rationals'],
    ['ℤ','ints','setint','integers'],
    ['ℕ','nats','setnat','naturals'],
    ['𝔹','bin','binary','bool','boolean'],
//CONSTANTS
    ['π','pi'],
//FUNCTIONS
    ['ℑ','iterate','iteration'],
    ['∑','sum','summate','summation'],
    ['∏','prod','product','production'],
    ['𝔉','fact','factorial'],
    ['𝔇','derange','derangement'],
    ['↥','pol','polarity'],
    ['⇈','copol','copolar','copolarity'],
//OTHER
    ['{θ}','ev','expression','expressionvector'],
    ['θ','out','output','theta'],
    ['ω','while'],
    ['λ','if'],
    ['⤓','import'],
    ['⦅','p('],
    ['⦆','p)']
]

let inclusiveMappings = [
    ['inc0','⤓0'],
    ['inc1','⤓1'],
    ['inc2','⤓2'],
    ['inc3','⤓3']
]

input.addEventListener('input',()=>{
    output.textContent = translate(input.value,false)
})

function translate(toTrans, simplify) {
    let text = toTrans
    let i = 0
    if(simplify) {
        i = 1
    }
    text = text.split(/[\n]/) //chops String into array of lines
    text = text.map(line=>line.split(' ')) //changes each element of line array based on function to chop Strings into arrays of words
    if (line[0] != '#') { //if not commented
        text = text.map(word=>word.map(w=>{ //changes each element of word array based on function to translate shorthand into symbols
            let chars = w.split('')
            if(chars[0] == '\\' && i==0) {
                chars[0] = ''
                w = chars.join('')
            } else {
                exclusiveMappings.forEach((transMap)=>{ //for each 'transMap' in 'exclusiveMappings', run the function
                    if(transMap.includes(w.toLowerCase())) {
                        w = transMap[i]
                    }
                })
                inclusiveMappings.forEach((transMap)=>{
                    if(w.includes(transMap[i])) {
                        w = transMap[1-i]
                    }
                    if(simplify) {
                        if(w == transMap[0]) {
                            w = transMap[0]
                        }
                    }
                })
            }
            return w
        }))
    }
    return text.map(k=>k.join(' ')).join('\n')
}

function switchTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if(tabName == 'Writing') {
        input.focus()
    }
    if(tabName == 'Calculator') {
        calcInput.textContent = output.textContent
        calculate('N')
    }
}

saveData.onclick = ()=>{
    saveAsBox.style.display = 'block'
    confirmSaveAs.style.display = 'inline'
    closeSaveAs.style.display = 'inline'
    saveAsBox.focus()
}
pullData.onclick = ()=>{
    pullSavedBox.style.display = 'block'
    confirmPullData.style.display = 'inline'
    closePullData.style.display = 'inline'
    pullSavedBox.focus()
}
clearData.onclick = ()=>{
    output.textContent = translate(input.value,false)
    localStorage.clear()
    setRF()
    displayData()
}
closeSaveAs.onclick = ()=>{
    saveAsBox.style.display = 'none'
    confirmSaveAs.style.display = 'none'
    closeSaveAs.style.display = 'none'
    saveAsBox.value = ''
}
closePullData.onclick = ()=>{
    pullSavedBox.style.display = 'none'
    confirmPullData.style.display = 'none'
    closePullData.style.display = 'none'
    pullSavedBox.value = ''
}
function confirmSaveAsFunc() {
    if(saveAsBox.value == 'RF+') {
        let pickRand = randomInt(5)
        if(pickRand == 0) {
            alert('no :3')
        } else if(pickRand == 1) {
            alert('incorrect.')
        } else if(pickRand == 2) {
            alert('dissallowed.')
        } else if(pickRand == 3) {
            alert('wrong.')
        } else if(pickRand == 4) {
            alert('unfaithful.')
        } else {
            alert('deceitful.')
        }
    } else if(saveAsBox.value != '') {
        localStorage.setItem(saveAsBox.value,input.value)
        displayData()
        saveAsBox.value = ''
        saveAsBox.style.display = 'none'
        confirmSaveAs.style.display = 'none'
        closeSaveAs.style.display = 'none'
    }
}
function confirmPullDataFunc() {
    if(Object.keys(localStorage).includes(pullSavedBox.value)) {
        input.value = localStorage[pullSavedBox.value]
        output.textContent = translate(input.value,false)
        pullSavedBox.value = ''
        pullSavedBox.style.display = 'none'
        confirmPullData.style.display = 'none'
        closePullData.style.display = 'none'
    }
}
function detectSaveEnter(event) {
    let key = event.key
    if(key == "Enter") {
        console.log('\"Enter\" key pressed  in \"saveData\"')
        confirmSaveAsFunc()
    }
}
function detectPullEnter(event) {
    let key = event.key
    if(key == "Enter") {
        console.log('\"Enter\" key pressed in \"pullData\"')
        confirmPullDataFunc()
    }
}
copyIn.onclick = ()=>{
    navigator.clipboard.writeText(input.value)
}
copyOut.onclick = ()=>{
    navigator.clipboard.writeText(output.textContent)
}
simplify.onclick = ()=>{
    input.value = translate(input.value,true)
    output.textContent = translate(input.value,false)
}
erase.onclick = ()=>{
    input.value = ''
    output.textContent = ''
}

//CALCULATOR
//definition operators
let definitionOperators = ['=','∴','≥','≤','∈']
//arithmatic operators
let arithmaticOperators = ['+','-','*','/','^']
//queries
let queryOperators = ['=?','∴?','≥?','≤?','∈?']
//evaluations
let evaluations = ['→','∴→']
//sets
let sets = ['𝕊','ℂ','ℝ','ℚ','ℤ','ℕ','𝔹']
//constants
let constants = ['π']
//RF+ variables
let RFvariables = ['ℑ','∑','∏','𝔇']
//[other]
let CHANGEOTHERS = ['θ','ω','⤓']
/*literals
    anything that can be read as an int (for now)

user variables
    any 'words' that don't match other token kinds
*/
function calculate(find) {
    //TOKENIZATION
    console.log('calculation called for '+find)
    let text = calcInput.textContent
    text = text.split('\n')
    text = text.map(line=>line.split(' '))
    console.log('input: \n'+text.map(k=>k.join(' ')).join('\n'))
    console.log('input split: \n'+JSON.stringify(text))
    //IDENTIFICATION
    text = text.map((line)=>{
        line = line.map((word)=>{
            if(definitionOperators.includes(word)) {
                word = word+'<define>'
            } else if(arithmaticOperators.includes(word)) {
                word = word+'<arith>'
            } else  if(queryOperators.includes(word)) {
                word = word+'<queer>'
            } else if(evaluations.includes(word)) {
                word = word+'<eval>'
            } else if(sets.includes(word)) {
                word = word+'<set>'
            } else if(constants.includes(word)) {
                word = word+'<constant>'
            } else if(RFvariables.includes(word)) {
                word = word+'<RF>'
            } else if(CHANGEOTHERS.includes(word)) {
                word = word+'<other>'
            } else if( !isNaN(+word)) {
                word = word+'<literal>'
            } else {
                word = word+'<>'
            }
            return word
        })
        return line
    })
    console.log('identification: \n'+text.map(k=>k.join(' ')).join('\n'))
    calcOutput.textContent = text.map(k=>k.join(' ')).join('\n')
}
function useArith(A,op,B) {
    console.log('\"useArith()\" began: '+A+' '+op+' '+B)   
    A = Number(A)
    B = Number(B)
    let out
    if (op=='+') {
        out = A + B
    } else if (op=='-') {
        out = A - B
    } else if (op=='*') {
        out = A * B
    } else if (op=='/') {
        out = A / B
    } else if (op=='^') {
        out = A ** B
    }
    if(rounded) {
        out = Math.round(out / roundTo) * roundTo
    }
    console.log('   \"useArith()\" finished: '+out)
    alert(out)
    return out
}

roundPrompt.onclick = ()=>{
    roundBox.style.display = 'block'
    confirmRound.style.display = 'inline'
    closeRound.style.display = 'inline'
    roundBox.focus()
}
closeRound.onclick = ()=>{
    roundBox.style.display = 'none'
    confirmRound.style.display = 'none'
    closeRound.style.display = 'none'
    roundBox.value = ''
}
function confirmRoundFunc() {
    let roundInput = roundBox.value
    if (roundInput != '') {
        if( !isNaN(+roundInput)) {
            rounded = true
            roundTo = +roundInput
            roundPrompt.textContent = 'rounding to ['+roundBox.value+']'
        } else if (roundInput=='raw') {
            rounded = false
            roundPrompt.textContent = 'rounding to ['+roundBox.value+']'
        } else {
            console.log('\"confirmRoundFunc()\" failed')
        }
    } else {
        console.log('\"confirmRoundFunc()\" failed')
    }
    roundBox.style.display = 'none'
    confirmRound.style.display = 'none'
    closeRound.style.display = 'none'
    roundBox.value = ''
    useArith(2,'^',3.5)
}
function detectRoundEnter(event) {
    let key = event.key
    if(key == "Enter") {
        console.log('\"Enter\" key pressed in \"roundPrompt\"')
        confirmRoundFunc()
    }
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'RaTeX! '+vNum
    }
    switchTab(event, 'Writing')
    output.textContent = translate(input.value,false)
    roundPrompt.textContent = 'rounding to ['+roundTo+']'
    setRF()
    console.log('   \"loadFunc()\" finished')
}

