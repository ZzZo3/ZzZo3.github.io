//BASE
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')
//

//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    console.log('Key: \"' + event.key + '\"');
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
    console.log('TERMINAL: parsing')
    var text = terminalInput.value
    console.log(text)
    terminalInput.value = ''
    terminalInput.style.height = '18px'
    command = text.split('\n').map((line)=>line.split(' '))
    command.forEach((line)=>{
        TERMINALCOMMANDS.forEach((COMMAND)=>{
            if (COMMAND.name === line[0]) {
                COMMAND.execute()
            }
        })
    })
    console.log('TERMINAL: parsed')
}

class terminalCommand {
    constructor(name,args,does) {
        this.name = ''
        this.args = []
        this.execute = function() {}
    }
}

// COMMANDS
const TERMINALCOMMANDS = [terminalHelp]

const terminalHelp = new terminalCommand('help',[],()=>{
    console.log('terminal help command called')
})