//BASE
const terminal = document.getElementById('terminal')
const terminalInput = document.getElementById('terminalInput')
const terminalOutput = document.getElementById('terminalOutput')


//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault()
                TERMINAL.read(terminalInput.value)
            }
        } else if (event.key === "ArrowUp") {
            event.preventDefault()
            if (TERMINAL.previousCommands.length > 0 && TERMINAL.previousCommandsNav < TERMINAL.previousCommands.length) {
                if (TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1] != terminalInput.value && TERMINAL.previousCommandsNav==0) {
                    if (terminalInput.value=='') {
                        TERMINAL.previousCommands.push('')
                    } else {
                        TERMINAL.previousCommands.push(terminalInput.value)
                        TERMINAL.previousCommandToRemove = TERMINAL.previousCommands.length - 1
                    }
                }
                TERMINAL.previousCommandsNav += 1
                if (TERMINAL.previousCommandsNav==TERMINAL.previousCommands.length) {
                    TERMINAL.previousCommandsNav -= 1
                }
                terminalInput.value = TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1 - TERMINAL.previousCommandsNav]
                terminalOutput.style.height = (3 * terminalOutput.textContent.split('\n').length)+'vh'
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (TERMINAL.previousCommands.length > 0 && TERMINAL.previousCommandsNav > 0) {
                TERMINAL.previousCommandsNav -= 1
                terminalInput.value = TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1 - TERMINAL.previousCommandsNav]
                terminalOutput.style.height = (3 * terminalOutput.textContent.split('\n').length)+'vh'
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
    terminalInput.style.height = (3 * text.length)+'vh'
    terminal.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
})


// TERMINAL OBJECT

var TERMINAL = {
    previousCommands: [],
    previousCommandsNav: 0,
    previousCommandToRemove: 0,
    queue: [],
    waiting: false,
    waitList: '',
    acceptableReplies: [],
write(text) {
    console.log('TERMINAL: writing') //log
    terminalOutput.textContent = terminalOutput.textContent+'\n'+text
    terminalOutput.style.height = (3 * terminalOutput.textContent.split('\n').length)+'vh'
    terminal.scrollBy(0,999999)
},
aim(text) {
    console.log('TERMINAL: queueing')
    this.queue.push(text)
},
fire() {
    console.log('TERMINAL: firing')
    this.queue.forEach((item)=>{
        this.write(item)
    })
    this.queue = []
},
await(replyArr) {
    console.log('TERMINAL: awaiting') //log
    this.waiting = true
    this.acceptableReplies = replyArr
},
read(text) {
    console.log('TERMINAL: reading') //log
    if (terminalInput.value != '') {
        this.previousCommands.push(terminalInput.value)
        this.previousCommandsNav = 0
        if (this.previousCommandToRemove != 0) {
            this.previousCommands = this.previousCommands.splice(this.previousCommandToRemove,1)
        }
        this.previousCommands = this.previousCommands.filter((value)=>value != '')
        terminalInput.value = ''
        terminalInput.style.height = '3vh'
        if (!this.waiting) {
            text = text.split('\n')
            text.forEach((line)=>{
                this.write(line)
                this.parse(line)
            })
        } else {
            if (this.acceptableReplies.includes(text)) {
                this.waitList += ' '+text
                this.waitList = this.waitList.split('\n').join(' ')
                console.log('TERMINAL.waitList: '+this.waitList)
                this.write(this.waitList)
                this.parse(this.waitList)
                this.waitList = []
                this.waiting = false
            } else {
                this.write('ERROR: \"'+text+'\" not acceptable reply')
            }
        }
    } 
},
parse(line1) {
    console.log('TERMINAL: parsing') //log
    line1 = line1.split(' ')
    alert('parsing: '+line1)
    var validCommand = false
    TERMINALCOMMANDS.forEach((COMMAND)=>{
        if (COMMAND.name.includes(line1[0])) {
            alert('COMMAND.name: '+COMMAND.name+' includes [0] of: '+line1)
            validCommand = true
            COMMAND.execute(line1)
            alert('after executing, line1: '+line1)
        }
    })
    if (!validCommand) {
        this.write('ERROR: unknown command: '+line1[0])
    }
    terminal.scrollBy(0,999999)
}
}

// COMMANDS

class TerminalCMND {
    constructor(name,args,does) {
        this.name = name // [String]
        this.args = args // [TerminalARG(name,takes,isOptional)]
        this.does = does // (line)=>{} after vetting parameters
    }
    execute(line2) { // takes array of words in command
        alert('executing: '+this.name[0])
        if (typeof line2[0] != 'string') {
            TERMINAL.write('ERROR: failed to parse')
            console.log('terminal failed to parse line as string')
            console.log(line2)
            return
        }
        let lineNotFirst = line2.shift() // removes command name from line2[]
        var validArgs = 0
        var vettedArgs = []
        var optionals = 0
        this.args.forEach((arg)=>{
            if (arg.isOptional) {
                optionals++
            }
        })
        if (lineNotFirst.length < this.args.length - optionals) { // check # args
            TERMINAL.write('ERROR: incorrect argument count')
            console.log('terminal incorrect argument count')
            return
        }
        if (this.args.length==0) {
            this.does(lineNotFirst)
            return
        }
        for (let i=0; i < this.args.length; i++) {
            if (lineNotFirst.length < i+1 && this.args[i].isOptional) {
                vettedArgs.push('-')
                validArgs++
            } else if (this.args[i].takes.includes(lineNotFirst[i]) || this.args[i].isOptional && lineNotFirst[i]=='-' || this.args[i].takes.length==0) {
                vettedArgs.push(lineNotFirst[i])
                validArgs++
            } else if (this.args[i].isOptional || this.args[i].isOptional) {
                TERMINAL.write('ERROR: optional arg \"'+this.args[i].name+'\" is ignored with -')
            } else {
                TERMINAL.write('ERROR: compulsory arg \"'+this.args[i].name+'\" does not take: '+lineNotFirst[i])
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

var TERMINALCOMMANDS = [
new TerminalCMND(['help'], // HELP
    [new TerminalARG('cmnd',[],true)],
(argList)=>{
    if (argList[0]=='-') {
        TERMINAL.write('>  reply with one of the following commands')
        var acceptables = []
        TERMINALCOMMANDS.forEach((c)=>{
            TERMINAL.write('>  '+c.name[0])
            acceptables.push(c.name[0])
        })
        TERMINAL.waitList = 'help'
        TERMINAL.await(acceptables)
    } else {
        TERMINALCOMMANDS.forEach((CMND)=>{
            if (CMND.name==argList[0]) {
                TERMINAL.write('bingo')
            }
        })
    }
}),
new TerminalCMND(['test'],
    [new TerminalARG('testArg',['line'])],
(argList)=>{
    TERMINAL.write('test')
}),
new TerminalCMND(['options'], // OPTIONS
    [new TerminalARG('option',['height'],false),
    new TerminalARG('value',[],false)],
(argList)=>{
    let option = argList[0]
    let value = argList[1]
    if (option=='height') {
        terminal.style.height = (3 * parseInt(value))+'vh'
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