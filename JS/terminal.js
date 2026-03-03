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
                TERMINAL.read()
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


// TERMINAL OBJECT

var TERMINAL = {
write(text) {
    console.log('TERMINAL: writing') //log
    terminalOutput.textContent = terminalOutput.textContent+'\n'+text
    terminalOutput.style.height = (18 * terminalOutput.textContent.split('\n').length)+'px'
    terminal.scrollBy(0,999999)
    console.log('TERMINAL: wrote') //log
},
read() {
    console.log('TERMINAL: reading') //log
    if (terminalInput.value != '') {
        previousCommands.push(terminalInput.value)
        previousCommandsNav = 0
        if (previousCommandToRemove != 0) {
            previousCommands = previousCommands.splice(previousCommandToRemove,1)
        }
        previousCommands = previousCommands.filter((value)=>value != '')
        var text = terminalInput.value
        terminalInput.value = ''
        terminalInput.style.height = '18px'
        let line = text.split('\n').map((line)=>line.split(' '))
        this.write(line.join(' '))
        this.parse(line)
    }
    console.log('TERMINAL: read') //log
},
parse(line) {
    console.log('TERMINAL: parsing') //log
    var validCommand = false
    text.forEach((line)=>{
        TERMINALCOMMANDS.forEach((COMMAND)=>{
            if (COMMAND.name.includes(line[0])) {
                validCommand = true
                console.log('TERMINAL: '+line) //log
                COMMAND.execute(line)
            }
        })
        if (!validCommand) {
            this.write('ERROR: unknown command: '+line[0])
        }
    })
    terminal.scrollBy(0,999999)
    console.log('TERMINAL: parsed') //log
}
}

// COMMANDS

class TerminalCMND {
    constructor(name,args,does) {
        this.name = name // [String]
        this.args = args // [TerminalARG(name,takes,isOptional)]
        this.does = does // (line)=>{} after vetting parameters
    }
    execute(line) { // takes array of words in command
        if (typeof line[0] != 'string') {
            TERMINAL.write('ERROR: failed to parse')
            console.log('terminal failed to parse line as string')
            console.log(line)
            return
        }
        line.shift() // removes command name from line[]
        var validArgs = 0
        var vettedArgs = []
        var optionals = 0
        this.args.forEach((arg)=>{
            if (arg.isOptional) {
                optionals++
            }
        })
        if (line.length < this.args.length - optionals) { // check # args
            TERMINAL.write('ERROR: incorrect argument count')
            console.log('terminal incorrect argument count')
            console.log(this.args)
            console.log(line)
            return
        }
        if (this.args.length==0) {
            this.does(line)
            return
        }
        for (let i=0; i < this.args.length; i++) {
            if (line.length < i+1 && this.args[i].isOptional) {
                console.log('terminal arg case 1')
                vettedArgs.push('-')
                validArgs++
            } else if (this.args[i].takes.includes(line[i]) || this.args[i].isOptional && line[i]=='-' || this.args[i].takes.length==0) {
                console.log('terminal arg case 2')
                vettedArgs.push(line[i])
                validArgs++
            } else if (this.args[i].isOptional || this.args[i].isOptional) {
                console.log('terminal arg case 3')
                TERMINAL.write('ERROR: optional arg \"'+this.args[i].name+'\" is ignored with -')
            } else {
                console.log('terminal arg case 4')
                TERMINAL.write('ERROR: compulsory arg \"'+this.args[i].name+'\" does not take: '+line[i])
                TERMINAL.write('>  \'help '+this.args[i].name+'\' for a detailed description.')
            }
        }
        if (validArgs==this.args.length) {this.does(vettedArgs)}
    }
}

class TerminalARG {
    constructor(name,takes,isOptional) {
        this.name = name // String
        this.takes = takes // [String]
        this.isOptional = isOptional // Bool
    }
}

/* COMMAND FORMAT

new TerminalCMND([''],
    [new TerminalARG('',[],false),
    new TerminalARG('',[],true),
    new TerminalARG('',['',''],true)],
(argList)=>{}
)

*/

var TERMINALCOMMANDS = [/*new TerminalCMND(['help'], // HELP
    [new TerminalARG('cmnd',[],true),
    new TerminalARG('arg',[],true)],
(argList)=>{
    let cmnd = argList[0]
    let param = argList[1]
    if (cmnd=='-' && param=='-') {
        TERMINAL.write('>  \"help [cmnd] [arg]\"')
        TERMINAL.write('>  [cmnd]:')
        TERMINALCOMMANDS.forEach((c)=>{
            TERMINAL.write('>  '+c.name[0])
        })
    } else if (param=='-') {
        TERMINALCOMMANDS.forEach((c)=>{
            if (c.name[0]==cmnd) {
                TERMINAL.write('>  \"help '+cmnd+'\" [arg]')
                TERMINAL.write('>  [arg]:')
                if (c.args==[]) {
                    TERMINAL.write('>   any')
                } else {
                    TERMINAL.write('>   '+c.args)
                }
            }
        })
    } else if (argList.length==2) {
        TERMINALCOMMANDS.forEach((c)=>{
            if (c.name[0]==cmnd) {
                TERMINAL.write('>  param: '+param)
            }
        })
    } else {
        TERMINAL.write('ERROR: help: unknown')
    }
}),*/
new TerminalCMND(['help'], // HELP
    [new TerminalARG('cmnd',[],true)],
(argList)=>{
    if (argList[0]='-') {
        TERMINAL.write('>  \"help [cmnd]\"')
        TERMINAL.write('>  [cmnd]:')
        TERMINALCOMMANDS.forEach((c)=>{
            TERMINAL.write('>  '+c.name[0])
        })
    } else {
        TERMINALCOMMANDS.forEach((CMND)=>{
            if (CMND.name==argList[0]) {
                var helpedArgs = ''
                CMND.args.forEach((ARG)=>{
                    helpedArgs += (' ['+ARG.name+']')
                })
                TERMINAL.write('>  '+CMND.name+helpedArgs)
                CMND.args.forEach((ARG)=>{
                    if (ARG.takes.length > 0) {
                        TERMINAL.write('>  \"'+ARG.name+'\" takes:')
                        ARG.takes.forEach((take)=>{
                            TERMINAL.write('>  '+take)
                        })
                    } else {
                        TERMINAL.write('>  ['+ARG.name+'] takes any/unknown')
                    }
                })
            }
        })
    }
}),
new TerminalCMND(['options'], // OPTIONS
    [new TerminalARG('option',['height'],false),
    new TerminalARG('value',[],false)],
(argList)=>{
    let option = argList[0]
    let value = argList[1]
    if (option=='height') {
        terminal.style.height = (18 * parseInt(value))+'px'
    }
}),
new TerminalCMND(['list','ls'], // LIST
    [new TerminalARG('type',[],false)],
(argList)=>{
    if (argList[0]=='local' || argList[0]=='l') {
        Object.keys(localStorage).forEach((datum)=>{
        TERMINAL.write('>  '+datum)
        })
    } else if (argList[0]=='session' || argList[0]=='s') {
        Object.keys(sessionStorage).forEach((datum)=>{
        TERMINAL.write('>  '+datum)
        })
    } else {
        Object.keys(localStorage).forEach((datum)=>{
            let datumSplit = datum.split(':')
            if (datumSplit[0].toLowerCase()==argList[0].toLowerCase())
        TERMINAL.write('>  '+datumSplit[1])
        })
    }
}),
new TerminalCMND(['echo'], // ECHO
    [new TerminalARG('package',[],false),
    new TerminalARG('to',[],true),
    new TerminalARG('append',['+','force'],true)],
(argList)=>{
    let package = argList[0]
    let to = argList[1]
    let append = argList[2]
    if (to=='-') {
        TERMINAL.write(package)
    } else if (append=='+') {
        if (Object.keys(localStorage).includes(to)) {
            if (to=='RF+') {
                TERMINAL.write('>  cannot write to RF+')
            } else {
                localStorage.setItem(to,(package+'\n'+localStorage.getItem(to)))
            }
        } else {
            TERMINAL.write('>  document \"'+to+'\" not found')
        }
    } else if (append=='force') {
        if (to=='RF+') {
            TERMINAL.write('>  cannot write to RF+')
        } else {
            localStorage.setItem(to,package)
        }
    }
})]