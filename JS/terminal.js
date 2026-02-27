//BASE
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')


//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault()
                terminalRead()
            }
        }
    }
});

terminalInput.addEventListener('input', ()=>{
    var text = terminalInput.value
    text = text.split('\n')
    terminalInput.style.height = (18 * text.length)+'px'
});

function terminalRead() {
    if (terminalInput.value != '') {
        console.log('TERMINAL: parsing') //log
        var text = terminalInput.value
        console.log(text) //log
        terminalInput.value = ''
        terminalInput.style.height = '18px'
        command = text.split('\n').map((line)=>line.split(' '))
        command.forEach((line)=>{
            TERMINALCOMMANDS.forEach((COMMAND)=>{
                if (COMMAND.name == line[0]) {
                    console.log('TERMINAL: '+COMMAND.name+': '+line) //log
                    terminalWrite(line.join(' '))
                    COMMAND.execute(line)
                }
            })
        })
        console.log('TERMINAL: parsed') //log
    }
}
function terminalWrite(text) {
    console.log('terminal write: '+text)
    terminalOutput.value = terminalOutput.value+'\n'+text
    terminalOutput.style.height = (18 * terminalOutput.value.split('\n').length)+'px'
    alert(terminalOutput.value)
}

// COMMANDS

const TERMINALCOMMANDS = [
{ name:'help', execute:(line)=>{
    console.log('terminal help command called')
} }
]