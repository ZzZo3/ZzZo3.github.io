//BASE
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')
let terminal = {}


//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault()
                terminal.read()
            }
        }
    }
});

terminalInput.addEventListener('input', ()=>{
    var text = terminalInput.value
    text = text.split('\n')
    terminalInput.style.height = (18 * text.length)+'px'
});

terminal.read() = ()=>{
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
                    terminal.write(line)
                    COMMAND.execute(line)
                }
            })
        })
        console.log('TERMINAL: parsed') //log
    }
}
terminal.write(text) = (text)=>{
    terminalInput.style.height = (18 * terminalInput.value.split('\n').length)+'px'
    terminalOutput.value = terminalInput.value+'\n'+text
}

// COMMANDS

const TERMINALCOMMANDS = [
{ name:'help', execute:(line)=>{
    console.log('terminal help command called')
} }
]