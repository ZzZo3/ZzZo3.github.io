//BASE
const vNum = '0.0'
const pageTitle = document.getElementsByClassName('pageTitle')

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'ZzZ0rk! '+vNum
    }
    document.getElementById('terminal').style.height = (36*18)+'px'
    console.log('   \"loadFunc()\" finished')
}