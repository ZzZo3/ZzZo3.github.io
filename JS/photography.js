//BASE
var photoCount = 0
const pageTitle = document.getElementsByClassName('pageTitle')
//DYNAMIC IMAGE DISPLAY
const dynamicImageDisplay = document.getElementById('dynamicImageDisplay')
const dynamicImageRow = document.getElementsByClassName('dynamicImageRow')
const dynamicImageData = document.getElementsByClassName('dynamicImageData')
var PHOTOS = 
[['Estelles','flowerShop','LSPpillar','LSPoverlook','PLACE','PLACE'],
['museumMono','trafficLightRain','606curvedLamps','606trainYard','PLACE','PLACE'],
['LSPpillar','Estelles','flowerShop','PLACE','LSPoverloop','PLACE']]

//DISPLAY

function setPhotos() {
    var displayHtmlQueue = ''
    PHOTOS.forEach((ROW)=>{
        displayHtmlQueue += '<tr class=\"dynamicImageRow\">'
        ROW.forEach((PHOTO)=>{
            displayHtmlQueue += '<td class=\"dynamicImageData\" data-name=\"'+PHOTO+'\"></td>'
        })
        displayHtmlQueue += '</tr>'
    })
    dynamicImageDisplay.innerHTML = displayHtmlQueue
}

function loadPhotos() {
    for (const element of dynamicImageData) {
        var name = element.getAttribute('data-name')
        if (name != 'PLACE') {
            element.innerHTML = '<image class=\"photoData\" src=\"./assets/photo/'+name+'.jpeg\" alt=\"'+name+'\" loading=\"lazy\">'
            photoCount++
        } else {
            element.innerHTML = '<image class=\"photoData PLACE\" src=\"./assets/photo/placeholder.png\" alt=\"PLACE\" loading=\"lazy\">'
        }
        document.querySelectorAll('.pageTitle').forEach((element)=>{
            element.textContent = 'Photos! ['+photoCount+']'
        })
    }
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    setPhotos()
    loadPhotos()
    console.log('   \"loadFunc()\" finished')
}