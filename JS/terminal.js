//BASE
const terminalInput = document.getElementById('terminalInput')

//KEY LISTENER
document.addEventListener('keydown', (event)=>{
    console.log('Key: \"' + event.key + '\"');
    if (document.activeElement === terminalInput) { // detect Enter / shift+Enter in terminalInput
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                terminalReturn()
            } else {
                var height = window.getComputedStyle(terminalInput).height
                var pixels = parseInt(height.replace('px',''))
                height = (pixels + 18)+'px'
                terminalInput.style.height = height
            }
        }
    }
});

terminalInput.addEventListener('input', ()=>{
    alert('input')
});

function terminalReturn() {
    console.log('TERMINAL: returning')
    console.log('TERMINAL: returned')
}