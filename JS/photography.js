//BASE
var photoCount = 0
const pageTitle = document.getElementsByClassName('pageTitle')
const imagePopup = document.getElementById('imagePopup')
const blackout = document.getElementById('blackout')
var popup = false
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
['alleyCoolCar','busFordCity','PLACE','PLACE','PLACE','PLACE'],
['carInteriorNight','lampIndiana1','PLACE','PLACE','PLACE','PLACE'],
['snowyApt','snowyBuilding','PLACE','PLACE','PLACE','PLACE'],
['snowyLot','snowyUnderpass','PLACE','PLACE','PLACE','PLACE'],
['trainTracksEvening','woodsGroundVibrant','PLACE','PLACE','PLACE','PLACE'],
['underpassGritty','warehouseChicago','PLACE','PLACE','PLACE','PLACE'],
['trainTracksDusk','parkingLotGreen','PLACE','PLACE','PLACE','PLACE'],
['laneHalloween','parkingLotBeacon','PLACE','PLACE','PLACE','PLACE']]

//KEY LISTENER
document.addEventListener('keydown', function (event) {
    console.log('Key: \"' + event.key + '\"');
    if (event.key === 'Escape') {
        popup = false
        imagePopup.style.display = 'none'
        blackout.style.display = 'none'
    }
    if (popup) {
        if (event.key === 'ArrowUp') {
            event.preventDefault()
            var height = imagePopup.style.height
            imagePopup.style.height = (parseFloat(height.split('vh').join()) * 1.05) + 'vh'
            imagePopup.style.width = imagePopup.style.height
        } else if (event.key === 'ArrowDown') {
            event.preventDefault()
            var height = imagePopup.style.height
            imagePopup.style.height = (parseFloat(height.split('vh').join()) * 0.95) + 'vh'
            imagePopup.style.width = imagePopup.style.height
        }
    }
});

blackout.addEventListener('click', (event)=>{
    popup = false
    imagePopup.style.display = 'none'
    blackout.style.display = 'none'
})


//DRAGGABLE ELEMENT COPY+PASTE
dragElement(document.getElementById("imagePopup"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//DRAGGABLE ELEMENT COPY+PASTE

//DISPLAY

function setPhotos() {
    var displayHtmlQueue = ''
    PHOTOS.forEach((ROW, index)=>{
        displayHtmlQueue += '<tr class=\"dynamicImageRow\">'
        displayHtmlQueue += '<td><p>'+index+'</p></td>'
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

function setEventListener() {
    document.querySelectorAll('.photoData').forEach((photo)=>{
        photo.addEventListener('click', (event)=>{
            console.log('image clicked: '+photo.getAttribute('src'))
            popup = true

            //DOCUMENT SCROLL COPY+PASTE
            let verticalScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
            //DOCUMENT SCROLL COPY+PASTE

            imagePopup.style.top = (verticalScroll + window.innerHeight / 2) + 'px'
            imagePopup.style.left = (window.innerWidth / 2) + 'px'
            imagePopup.style.height = '88vh'
            imagePopup.style.width = '88vh'
            imagePopup.style.transform = 'translate(-50%, -50%)';
            imagePopup.style.display = 'block'
            blackout.style.transform = 'translate(-50%, -50%)';
            blackout.style.display = 'block'
            imagePopup.setAttribute('src', photo.getAttribute('src'))
        })
    })
}


var swapAcoords = []
var swapBcoords = []
var swapA = ''
var swapB = ''
function swap(A, B) {
    swapAcoords = A
    swapBcoords = B
    swapA = PHOTOS[A[1]][A[0]]
    swapB = PHOTOS[B[1]][B[0]]
    PHOTOS[B[1]][B[0]] = swapA
    PHOTOS[A[1]][A[0]] = swapB
    setPhotos()
    loadPhotos()
}
function undoSwap() {
    PHOTOS[swapBcoords[1]][swapBcoords[0]] = swapB
    PHOTOS[swapAcoords[1]][swapAcoords[0]] = swapA
    setPhotos()
    loadPhotos()
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    setPhotos()
    loadPhotos()
    setEventListener()
    console.log('   \"loadFunc()\" finished')
}