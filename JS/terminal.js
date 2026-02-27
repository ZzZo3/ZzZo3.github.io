//BASE
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')
//

//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault()
                terminalParse()
            }
        }
    }
});

terminalInput.addEventListener('input', ()=>{
    var text = terminalInput.value
    text = text.split('\n')
    terminalInput.style.height = (18 * text.length)+'px'
});

function terminalParse() {
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
                    let argList = line.splice(0, 1)
                    console.log('TERMINAL: '+COMMAND.name+': '+argList) //log
                    COMMAND.execute(argList)
                }
            })
        })
        console.log('TERMINAL: parsed') //log
    }
}


// COMMANDS

const TERMINALCOMMANDS = [
{ name:'help', execute:(argList)=>{
    console.log('terminal help command called')
} }
]