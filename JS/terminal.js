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
            console.log('line[0]: '+line[0]) //log
            TERMINALCOMMANDS.forEach((COMMAND)=>{
                console.log('checking match to: '+COMMAND.name) //log
                if (COMMAND.name == line[0]) {
                    console.log('command detected: '+COMMAND.name) //log
                    COMMAND.execute()
                }
            })
        })
        console.log('TERMINAL: parsed') //log
    }
}

class terminalCommand {
    constructor(name,args,does) {
        this.name = ''
        this.args = []
        this.execute = function() {}
    }
}

// COMMANDS

const TERMINALCOMMANDS = [
    new terminalCommand('help',[],()=>{
        console.log('terminal help command called')
    })
]