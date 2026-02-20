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
localStorage.setItem('RF+',
`# \\SETS
bin type set = { 0 , 1 }
  # \\binary \\set - also referred with 'bool','boolean'

# LOGIC OPERATORS
if p( E type EV , C type bin p) = [ c = 0 , [ E , c = c + 1 ] while C + c ]
  # \\if statement - \\while loop that prevents further iterations
and p( c1 type bin , c2 type bin p) type bin = [ out = 0 , out = 1 if c1 + c2 =? 2 ]
  # \\binary \\and operator
or p( c1 type bin , c2 type bin p) type bin = [ out = 0 , out = 1 if c1 + c2 >? 0 ]
  # \\binary \\or operator
xor p( c1 type bin , c2 type bin p) type bin = [ out = 0 , out = 1 if c1 + c2 ]
  # \\binary \\xor operator
not p( C type bin p) type bin = [ out = 1 , out = 0 if C ]
  # \\binary \\not operator

# ITERATIVE FUNCTIONS
iterate p( n type ints , k type { ints >= n } , E type EV , i type any p) type any = [ out = i , s = n , [ E , s = s + 1 ] while k >=? s ]
  # n: starting value for step 's'
  # k: ending step value
  # E: \\expression vector to \\iterate over
  # i: starting value for out
sum p( n type ints , k type { ints >= n } , E type EV p) type comps = iterate ( n , k , E = [ out = out + E ] , 0 )
  # \\summation
prod p( n type ints , k type { ints >= n } , E type EV p) type comps = iterate ( n , k , E = [ out = out * E ] , 0 )
  # \\production
fact p( n type ints p) type ints = [ out = 1 , [ out = out * n , n = pol ( n ) * -1 ] while not ( n =? 0 ) ]
  # \\factorialization
  # fact ( 0 ) -> 1
derange p( x type nats p) type nats =  [ iterate ( 2 , x , [ out = s * out + -1 ^ s ] , 0 ) , out = 1 if x =? 0 ]
  # \\derangement / subfactorialization
  # derange ( 0 ) -> 1

# \\POLARITY FUNCTIONS
pol p( n type reals p) type { -1 , 0 , 1 } = [ out = n / | n | if not ( n =? 0 ) ]
  # \\polarity - returns 0 for 0
copol p( x type reals , z type reals p) type bin = [ out = pol ( x ) =? pol ( z ) ]
  # \\copolarity - returns 1 \\if inputs share \\polarity
`)
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
    ['{θ}','EV','Expression','ExpressionVector'],
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
    console.log('\"translate()\" called - simplify: ',simplify)
    let text = toTrans
    let i = 0
    if(simplify) {
        i = 1
    }
    text = text.split(/[\n]/) //chops String into array of lines
    text = text.map(line=>line.split(' ')) //changes each 'line' of [text] based on function to chop Strings into arrays of words
    text = text.map(line=>line.map(word=>{ //changes each 'line' of [text] into array of 'word's
        let chars = word.split('')
        if(chars[0] == '\\' && !simplify) {
            chars[0] = ''
            word = chars.join('')
        } else {
            exclusiveMappings.forEach((transMap)=>{ //for each 'transMap' in 'exclusiveMappings', run the function
                if(transMap.map(item=>item.toLowerCase()).includes(word.toLowerCase())) {
                    word = transMap[i]
                }
            })
            inclusiveMappings.forEach((transMap)=>{
                if(word.toLowerCase().includes(transMap[i].toLowerCase())) {
                    word = transMap[1-i]
                }
                if(simplify) {
                    if(word == transMap[0]) {
                        word = transMap[0]
                    }
                }
            })
        }
        return word
    }))
    console.log('   \"translate()\" finished')
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
    console.log('attempting to write to: \"'+saveAsBox.value+'\"')
    if(saveAsBox.value == 'RF+') {
        console.log('   cannot write to RF+')
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
        console.log('   \"'+saveAsBox.value+'\" write success')
        saveAsBox.value = ''
        saveAsBox.style.display = 'none'
        confirmSaveAs.style.display = 'none'
        closeSaveAs.style.display = 'none'
    }
}
function confirmPullDataFunc() {
    console.log('attempting to read: \"'+pullSavedBox.value+'\"')
    if(Object.keys(localStorage).includes(pullSavedBox.value)) {
        console.log('   \"'+pullSavedBox.value+'\" found')
        input.value = localStorage[pullSavedBox.value]
        output.textContent = translate(input.value,false)
        console.log('   \"'+pullSavedBox.value+'\" read success')
        pullSavedBox.value = ''
        pullSavedBox.style.display = 'none'
        confirmPullData.style.display = 'none'
        closePullData.style.display = 'none'
    }
}
function detectSaveEnter(event) {
    let key = event.key
    if(key == "Enter") {
        confirmSaveAsFunc()
    }
}
function detectPullEnter(event) {
    let key = event.key
    if(key == "Enter") {
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
doubleSlash.onclick = ()=>{
    console.log('\\ -> \\\\')
    let text = input.value
    let changed = 0
    text = removeExtraBacks(text)
    text = text.split('\n').map(line=>line.split('')) //splits text into array of arrays of characters
    text = text.map((line, num)=>{
        let indexedSlashes = []
        line.forEach((char, index)=>{
            if (char=='\\') {
                indexedSlashes.push(index)
            }
        })
        indexedSlashes.forEach(index=>{
            line[index] = '\\\\'
            changed++
        })
        return line
    })
    if (changed > 0) {
        console.log('   REDOUBLED '+changed+' BACKSLASHES')
    }
    input.value = text.map(k=>k.join('')).join('\n')
    output.textContent = translate(input.value,false)
}
singleSlash.onclick = ()=>{
    console.log('\\\\ -> \\')
    let text = input.value
    text = removeExtraBacks(text)
    input.value = text
    output.textContent = translate(input.value,false)
}
function removeExtraBacks(tempText) {
    let text = tempText
    let changed = 0
    text = text.split('\n').map(line=>line.split('')) //splits text into array of arrays of characters
    text = text.map((line, num)=>{
        let indexedSlashes = []
        let indexedDoubleSlashes = []
        line.forEach((char, index)=>{
            if (char=='\\') {
                indexedSlashes.push(index)
            }
        })
        indexedSlashes.forEach(index=>{
            if (index > 0) {
                if (line[index-1]=='\\') {
                    indexedDoubleSlashes.push(index)
                    changed++
                }
            }
        })
        line = line.filter((value, index)=>{
            return !indexedDoubleSlashes.includes(index)
        })
        return line
    })
    if (changed > 0) {
        console.log('   REMOVED '+changed+' EXTRANEOUS BACKSLASHES')
    }
    return text.map(k=>k.join('')).join('\n')
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
    text = text.map(line=>{
        line = line.split(' ')
        potentialComment = line.filter(potentialSpace=>{
            return potentialSpace !== ' '
        })
        if (potentialComment[0]=='#') {
            line = ['COMMENT']
        }
        return line
    })
    text = text.filter(line=>{
        return line != ['COMMENT']
    })
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

function arith(A,op,B) {
    console.log(+A+' '+op+' '+B)   
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
    console.log('attempting to round to: '+roundBox.value)
    let roundInput = roundBox.value
    if (roundInput != '') {
        if( !isNaN(+roundInput)) {
            rounded = true
            roundTo = +roundInput
            roundPrompt.textContent = 'rounding to ['+roundBox.value+']'
            console.log('   rounding to nearest: '+roundTo)
        } else if (roundInput=='raw') {
            rounded = false
            roundPrompt.textContent = 'rounding to ['+roundBox.value+']'
            console.log('   not rounding')
        } else {
            console.log('   rounding failed')
        }
    } else {
        console.log('   rounding failed')
    }
    roundBox.style.display = 'none'
    confirmRound.style.display = 'none'
    closeRound.style.display = 'none'
    roundBox.value = ''
}
function detectRoundEnter(event) {
    let key = event.key
    if(key == "Enter") {
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

