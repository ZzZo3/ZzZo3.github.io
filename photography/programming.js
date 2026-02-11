//BASE
const photoCount = '0'
const pageTitle = document.getElementsByClassName('pageTitle')

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'Photos! ['+photoCount+']'
    }
    console.log('   \"loadFunc()\" finished')
}