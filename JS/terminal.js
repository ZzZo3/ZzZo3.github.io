//BASE
const terminal = document.getElementById('terminal')
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')
//
var previousCommands = []
var previousCommandsNav = 0
var previousCommandToRemove = 0

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
                if (previousCommands[previousCommands.length - 1] != terminalInput.value && previousCommandsNav==0) {
                    if (terminalInput.value=='') {
                        previousCommands.push('')
                    } else {
                        previousCommands.push(terminalInput.value)
                        previousCommandToRemove = previousCommands.length - 1
                    }
                }
                previousCommandsNav += 1
                if (previousCommandsNav==previousCommands.length) {
                    previousCommandsNav -= 1
                }
                terminalInput.value = previousCommands[previousCommands.length - 1 - previousCommandsNav]
                console.log(previousCommands)
                console.log(previousCommandsNav)
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (previousCommands.length > 0 && previousCommandsNav > 0) {
                previousCommandsNav -= 1
                terminalInput.value = previousCommands[previousCommands.length - 1 - previousCommandsNav]
                console.log(previousCommands)
                console.log(previousCommandsNav)
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
    if (terminalInput.value != '') {
        previousCommands.push(terminalInput.value)
        previousCommandsNav = 0
        if (previousCommandToRemove != 0) {
            previousCommands = previousCommand.splice(previousCommandToRemove,1)
        }
        previousCommands = previousCommands.filter((value)=>value != '')
        var text = terminalInput.value
        var validCommand = false
        terminalInput.value = ''
        terminalInput.style.height = '18px'
        command = text.split('\n').map((line)=>line.split(' '))
        command.forEach((line)=>{
            TERMINALCOMMANDS.forEach((COMMAND)=>{
                if (COMMAND.name == line[0]) {
                    console.log('TERMINAL: '+line) //log
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