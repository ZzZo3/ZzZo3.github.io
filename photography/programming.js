//BASE
let photoCount = 0
const pageTitle = document.getElementsByClassName('pageTitle')
//DYNAMIC IMAGE DISPLAY
const dynamicImageDisplay = document.getElementsByClassName('dynamicImageDisplay')
const dynamicImageRow = document.getElementsByClassName('dynamicImageRow')
const dynamicImageData = document.getElementsByClassName('dynamicImageData')

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    photoCount = dynamicImageData.length
    alert(photoCount.toString)
    for(let i = 0; i<pageTitle.length; i++) {
        pageTitle[i].textContent = 'Photos! ['+photoCount.toString+']'
    }
    console.log('   \"loadFunc()\" finished')
}