//BASE
let photoCount = 0
const pageTitle = document.getElementsByClassName('pageTitle')
//DYNAMIC IMAGE DISPLAY
const dynamicImageDisplay = document.getElementsByClassName('dynamicImageDisplay')
const dynamicImageRow = document.getElementsByClassName('dynamicImageRow')
const dynamicImageData = document.getElementsByClassName('dynamicImageData')

//DISPLAY jpegs

function loadJpegs() {
    for (const element of dynamicImageData) {
        var name = element.getAttribute('data-name')
        if (name =! 'PLACE') {
            element.innerHTML = '<image class=\"photoData\" src=\"./assets/photo/'+name+'.jpeg\" alt=\"'+name+'\" loading=\"lazy\">'
        } else {
            element.innerHTML = '<image class=\"photoData\" src=\"./assets/photo/placeholder.png\" alt=\"PLACE\" loading=\"lazy\">'
        }
    }
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    photoCount = dynamicImageData.length
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'Photos! ['+photoCount+']'
    }
    loadJpegs()
    console.log('   \"loadFunc()\" finished')
}