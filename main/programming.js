//BASE
const mainBody = document.getElementById("mainBody")
var windowDimensions = [window.innerWidth, window.innerHeight]
//NODES
const spreadInput = document.getElementById("spreadInput")
const ScLabel = document.getElementById("ScLabel")
const SpLabel = document.getElementById("SpLabel")
const MnLabel = document.getElementById("MnLabel")
const scaleInput = document.getElementById("scaleInput")
const mountainInput = document.getElementById("mountainInput")
const gridXInput = document.getElementById("gridXInput")
const gridYInput = document.getElementById("gridYInput")
const isometricParent = document.getElementById("isometricParent")
const isometricContainer = document.getElementById('isometricContainer')
const Selection = document.getElementById('Selection')
//RENDER VARIABLES
let isoSpread = 1.0
let tileScale = 1.0
let mountainOffset = 0
//DEFAULT VALUES
const spreadDefault = 1.0
const scaleDefault = 2.0
const hillDefault = 0
//POSITION
let POSITION = [0,0]
let POSITIONprevious = [0,0]


//BASE
//KEY LISTENER
document.addEventListener('keydown', function (event) {
    console.log('Key: \"' + event.key + '\"');
    if (event.key === 'w') {
        walkUp() // -y(iso) -> -x -y (offset from top left)
    }
    if (event.key === 's') {
        walkDown() // +y(iso) -> +x +y (offset from top left)
    }
    if (event.key === 'a') {
        walkRight() // +x(iso) -> +x -y (offset from top left)
    }
    if (event.key === 'd') {
        walkLeft() // -x(iso) -> -x +y (offset from top left)
    }
    if (event.key === 'Enter') {
        useTile()
    }
});
//WINDOW SCALE LISTENER
function grabWindowDim() {
    windowDimensions = [window.innerWidth, window.innerHeight]
    console.log('windowDimensions: ' + windowDimensions)
}
window.onresize = () => {
    renderIsoWindow()
}


//TRANSLATE ISOMETRIC COORDINATES TO SCREEN COORDINATES (from top left, where +y is down and +x is right)

function Iso2Reg(xi, yi) {
    console.log('\"Iso2Reg()\" began')
    console.log('   initial: [' + xi + ',' + yi + ']')
    let xf = 0
    let yf = 0
    // xi <- iterations (+leftward, -rightward)
    yf -= (11 + mountainOffset / isoSpread) * isoSpread * tileScale * xi
    xf += 32 * tileScale * isoSpread * xi
    // yi <- iterations (+downward, -upward)
    yf += (11 + mountainOffset / isoSpread) * isoSpread * tileScale * yi
    xf += 32 * tileScale * isoSpread * yi
    console.log('   final: [' + xf + ',' + yf + ']')
    return [xf, yf]
}


//MOVEMENT

function savePosition() {
    let savePos = POSITION[0]+','+POSITION[1]
    sessionStorage.setItem('POSITION',savePos)
}
function restorePosition() {
    let savedPos = sessionStorage.getItem('POSITION')
    let POS = savedPos.split(',').map(Number)
    POSITION = [POS[0],POS[1]]
    renderIsometric()
}
function origin() {
    console.log('origin() called')
    let SchematicTile = document.getElementById('SchematicTile')
    let Xdim = SchematicTile.getAttribute("data-Xdim")
    let Ydim = SchematicTile.getAttribute("data-Ydim")
    let x = 0
    let y = 0
    if (Xdim % 2 == 0) {
        x = Xdim / 2 - 1
    } else {
        x = Xdim / 2 - 0.5
    }
    if (Ydim % 2 == 0) {
        y = Ydim / 2
    } else {
        y = Ydim / 2 - 0.5
    }
    POSITION = [x, y]
    console.log('    POSITION: ' + POSITION)
    renderSelector()
    savePosition()
}
function walkUp() {
    console.log('\"walkUp()\" called')
    POSITION[1] -= 1
    renderSelector()
    savePosition()
}
function walkDown() {
    console.log('\"walkDown()\" called')
    POSITION[1] += 1
    renderSelector()
    savePosition()
}
function walkLeft() {
    console.log('\"walkLeft()\" called')
    POSITION[0] += 1
    renderSelector()
    savePosition()
}
function walkRight() {
    console.log('\"walkRight()\" called')
    POSITION[0] -= 1
    renderSelector()
    savePosition()
}


//ISOMETRIC RENDER

function renderSchematic() {
    console.log('\"renderSchematic()\" began')
    let clonesToKill = document.querySelectorAll('.cloneSchemTile')
    clonesToKill.forEach((node) => {
        node.remove()
    })
    let SchematicTile = document.getElementById('SchematicTile')
    let Xdim = SchematicTile.getAttribute("data-Xdim")
    let Ydim = SchematicTile.getAttribute("data-Ydim")
    let totalSchemTiles = Xdim * Ydim
    console.log('   schemDimensions: (' + Xdim + ',' + Ydim + ')')
    console.log('   totalSchemTiles: ' + totalSchemTiles)
    for (let xi = 0; xi < Xdim; xi++) {
        for (let yi = 0; yi < Ydim; yi++) {
            console.log('   schematic cloned at [' + xi + ',' + yi + ']')
            let offsets = Iso2Reg(xi, yi)
            let schemTile = SchematicTile.cloneNode()
            schemTile.classList.add('cloneSchemTile')
            schemTile.style.zIndex = yi - xi - 1
            schemTile.style.left = offsets[0] + "px"
            schemTile.style.top = offsets[1] + "px"
            schemTile.style.width = 64 * tileScale + "px"
            schemTile.style.height = 256 * tileScale + "px"
            schemTile.style.visibility = "visible"
            isometricContainer.appendChild(schemTile)
        }
    }
    console.log('> \"renderSchematic()\" finished')
}
function renderSelector() {
    console.log('\"renderSelector()\" began')
    let off = 175

    // DEFINE OFFSETS FOR OLD POSITION
    let offsetsprev = Iso2Reg(POSITIONprevious[0], POSITIONprevious[1])
    const leftOffprev = offsetsprev[0]
    const topOffprev = offsetsprev[1] + off * tileScale
    console.log('moat 1')

    // DEFINE OFFSETS FOR NEW POSITION
    let offsets = Iso2Reg(POSITION[0], POSITION[1])
    const leftOff = offsets[0]
    const topOff = offsets[1] + off * tileScale
    console.log('moat 2')
    
    // RENDER NODE WITH OLD OFFSETS
    Selection.style.left = leftOffprev + "px"
    Selection.style.top = topOffprev + "px"
    console.log('moat 3')

    // DEFINE TWEEN FOR OLD TO NEW OFFSET VALUES
    const tweenSEL = new createjs.Tween({left: leftOffprev, right: topOffprev})
    tweenSEL.to({left: leftOff, right: topOff}, 3000)
    console.log('moat 4')

    // (ON EACH UPDATE) RENDER NODE WITH INTERMEDIATE OFFSETS
    tweenSEL.onUpdate((object)=>{
        Selection.style.top = object.top + "px"
        Selection.style.left = object.left + "px"
    })
    console.log('moat 5')
    
    // START ANIMATION
    tweenSEL.start()
    console.log('moat 6')

    // RENDER NODE WITH NEW OFFSETS
    Selection.style.left = leftOff
    Selection.style.top = topOff
    console.log('moat 7')

    // SET OTHER THINGS AND FIT TO WINDOW
    Selection.style.zIndex = POSITION[1] - POSITION[0] + 2
    Selection.style.width = 64 * tileScale + "px"
    Selection.style.height = 64 * tileScale + "px"
    renderIsoWindow()
    console.log('> \"renderSelector()\" finished')
    POSITIONprevious = POSITION
}
function renderIsoWindow() {
    grabWindowDim()
    let winOffX = windowDimensions[0] / 2
    let winOffY = windowDimensions[1] / 2
    console.log('\"renderIsoWindow()\" began')
    let offsets = Iso2Reg(-POSITION[0], -POSITION[1])
    isometricContainer.style.left = winOffX - (32 * tileScale) + offsets[0] + 'px'
    isometricContainer.style.top = winOffY - (245 * tileScale) + offsets[1] + 'px'
    console.log('> \"renderIsoWindow()\" finished')
}
function renderIsometric() {
    console.log('\"renderIsometric()\" began')
    renderSchematic()
    renderSelector()
    renderIsoWindow()
    var isometricTilesQuery = document.querySelectorAll(".isometricTile");
    isometricTilesQuery.forEach((element) => {
        let tile = element
        let off = 0
        if (tile.classList.length == 4) {
            off = parseInt(tile.classList[3].slice(3))
        }
        let xi = parseInt(tile.classList[1].slice(1))
        let yi = parseInt(tile.classList[2].slice(1))
        console.log('   IsometricTile:')
        let offsets = Iso2Reg(xi, yi)
        let xf = offsets[0] + "px"
        let yf = offsets[1]
        yf += off * tileScale
        tile.style.left = xf
        tile.style.top = yf + "px"
        tile.style.zIndex = yi - xi
        tile.style.width = 64 * tileScale + "px"
        tile.style.height = 256 * tileScale + "px"
        return tile
    })
    console.log('> \"renderIsometric()\" finished')
}


//RENDER INPUTS

function spreadInputFunc() {
    console.log('\"spreadInputFunc()\" began')
    isoSpread = parseFloat(spreadInput.value)
    isoSpread = Number.isNaN(isoSpread) ? 1.0 : isoSpread
    SpLabel.innerText = 'Spread: ' + isoSpread
    console.log('   ' + isoSpread)
    sessionStorage.setItem('Spread',isoSpread)
    renderIsometric()
    console.log('> \"spreadInputFunc()\" finished')
}
function scaleInputFunc() {
    console.log('\"scaleInputFunc()\" began')
    tileScale = parseFloat(scaleInput.value)
    tileScale = Number.isNaN(tileScale) ? 2.0 : tileScale
    ScLabel.innerText = 'Scale: ' + tileScale
    console.log('   ' + tileScale)
    sessionStorage.setItem('Scale',tileScale)
    renderIsometric()
    console.log('> \"scaleInputFunc()\" finished')
}
function mountainInputFunc() {
    console.log('\"mountainInputFunc()\" began')
    mountainOffset = parseInt(mountainInput.value)
    mountainOffset = Number.isNaN(mountainOffset) ? 0 : mountainOffset
    MnLabel.innerText = 'Hill: ' + mountainOffset
    sessionStorage.setItem('Hill',mountainOffset)
    renderIsometric()
    console.log('> \"mountainInputFunc()\" finished')
}
function gridXFunc() {
    console.log('\"gridXFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridXInput.value) ? "0" : gridXInput.value
    scheme.setAttribute('data-Xdim', val)
    console.log(scheme.getAttribute('data-Xdim'))
    renderIsometric()
    origin()
    console.log('> \"gridXFunc()\" finished')
}
function gridYFunc() {
    console.log('\"gridYFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridYInput.value) ? "0" : gridYInput.value
    scheme.setAttribute('data-Ydim', val)
    console.log(scheme.getAttribute('data-Ydim'))
    renderIsometric()
    origin()
    console.log('> \"gridYFunc()\" finished')
}
function resetSpread() {
    console.log('isoSpread -> ' + spreadDefault)
    isoSpread = spreadDefault
    sessionStorage.setItem('Spread',isoSpread)
    spreadInput.value = isoSpread
    SpLabel.innerText = 'Spread: ' + isoSpread
    sessionStorage.setItem('Spread',isoSpread)
    renderIsometric()
}
function resetScale() {
    console.log('tileScale -> ' + scaleDefault)
    tileScale = scaleDefault
    scaleInput.value = scaleDefault
    ScLabel.innerText = 'Scale: ' + tileScale
    sessionStorage.setItem('Scale',tileScale)
    renderIsometric()
}
function resetMountain() {
    console.log('mountainOffset -> ' + hillDefault)
    mountainOffset = hillDefault
    mountainInput.value = hillDefault
    MnLabel.innerText = 'Hill: ' + mountainOffset
    sessionStorage.setItem('Hill',mountainOffset)
    renderIsometric()
}


//USE TILE

function useTile() {
    console.log('useTile() called at: ' + POSITION)
    var isometricTilesQuery = document.querySelectorAll(".isometricTile")
    let found = false
    let TILE
    let xQ = 'x' + POSITION[0]
    let yQ = 'y' + POSITION[1]
    isometricTilesQuery.forEach((element) => {
        if (element.classList.contains(xQ) & element.classList.contains(yQ)) {
            found = true
            TILE = element
        }
    })
    if (found) {
        console.log('   found: ' + TILE.id)
    } else {
        console.log('   no tile found at ' + [POSITION])
    }
    if (found) {
        if (TILE.hasAttribute("data-link")) {
            let link = "https://n0n-sense.org/" + TILE.getAttribute("data-link")
            console.log('   link found: ' + link)
            navigate(link)
        }
    }
}
function navigate(link) {
    window.location.href = link
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    if (sessionStorage.getItem('Spread') != null) {     //SPREAD
        let storedSpread = sessionStorage.getItem('Spread')
        isoSpread = parseFloat(storedSpread)
        spreadInput.value = storedSpread
        SpLabel.innerText = 'Spread: ' + isoSpread
    } else {
        isoSpread = spreadDefault
        spreadInput.value = isoSpread
        SpLabel.innerText = 'Spread: ' + isoSpread
    }
    if (sessionStorage.getItem('Scale') != null) {      //SCALE
        let storedScale = sessionStorage.getItem('Scale')
        tileScale = parseFloat(storedScale)
        scaleInput.value = storedScale
        ScLabel.innerText = 'Scale: ' + tileScale
    } else {
        tileScale = scaleDefault
        scaleInput.value = tileScale
        ScLabel.innerText = 'Scale: ' + tileScale
    }
    if (sessionStorage.getItem('Hill') != null) {       //HILL
        let storedHill = sessionStorage.getItem('Hill')
        mountainOffset = parseFloat(storedHill)
        mountainInput.value = storedHill
        MnLabel.innerText = 'Hill: ' + mountainOffset
    } else {
        mountainOffset = hillDefault
        mountainInput.value = mountainOffset
        MnLabel.innerText = 'Hill: ' + mountainOffset
    }
    renderIsometric()                                   //RENDER ISOMETRIC
    if (sessionStorage.getItem('POSITION') != null) {   //POSITION
        console.log('stored POSITION detected')
        restorePosition()
        console.log('   POSITION restored')
    } else {
        origin()
    }
    console.log('> \"loadFunc()\" finished')
}