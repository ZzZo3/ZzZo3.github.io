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
                TERMINAL.read()
            }
        } else if (event.key === "ArrowUp") {
            event.preventDefault()
            if (TERMINAL.previousCommands.length > 0 && TERMINAL.previousCommandsNav < TERMINAL.previousCommands.length) {
                if (TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1] != terminalInput.value && TERMINAL.previousCommandsNav==0) {
                    if (terminalInput.value=='') {
                        TERMINAL.previousCommands.push('')
                    } else {
                        if (!waiting) {
                            TERMINAL.previousCommands.push(terminalInput.value)
                        } else {
                            TERMINAL.previousCommands.push(TERMINAL.waitList)
                        }
                        TERMINAL.previousCommandToRemove = TERMINAL.previousCommands.length - 1
                    }
                }
                TERMINAL.previousCommandsNav += 1
                if (TERMINAL.previousCommandsNav==TERMINAL.previousCommands.length) {
                    TERMINAL.previousCommandsNav -= 1
                }
                terminalInput.value = TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1 - TERMINAL.previousCommandsNav]
                terminalOutput.style.height = (3 * terminalOutput.innerHTML.split('<br>').length)+'vh'
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault()
            if (TERMINAL.previousCommands.length > 0 && TERMINAL.previousCommandsNav > 0) {
                TERMINAL.previousCommandsNav -= 1
                terminalInput.value = TERMINAL.previousCommands[TERMINAL.previousCommands.length - 1 - TERMINAL.previousCommandsNav]
                terminalOutput.style.height = (3 * terminalOutput.innerHTML.split('<br>').length)+'vh'
            }
        }
    }
});

terminal.addEventListener('click', ()=>{
    terminalInput.focus()
})

terminalInput.addEventListener('input', ()=>{
    var text = terminalInput.value
    text = text.split('<br>')
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
    inputColor: 'rgb(255,216,132)',
    outputColor: 'rgb(255,216,132)',
write(text) {
    console.log('TERMINAL: writing') //log
    text = text.split('\n').join('<br> ').split(' ').map((word)=>{
        console.log('word: '+word)
        var spanTxt = ''
        if (word.includes('%c')) {
            word = word.split('%c')
            console.log('wordc1: '+word)
            spanTxt += 'color:'+word[1]
            word.splice(1,1)
            word = word.join('')
            console.log('wordc2: '+word)
        } else {
            spanTxt += 'color:rgb(255,216,132)'
        }
        console.log('spanTxt: '+spanTxt)
        if (word.includes('%w')) {
            word = word.split('%w')
            console.log('wordw1: '+word)
            spanTxt += '; font-weight:'+word[1]
            word.splice(1,1)
            word = word.join('')
            console.log('wordw2: '+word)
        } else {
            spanTxt += '; font-weight:normal'
        }
        console.log('word: '+word)
        console.log('spanTxt: '+spanTxt)
        console.log('returns: <span style=\"'+spanTxt+'\">'+word+'</span>')
        return '<span style=\"'+spanTxt+'\">'+word+'</span>'
    }).join(' ')
    terminalOutput.innerHTML = terminalOutput.innerHTML+'<br>'+text
    terminalOutput.style.height = (3 * terminalOutput.innerHTML.split('<br>').length)+'vh'
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
unaim() {
    console.log('TERMINAL: cleared queue')
    this.queue = []
},
await(replyArr) {
    console.log('TERMINAL: awaiting') //log
    this.waiting = true
    this.acceptableReplies = replyArr
},
read() {
    var text = terminalInput.value
    console.log('TERMINAL: reading') //log
    if (text=='') {
        return
    }
    this.previousCommands.push(text)
    this.previousCommandsNav = 0
    if (this.previousCommandToRemove != 0) {
        this.previousCommands = this.previousCommands.splice(this.previousCommandToRemove,1)
    }
    this.previousCommands = this.previousCommands.filter((value)=>value != '')
    terminalInput.value = ''
    terminalInput.style.height = '3vh'
    if (!this.waiting) {
        text = text.split('<br>')
        text.forEach((line)=>{
            this.write(line)
            this.parse(line)
        })
    } else if (text == 'cancel') {
        this.write('AWAIT: cancelled')
        this.waitList = []
        this.waiting = false
    } else {
        if (this.acceptableReplies.includes(text)) {
            this.waitList += ' '+text
            this.waitList = this.waitList.split('<br>').join(' ')
            console.log('TERMINAL.waitList: '+this.waitList)
            this.write(this.waitList)
            this.parse(this.waitList)
            this.waitList = []
            this.waiting = false
        } else {
            this.write('ERROR: \"'+text+'\" not acceptable reply')
            TERMINAL.write('>  Try \'help\'.')
        }
    }
},
parse(line) {
    console.log('TERMINAL: parsing') //log
    line = line.split(' ')
    var validCommand = false
    TERMINALCOMMANDS.forEach((COMMAND)=>{
        if (COMMAND.name.includes(line[0])) {
            validCommand = true
            COMMAND.execute(line)
        }
    })
    if (!validCommand) {
        this.write('ERROR: unknown command: '+line[0])
        TERMINAL.write('>  Try \'help\'.')
    }
    terminal.scrollBy(0,999999)
}
}

// COMMANDS

class TerminalCMND {
    constructor(name,helpMsg,args,does) {
        this.name = name // [String]
        this.helpMsg = helpMsg // long ass string to be printed on help query
        this.args = args // [TerminalARG(name,takes,isOptional)]
        this.does = does // (line)=>{} after vetting parameters
    }
    execute(line) { // takes array of words in command
        if (typeof line[0] != 'string') {
            TERMINAL.write('ERROR: failed to parse')
            TERMINAL.write('>  Try \'help '+this.name[0]+'\' for a detailed description.')
            console.log('terminal failed to parse line as string')
            console.log(line)
            return
        }
        let lineNotFirst = [...line]
        lineNotFirst.shift() // removes command name from line2[]
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
            TERMINAL.write('>  Try \'help '+this.name[0]+'\' for a detailed description.')
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
                TERMINAL.write('ERROR: optional arg ['+this.args[i].name+'] is ignored with -')
                TERMINAL.write('>  Try \'help '+this.name[0]+'\' for a detailed description.')
            } else {
                TERMINAL.write('ERROR: compulsory arg ['+this.args[i].name+'] does not take: '+lineNotFirst[i])
                TERMINAL.write('>  Try \'help '+this.name[0]+'\' for a detailed description.')
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
`
SYNTAX:%cred \' help [cmnd]%clime \'
PURPOSES:%cred 
⠀⠀⠀\'help\' explains syntax and purpose of a named locally available command.
⠀⠀⠀\'help\' is globally available.
⠀⠀⠀ * Some commands are available across all instances of TERMINAL.js while others are only available in specific html files within the
⠀⠀⠀   n0n-sense.org domain.
ARGUMENTS:%cred 
⠀⠀⠀[cmnd]%clime (optional)* takes name of any command. If ignored, the name(s) of all locally available commands are displayed with an AWAIT
⠀⠀⠀statement*.
⠀⠀⠀ * Optional arguments are automatically ignored if they appear as the last argument in a command and are left blank.
⠀⠀⠀   They may be manually ignored with \'-\'.
⠀⠀⠀ * An AWAIT statement is a query, called with acceptable replies for the user to pick from. Any AWAIT statemnet may also be cancelled
⠀⠀⠀   with \'cancel\'.
`,
    [new TerminalARG('cmnd',[],true)],
(argList)=>{
    if (argList[0]=='-') {
        TERMINAL.write('AWAIT: Choose a command to elaborate, or \'cancel\'')
        var acceptables = ['cancel']
        TERMINALCOMMANDS.forEach((c)=>{
            TERMINAL.write('>  '+c.name[0])
            acceptables.push(c.name[0])
        })
        TERMINAL.waitList = 'help'
        TERMINAL.await(acceptables)
    } else if (argList[0] != 'cancel') {
        var validHelp = false
        TERMINALCOMMANDS.forEach((CMND)=>{
            if (CMND.name.includes(argList[0])) {
                validHelp = true
                TERMINAL.parse('line')
                TERMINAL.write(CMND.helpMsg)
                TERMINAL.parse('line')
            }
        })
        if (!validHelp) {
            TERMINAL.write('ERROR: optional arg [cmnd] does not take: '+argList[i])
            TERMINAL.write('>  Try \'help help\' for a detailed description.')
        }
    } else {
        TERMINAL.write('AWAIT: cancelled')
    }
}),
new TerminalCMND(['list','ls'], // LIST
`
SYNTAX:%cred \' list [type]%clime [key]%clime \'
⠀⠀⠀Alternate name: \'ls\'
PURPOSES:%cred 
⠀⠀⠀\'list\' displays a list of keys for data stored in either {localStorage} or {sessionStorage}.
⠀⠀⠀\'list\' is globally available.
⠀⠀⠀ * Some commands are available across all instances of TERMINAL.js while others are only available in specific html files within the
⠀⠀⠀   n0n-sense.org domain.
ARGUMENTS:%cred 
⠀⠀⠀[type]%clime takes \'local\'/\'l\' or \'session\'/\'s\' to determine what dictionary to search.
⠀⠀⠀- \'local\'/\'l\' sets the searchable dictionary to {localStorage}.
⠀⠀⠀  These data are stored in local browser files persists between sessions.
⠀⠀⠀- \'session\'/\'s\' sets the searchable dictionary to {sessionStorage}.
⠀⠀⠀  These data are stored in local browser files and are cleared upon tab close or hard refresh.
⠀⠀⠀[key]%clime (optional)* takes any input. If ignored, keys for all data in the searchable dictionary will be displayed. If given 
⠀⠀⠀an input, only keys prefixed with that input will be displayed.
⠀⠀⠀ * Optional arguments are automatically ignored if they appear as the last argument in a command and are left blank.
⠀⠀⠀   They may be manually ignored with \'-\'.
`,
    [new TerminalARG('type',['local','l','session','s'],false),
    new TerminalARG('key',[],true)],
(argList)=>{
    var validKey = false
    if (argList[1]=='-') {
        validKey = true
        if (argList[0]=='local' || argList[0]=='l') {
            TERMINAL.aim('localStorage data:')
            Object.keys(localStorage).forEach((datum)=>{
                TERMINAL.aim('>  '+datum)
            })
        } else {
            TERMINAL.aim('sessionStorage data:')
            Object.keys(sessionStorage).forEach((datum)=>{
                TERMINAL.aim('>  '+datum)
            })
        }
    } else {
        var keys = []
        var keyTitles = []
        if (argList[0]=='local' || argList[0]=='l') {
            keys = [...Object.keys(localStorage)]
        } else {
            keys = [...Object.keys(sessionStorage)]
        }
        keys = keys.map(key=>key.split(':'))
        keys.forEach((key)=>{
            keyTitles.push(key[0])
        })
        var validKeyTitle = false
        keyTitles.forEach((title)=>{
            if (title.toLowerCase()==argList[1].toLowerCase()) {
                validKeyTitle = true
            }
        })
        if (validKeyTitle) {
            validKey = true
            TERMINAL.aim('localStorage data of key \"'+argList[1]+':...\":')
            keys.forEach((key)=>{
                if (key[0].toLowerCase()==argList[1].toLowerCase()) {
                    TERMINAL.aim('>  '+key.join(':'))
                }
            })
        } else {
            TERMINAL.write('ERROR: no data of key \"'+argList[1]+'\" found.')
            TERMINAL.write('>  Try \'help list\' for a detailed description.')
        }
    }
    if (validKey) {
        TERMINAL.parse('line')
        TERMINAL.fire()
        TERMINAL.write('<br>')
        TERMINAL.parse('line')
    }
}),
new TerminalCMND(['echo'], // ECHO
`
SYNTAX: \'echo [package] [to] [append]\'
PURPOSES:
⠀⠀⠀
⠀⠀⠀\'echo\' is globally available.
⠀⠀⠀ * Some commands are available across all instances of TERMINAL.js while others are only available in specific html files within the
⠀⠀⠀   n0n-sense.org domain.
ARGUMENTS:
⠀⠀⠀
`,
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
                localStorage.setItem(to,(package+'<br>'+localStorage.getItem(to)))
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
}),
new TerminalCMND(['line'], // LINE
`
SYNTAX:%cred \' line [color]%lime \'
PURPOSES:%cred 
⠀⠀⠀\'line\' calls TERMINAL.write() with a long sequence of equal signs. See ^ or v for examples.
⠀⠀⠀\'line\' is globally available.
⠀⠀⠀ * Some commands are available across all instances of TERMINAL.js while others are only available in specific html files within the
⠀⠀⠀   n0n-sense.org domain.
ARGUMENTS:%cred 
⠀⠀⠀[color]%lime (optional)* takes any input. If ignored, the line will display in the default color. If given a value of a valid color, the line will
⠀⠀⠀display with that color.
⠀⠀⠀ * Optional arguments are automatically ignored if they appear as the last argument in a command and are left blank.
⠀⠀⠀   They may be manually ignored with \'-\'.
`,
    [new TerminalARG('color',[],true)],
(argList)=>{
    if (argList[0]=='-') {
        TERMINAL.write('======================================================================================================================================================')
    } else {
        TERMINAL.write('======================================================================================================================================================%c'+argList[0]+' ')
    }
}),
new TerminalCMND(['swath','swa'], // COLOR
`
SYNTAX:%cred \' swath [color]%clime \'
⠀⠀⠀Alternate name: \'swa\'
PURPOSES:%cred 
⠀⠀⠀\'swath\' displays a square of a specified color for testing purposes.
⠀⠀⠀\'swath\' is globally available.
⠀⠀⠀ * Some commands are available across all instances of TERMINAL.js while others are only available in specific html files within the
⠀⠀⠀   n0n-sense.org domain.
ARGUMENTS:%cred 
⠀⠀⠀[color]%clime takes any input. If given a value of a valid color, the square will display with that color.
⠀⠀⠀- \'rainbow\' displays all universally available CSS colors in order.
⠀⠀⠀ * Optional arguments are automatically ignored if they appear as the last argument in a command and are left blank.
`,
    [new TerminalARG('color',[],false)],
(argList)=>{
    if (argList[0] != 'rainbow') {
        TERMINAL.write('████████████████████████%c'+argList[0]+' '+argList[0])
    } else {
        const colors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure',
        'Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood',
        'CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan',
        'DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGreen','DarkKhaki','DarkMagenta',
        'DarkOliveGreen','DarkOrage','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue',
        'DarkSlateGray','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DodgerBlue','FireBrick'
        'FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Green','GreenYellow',
        'HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon',
        'LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGreen','LightPink','LightSalmon',
        'LightSeaGreen','LightSkyBlue','LightSlateGray','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta',
        'Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen',
        'MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace',
        'Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip',
        'PeachPuff','Peru','Pink','Plum','Powderblue','Purple','RebeccaPurple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon',
        'SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','Snow','SpringGreen','SteeleBlue',
        'Tan','Teal','Thisle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen']
        colors.forEach((color)=>{
        TERMINAL.write('████████████████████████%c'+color+' '+color)
        })
    }
})
]