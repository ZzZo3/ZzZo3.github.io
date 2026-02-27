//BASE
const terminal = document.getElementById('terminal')
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')
//
var previousCommands = []
var previousCommandsNav = 1

//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault()
                terminalRead()
            }
        } else if (event.key === "ArrowUp") {
            event.preventDefault()
            if (previousCommands.length > 0 && previousCommandsNav < previousCommands.length) {
                console.log(previousCommands)
                console.log(previousCommandsNav)
                previousCommands.push(terminalInput.value)
                terminalInput.value = previousCommands[previousCommands.length - previousCommandsNav]
                previousCommandsNav += 1
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (previousCommandsNav > 0) {
                console.log(previousCommands)
                console.log(previousCommandsNav)
                terminalInput.value = previousCommands[previousCommands.length - 1]
                previousCommandsNav -= 1
            }
        }
    }
});

terminal.addEventListener('click', ()=>{
    terminalInput.focus()
})

terminalInput.addEventListener('input', ()=>{
    var text = terminalInput.value
    text = text.split('\n')
    terminalInput.style.height = (18 * text.length)+'px'
    terminal.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
})

function terminalRead() {
    previousCommands.push(terminalInput.value)
    if (terminalInput.value != '') {
        console.log('TERMINAL: parsing') //log
        var text = terminalInput.value
        var validCommand = false
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
                    validCommand = true
                }
            })
            if (!validCommand) {
                terminalWrite('ERROR: unknown command: '+line[0])
            }
        })
        terminal.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
        console.log('TERMINAL: parsed') //log
    }
}
function terminalWrite(text) {
    console.log('terminal write: '+text)
    terminalOutput.textContent = terminalOutput.textContent+'\n'+text
    terminalOutput.style.height = (18 * terminalOutput.textContent.split('\n').length)+'px'
}

// COMMANDS

const TERMINALCOMMANDS = [
{ name:'help', execute:(line)=>{
    console.log('terminal help command called')
} }
]