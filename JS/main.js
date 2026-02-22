import * as TWEEN from '../libraries/tween.esm.js'

//BASE
const mainBody = document.getElementById("mainBody")
var windowDimensions = [window.innerWidth, window.innerHeight]
const consoleLogFunc = console.log
//NODES
const spreadInput = document.getElementById("spreadInput")
const scaleInput = document.getElementById("scaleInput")
const mountainInput = document.getElementById("mountainInput")
const SpLabel = document.getElementById("SpLabel")
const ScLabel = document.getElementById("ScLabel")
const MnLabel = document.getElementById("MnLabel")
const resetSpreadButton = document.getElementById("resetSpreadButton")
const resetScaleButton = document.getElementById("resetScaleButton")
const resetMountainButton = document.getElementById("resetMountainButton")
const gridXInput = document.getElementById("gridXInput")
const gridYInput = document.getElementById("gridYInput")
const originButton = document.getElementById("originButton")
const isometricParent = document.getElementById("isometricParent")
const isometricContainer = document.getElementById('isometricContainer')
const Selection = document.getElementById('Selection')
const linkDisplay = document.getElementById('linkDisplay')
const posDisplay = document.getElementById('posDisplay')
//RENDER VARIABLES
let isoSpread = 1.0
let tileScale = 1.0
let mountainOffset = 0
//DEFAULT VALUES
const spreadDefault = 1.0
const scaleDefault = 2.0
const hillDefault = 0
//POSITION / TILE DATA
let POSITION = [0,0]
let POSITIONprevious = [0,0]
let canMove = true
let link = ''


//BASE
//KEY LISTENER
document.addEventListener('keydown', function (event) {
    console.log('Key: \"' + event.key + '\"');
    if (canMove) {
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
    renderIsoWindow(Iso2Reg(-POSITION[0], -POSITION[1]))
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
    POSITIONprevious = [...POSITION]
    renderIsometric()
}
originButton.addEventListener('click',origin)
function origin() {
    console.log('origin() called')
    POSITIONprevious = [...POSITION]
    let SchematicTile = document.getElementById('SCHEMATIC')
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
    renderIsometric()
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
    let SchematicTile = document.getElementById('SCHEMATIC')
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
            schemTile.style.zIndex = yi - xi    // SCHEMATIC TILE AT ORIGIN HAS z: 0
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
    console.log('   POSIITON: '+POSITIONprevious+'->'+POSITION)
    let off = 175
    let maxX = document.getElementById('SCHEMATIC').getAttribute('data-Xdim')
    let maxY = document.getElementById('SCHEMATIC').getAttribute('data-Ydim')
    if (POSITION[0] >= 0 && POSITION[0] < +maxX && POSITION[1] >= 0 && POSITION[1] < +maxY ) { // if inside schematic grid:
        let ZED = 2 // SELECTOR AT ORIGIN HAS z: 2
        let oldZ = POSITIONprevious[1] - POSITIONprevious[0] + ZED
        let newZ = POSITION[1] - POSITION[0] + ZED

        // v TWEEN v
        let Obj = { x: POSITIONprevious[0], y: POSITIONprevious[1] }
        let frame = 0
        let tween = new TWEEN.Tween(Obj)
            .to({ x: POSITION[0], y: POSITION[1] }, 200) // 200 ms -> 0.20 sec
            .easing(TWEEN.Easing.Cubic.InOut)
            .onStart(()=>{
                canMove = false
                frame = 0
                if (newZ >= oldZ) { // if Z will increase, update Z immediately
                    Selection.style.zIndex = newZ
                }
            })
            .onUpdate(()=>{
                frame ++
                console.log('   frame: '+frame)
                if (frame % 2 == 0) {
                    console.log = function () {} // disable console.log() while tweening
                    let offsets = Iso2Reg(Obj.x,Obj.y)
                    let offsetsi = Iso2Reg(-Obj.x,-Obj.y)
                    Selection.style.top = offsets[1] + off * tileScale + "px"
                    Selection.style.left = offsets[0] + "px"
                    renderIsoWindow(offsetsi)
                    console.log = consoleLogFunc // enable console.log() after tweening
                }
            })
            .onComplete(()=>{
                POSITIONprevious = [...POSITION]
                canMove = true
                frame = 0
                if (newZ < oldZ) { // if Z will decrease, wait to update Z
                    Selection.style.zIndex = newZ
                }
            })
        tween.start()
        function animate(time) {
            requestAnimationFrame(animate)
            tween.update(time)
        }
        animate()
        // ^ TWEEN ^

    } else {
        console.log('   POSITION outside grid')
        console.log('   sending back ...')
        POSITION = [...POSITIONprevious]
    }
    Selection.style.width = 64 * tileScale + "px"
    Selection.style.height = 64 * tileScale + "px"
    console.log('> \"renderSelector()\" finished')
}
function renderIsoWindow(offsets) {
    grabWindowDim(offsets)
    let winOffX = windowDimensions[0] / 2
    let winOffY = windowDimensions[1] / 2
    console.log('\"renderIsoWindow()\" began')
    isometricContainer.style.left = winOffX - (32 * tileScale) + offsets[0] + 'px'
    isometricContainer.style.top = winOffY - (245 * tileScale) + offsets[1] + 'px'
    console.log('> \"renderIsoWindow()\" finished')
}
function renderIsometric() {
    console.log('\"renderIsometric()\" began')
    renderSchematic()
    renderSelector()
    renderIsoWindow(Iso2Reg(-POSITION[0], -POSITION[1]))
    var isometricTilesQuery = document.querySelectorAll(".isometricTile")
    var isometricBasesQuery = document.querySelectorAll(".isometricBase")
    REND(isometricTilesQuery,3)     // TILE AT ORIGIN HAS z: 3
    REND(isometricBasesQuery,1)     // BASE AT ORIGIN HAS z: 1
    function REND(CLASS,ZED) {
        CLASS.forEach((element) => {
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
            tile.style.zIndex = yi - xi + ZED
            tile.style.width = 64 * tileScale + "px"
            tile.style.height = 256 * tileScale + "px"
            return tile
        })
    }
    getTile()
    console.log('> \"renderIsometric()\" finished')
}


//RENDER INPUTS

spreadInput.addEventListener('input',spreadInputFunc)
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
scaleInput.addEventListener('input',scaleInputFunc)
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
mountainInput.addEventListener('input',mountainInputFunc)
function mountainInputFunc() {
    console.log('\"mountainInputFunc()\" began')
    mountainOffset = parseInt(mountainInput.value)
    mountainOffset = Number.isNaN(mountainOffset) ? 0 : mountainOffset
    MnLabel.innerText = 'Hill: ' + mountainOffset
    sessionStorage.setItem('Hill',mountainOffset)
    renderIsometric()
    console.log('> \"mountainInputFunc()\" finished')
}
gridXInput.addEventListener('input',gridXFunc)
function gridXFunc() {
    console.log('\"gridXFunc()\" began')
    let scheme = document.getElementById('SCHEMATIC')
    let val = Number.isNaN(gridXInput.value) ? "7" : gridXInput.value
    scheme.setAttribute('data-Xdim', val)
    console.log(scheme.getAttribute('data-Xdim'))
    renderIsometric()
    origin()
    console.log('> \"gridXFunc()\" finished')
}
gridYInput.addEventListener('input',gridYFunc)
function gridYFunc() {
    console.log('\"gridYFunc()\" began')
    let scheme = document.getElementById('SCHEMATIC')
    let val = Number.isNaN(gridYInput.value) ? "7" : gridYInput.value
    scheme.setAttribute('data-Ydim', val)
    console.log(scheme.getAttribute('data-Ydim'))
    renderIsometric()
    origin()
    console.log('> \"gridYFunc()\" finished')
}
resetSpreadButton.addEventListener('click',resetSpread)
function resetSpread() {
    console.log('isoSpread -> ' + spreadDefault)
    isoSpread = spreadDefault
    spreadInput.value = isoSpread
    SpLabel.innerText = 'Spread: ' + isoSpread
    sessionStorage.setItem('Spread',isoSpread)
    renderIsometric()
}
resetScaleButton.addEventListener('click',resetScale)
function resetScale() {
    console.log('tileScale -> ' + scaleDefault)
    tileScale = scaleDefault
    scaleInput.value = scaleDefault
    ScLabel.innerText = 'Scale: ' + tileScale
    sessionStorage.setItem('Scale',tileScale)
    renderIsometric()
}
resetMountainButton.addEventListener('click',resetMountain)
function resetMountain() {
    console.log('mountainOffset -> ' + hillDefault)
    mountainOffset = hillDefault
    mountainInput.value = hillDefault
    MnLabel.innerText = 'Hill: ' + mountainOffset
    sessionStorage.setItem('Hill',mountainOffset)
    renderIsometric()
}


//GET and USE TILE

function getTile() {
    console.log('getTile() called at: ' + POSITION)
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
            link = "https://n0n-sense.org/" + TILE.getAttribute("data-link")
            console.log('   link found: ' + link)
            linkDisplay.innerText = link
            posDisplay.innerText = '['+POSITION[0]+','+POSITION[1]+']'
        }
    }
}
function useTile() {
    console.log('useTile() called at: ' + POSITION)
    if (link != '') {
        window.location.href = link
    }
}


//STUFF THAT RUNS ON LOAD

mainBody.addEventListener('load',loadFunc())
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
