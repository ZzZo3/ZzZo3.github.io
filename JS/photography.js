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
['chicagoRiver','AMSTbridge','PLACE','PLACE','PLACE','PLACE'],
['hospitalView2','trainSnowy','PLACE','PLACE','PLACE','PLACE'],
['AMSTbottle','alleyPastel','PLACE','PLACE','PLACE','PLACE'],
['AMSTcrane1','AMSTcrane2','PLACE','PLACE','PLACE','PLACE'],
['bricks','canyonBridge','PLACE','PLACE','PLACE','PLACE'],
['hospitalView1','commute1','PLACE','PLACE','PLACE','PLACE'],
['commute2','highway','PLACE','PLACE','PLACE','PLACE'],
['humboldtLagoon','lampBlueSky','PLACE','PLACE','PLACE','PLACE'],
['marshSears','marshSunset','PLACE','PLACE','PLACE','PLACE'],
['museumParkingTrail','oakParkCars','PLACE','PLACE','PLACE','PLACE'],
['overgrownCourt','raisedBridge','PLACE','PLACE','PLACE','PLACE'],
['ring','searsTower','PLACE','PLACE','PLACE','PLACE'],
['stadium','substationBridge','PLACE','PLACE','PLACE','PLACE'],
['trafficMorning','trainElWabash','PLACE','PLACE','PLACE','PLACE'],
['trainElSandy1','trainElSandy2','PLACE','PLACE','PLACE','PLACE'],
['trainStation','trainGrassy','PLACE','PLACE','PLACE','PLACE'],
['trainTracksOverlook','alleyStreet','PLACE','PLACE','PLACE','PLACE'],
['underpassGritty','warehouseChicago','PLACE','PLACE','PLACE','PLACE']]

//DISPLAY

function setPhotos() {
    var displayHtmlQueue = ''
    PHOTOS.forEach((ROW)=>{
        displayHtmlQueue += '<tr class=\"dynamicImageRow\">'
        var folder = ''
        for (let index=0; index < 6; index++) {
            if (ROW[index]=='PLACE') {
                displayHtmlQueue += '<td class=\"dynamicImageData\" data-name=\"PLACE\"></td>'
            } else if (index<2) {
                displayHtmlQueue += '<td class=\"dynamicImageData\" data-name=\"CityPop/'+ROW[index]+'\"></td>'
            } else if (index<4) {
                displayHtmlQueue += '<td class=\"dynamicImageData\" data-name=\"Foggy/'+ROW[index]+'\"></td>'
            } else {
                displayHtmlQueue += '<td class=\"dynamicImageData\" data-name=\"BAndW/'+ROW[index]+'\"></td>'
            }
        }
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