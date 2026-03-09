//BASE
var photoCount = 0
//DYNAMIC IMAGE DISPLAY
const dynamicImageDisplay = document.getElementsByClassName('dynamicImageDisplay')
const dynamicImageRow = document.getElementsByClassName('dynamicImageRow')
const dynamicImageData = document.getElementsByClassName('dynamicImageData')

//DISPLAY jpegs

function loadJpegs() {
    for (const element of dynamicImageData) {
        var name = element.getAttribute('data-name')
        if (name != 'PLACE') {
            element.innerHTML = '<image class=\"photoData\" src=\"./assets/photo/'+name+'.jpeg\" alt=\"'+name+'\" loading=\"lazy\">'
            photoCount++
        } else {
            element.innerHTML = '<image class=\"photoData PLACE\" src=\"./assets/photo/placeholder.png\" alt=\"PLACE\" loading=\"lazy\">'
        }
        document.getElementsByClassName('pageTitle').forEach((element)=>{
            element.textContent = 'Photos! ['+photoCount+']'
        })
    }
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    loadJpegs()
    console.log('   \"loadFunc()\" finished')
}