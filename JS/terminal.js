//BASE
const terminalInput = document.getElementById('terminalInput')
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
    alert('terminal parse called')
    console.log('TERMINAL: parsing')
    var text = terminalInput.value
    command = text.split('\n').map((line)=>line.split(' '))
    terminalInput.value = ''
    console.log('TERMINAL: parsed')
}