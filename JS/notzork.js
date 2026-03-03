//BASE
const vNum = '0.0.c'
const pageTitle = document.getElementsByClassName('pageTitle')

TERMINALCOMMANDS.push(
new TerminalCMND(['line'], // LINE
    [],
(argList)=>{
    TERMINAL.write('========================================================================================================================================================================================================================================================================')
})
)


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'ZzZ0rk! '+vNum
    }
    document.getElementById('terminal').style.height = (36*18)+'px'
    console.log('   \"loadFunc()\" finished')
}