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
                terminalOutput.style.height = (18 * terminalOutput.textContent.split('\n').length)+'px'
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (previousCommands.length > 0 && previousCommandsNav > 0) {
                previousCommandsNav -= 1
                terminalInput.value = previousCommands[previousCommands.length - 1 - previousCommandsNav]
                terminalOutput.style.height = (18 * terminalOutput.textContent.split('\n').length)+'px'
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
    })
})

function terminalRead() {
    console.log(TERMINALCOMMANDS)
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
        text = text.split('\n').map((line)=>line.split(' '))
        text.forEach((line)=>{
            TERMINALCOMMANDS.forEach((COMMAND)=>{
                if (COMMAND.name == line[0]) {
                    validCommand = true
                    console.log('TERMINAL: '+line) //log
                    terminalWrite(line.join(' '))
                    COMMAND.execute(line)
                }
            })
            if (!validCommand) {
                terminalWrite('ERROR: unknown command: '+line[0])
            }
        })
        terminal.scrollBy(0,999999)
        console.log('TERMINAL: parsed') //log
    }
}
function terminalWrite(text) {
    console.log('terminal write: '+text)
    terminalOutput.textContent = terminalOutput.textContent+'\n'+text
    terminalOutput.style.height = (18 * terminalOutput.textContent.split('\n').length)+'px'
    terminal.scrollBy(0,999999)
}

// COMMANDS

class TerminalCMND {
    constructor(name,args,does) {
        var name = name // [String]
        var args = args // [TerminalARG(name,takes,isOptional)]
        var does = does // (line)=>{} after vetting parameters
    }
    execute(text) {
        let line = text.split(' ').shift()
        var validArgs = 1
        var vettedArgs = []
        if (line.length != args.length) { // check # args
            terminalWrite('wrong num of args')
            return
        }
        for (let i=0; i < args.length; i++) {
            if (arg[i].takes.includes(line[i]) || arg[i].isOptional && line[i]=='-' || args[i].takes==[]) {
                vettedArgs.push(line[i])
                validArgs++
            } else if (arg[i].isOptional) {
                terminalWrite('ERROR: optional arg \"'+arg[i].name+'\" ')
            } else {
                terminalWrite('ERROR: compulsory arg \"'+arg[i].name+'\" does not take: '+line[i])
                terminalWrite('>  \'help '+arg[i].name+'\' for a detailed description.')
            }
        }
        if (validArgs==args.length) {this.does(vettedArgs)}
    }
}
class TerminalARG {
    constructor(name,takes,isOptional) {
        var name = name // String
        var takes = takes // [String]
        var isOptional = isOptional // Bool
    }
}

const terminalEcho = new TerminalCMND('echo',
    [new TerminalARG('package',[],false),
    new TerminalARG('to',[],true),
    new TerminalARG('append',['+','force'],true)],
(argList)=>{
    let package = argList[0]
    let to = argList[1]
    let append = argList[2]
    if (to=='-') {
        terminalWrite(package)
    } else if (append=='+') {
        if (Object.keys(localStorage).includes(to)) {
            if (to=='RF+') {
                terminalWrite('>  cannot write to RF+')
            } else {
                localStorage.setItem(to,(package+'\n'+localStorage.getItem(to)))
            }
        } else {
            terminalWrite('>  document \"'+to+'\" not found')
        }
    } else if (append=='force') {
        if (to=='RF+') {
            terminalWrite('>  cannot write to RF+')
        } else {
            localStorage.setItem(to,package)
        }
    }
})

var terminalHelp = new TerminalCMND('help',
    [new TerminalARG('cmnd',[],false),
    new TerminalARG('arg',[],true)],
(argList)=>{
    let cmnd = argList[0]
    let param = argList[1]
    if (cmnd=='-' && param=='-') {
        terminalWrite('>  \"help [cmnd] [arg]\"')
        terminalWrite('>  [cmnd]:')
        TERMINALCOMMANDS.forEach((c)=>{
            terminalWrite('>  '+c.name)
        })
    } else if (param=='-') {
        TERMINALCOMMANDS.forEach((c)=>{
            if (c.name==cmnd) {
                terminalWrite('>  \"help '+cmnd+'\" [arg]')
                terminalWrite('>  [arg]:')
                if (c.args==[]) {
                    terminalWrite('>   any')
                } else {
                    terminalWrite('>   '+c.args)
                }
            }
        })
    } else if (argList.length==2) {
        terminalWrite('ERROR: help: unknown')
    } else {
        terminalWrite('ERROR: help: unknown')
    }
}
)


/*
var terminalHelp = new TerminalCMND('help',['command'],
(line)=>{
    if (line.length==1) {
        TERMINALCOMMANDS.forEach((c)=>{
            terminalWrite('> '+c.name)
        })
    } else {
        TERMINALCOMMANDS.forEach((c)=>{
            if (c.name==line[1]) {
                terminalWrite('> '+c.name+' '+c.args)
            }
        })
    }
})
*/
var TERMINALCOMMANDS = [terminalHelp,terminalEcho]