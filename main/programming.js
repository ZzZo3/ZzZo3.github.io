//BASE
const mainBody = document.getElementById("mainBody")
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
let positionOffsetX = 0
let positionOffsetY = 0
let POSITION = [0,0]

//KEY LISTENER
document.addEventListener('keydown', function(event) {
  console.log('Key:', event.key);
  if (event.key =='w') {
    walkUp() // -y(iso) -> -x -y (offset from top left)
  }
  if (event.key =='s') {
    walkDown() // +y(iso) -> +x +y (offset from top left)
  }
  if (event.key =='a') {
    walkRight() // +x(iso) -> +x -y (offset from top left)
  }
  if (event.key =='d') {
    walkLeft() // -x(iso) -> -x +y (offset from top left)
  }
});

//TRANSLATE ISOMETRIC COORDINATES TO SCREEN COORDINATES (from top left, where +y is down and +x is right)
function Iso2Reg(xi,yi) {
    console.log('\"Iso2Reg()\" began')
    console.log('   initial: ['+xi+','+yi+']')
    let xf = 0
    let yf = 0
    // xi <- iterations (+leftward, -rightward)
    yf += (11 + mountainOffset/isoSpread) * isoSpread * tileScale * xi
    xf -= 32 * tileScale * isoSpread * xi
    // yi <- iterations (+downward, -upward)
    yf += (11 + mountainOffset/isoSpread) * isoSpread * tileScale * yi
    xf += 32 * tileScale * isoSpread * yi
    console.log('   final: ['+xf+','+yf+']')
    return [xf,yf]
}
function renderPosition() {
    console.log('\"renderPosition()\" began')
    console.log('   isometric coordinates: '+POSITION)
    let offsets = Iso2Reg(POSITION[0],POSITION[1])
    isometricContainer.style.top = offsets[1] + 'px'
    isometricContainer.style.left = offsets[0] + 'px'
    console.log('   \"renderPosition()\" finished')
}

//MOVEMENT
function walkUp() {
    console.log('\"walkUp()\" called')
    POSITION[1] -= 1
    shiftV(-1)
}
function walkDown() {
    console.log('\"walkDown()\" called')
    POSITION[1] += 1
    shiftV(1)
}
function walkLeft() {
    console.log('\"walkLeft()\" called')
    POSITION[0] += 1
    shiftH(1)
}
function walkRight() {
    console.log('\"walkRight()\" called')
    POSITION[0] -= 1
    shiftH(-1)
}
function shiftH(i) {
    // i <- iterations (+leftward, -rightward)
    isometricContainer.style.top += ( (11 + mountainOffset/isoSpread) * isoSpread * tileScale * i ) + "px"
    isometricContainer.style.left -= ( 32 * tileScale * isoSpread * i ) + "px"
}
function shiftV(i) {
    // i <- iterations (+downward, -upward)
    isometricContainer.style.top += ( (11 + mountainOffset/isoSpread) * isoSpread * tileScale * i) + "px"
    isometricContainer.style.left += ( 32 * tileScale * isoSpread * i) + "px"
}
function jump(x,y) {
    console.log('\"jump()\" called')
    POSITION[0] = x
    POSITION[1] = y
    renderPosition()
}
function shift(dx,dy) {
    console.log('\"shift()\" called')
    POSITION[0] += dx
    POSITION[1] += dy
    renderPosition()
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
    
    console.log('   schemDimensions: ('+Xdim+','+Ydim+')')
    console.log('   totalSchemTiles: '+totalSchemTiles)
    
    for(let xi = 0; xi < Xdim; xi++) {
      for(let yi = 0; yi < Ydim; yi++) {
        let schemTile = SchematicTile.cloneNode()
        schemTile.classList.add('cloneSchemTile')
        schemTile.style.zIndex = yi - xi - 1
        schemTile.style.left = Iso2Reg(xi,yi)[0] + "px"
        schemTile.style.top = Iso2Reg(xi,yi)[1] + "px"
        schemTile.style.width = 64*tileScale + "px"
        schemTile.style.height = 256*tileScale + "px"
        schemTile.style.visibility = "visible"
        isometricParent.appendChild(schemTile)
      }
    }
    console.log('   \"renderSchematic()\" finished')
}

function renderSelector() {
    console.log('\"renderSelector()\" began')
    let off = 175
    let xi = 0
    let yi = 0
    let xf = 0 //to vary later, but breaks when !=0 for some reason
    let yf = 0
    for(let step = 1; step <= xi; step++) {
        xf += 32*isoScale
        yf -= 11*isoScale
        off -= mountainOffset
    }
    for(let step = 1; step <= yi; step++) {
        xf += 32*isoScale
        yf += 11*isoScale
        off += mountainOffset
    }
    yf += off * tileScale
    Selection.style.left = xf + "px"
    Selection.style.top = yf + "px"
    Selection.style.zIndex = yf - xf + 1
    Selection.style.width = 64*tileScale + "px"
    Selection.style.height = 64*tileScale + "px"
    console.log('   \"renderSelector()\" finished')
}

function renderIsometric() {
    console.log('\"renderIsometric()\" began')
    renderSchematic()
    renderSelector()
    renderPosition()
    let isoScale = isoSpread * tileScale
    var isometricTilesQuery = document.querySelectorAll(".isometricTile");
    isometricTilesQuery.forEach((element) => {
        let tile = element
        let off = 0
        if (tile.classList.length == 4) {
          off = parseInt(tile.classList[3].slice(3))
        }
        let xi = parseInt(tile.classList[1].slice(1))
        let yi = parseInt(tile.classList[2].slice(1))
        //translate x's and y's to isometric tiles
        //for x (+32,-11) ->^
        //for y (+32,+11) ->v
        let xf = 0
        let yf = 0
        for(let step = 1; step <= xi; step++) {
            xf += 32*isoScale
            yf -= 11*isoScale
            off -= mountainOffset
        }
        for(let step = 1; step <= yi; step++) {
            xf += 32*isoScale
            yf += 11*isoScale
            off += mountainOffset
        }
        yf += off * tileScale
        xf += positionOffsetX //remove
        yf += positionOffsetY //remove
        tile.style.left = xf + "px"
        tile.style.top = yf + "px"
        tile.style.zIndex = yi - xi
        tile.style.width = 64*tileScale + "px"
        tile.style.height = 256*tileScale + "px"
        return tile
    })
    console.log('   \"renderIsometric()\" finished')
}


//RENDER INPUTS

function spreadInputFunc() {
    console.log('\"spreadInputFunc()\" began')
    isoSpread = parseFloat(spreadInput.value)
    isoSpread = Number.isNaN(isoSpread) ? 1.0 : isoSpread
    SpLabel.innerText = 'Spread: '+isoSpread
    console.log('   '+isoSpread)
    renderIsometric()
    console.log('   \"spreadInputFunc()\" finished')
}
function scaleInputFunc() {
    console.log('\"scaleInputFunc()\" began')
    tileScale = parseFloat(scaleInput.value)
    tileScale = Number.isNaN(tileScale) ? 2.0 : tileScale
    ScLabel.innerText = 'Scale: '+tileScale
    console.log('   '+tileScale)
    renderIsometric()
    console.log('   \"scaleInputFunc()\" finished')
}
function mountainInputFunc() {
    console.log('\"mountainInputFunc()\" began')
    mountainOffset = parseInt(mountainInput.value)
    mountainOffset = Number.isNaN(mountainOffset) ? 0 : mountainOffset
    MnLabel.innerText = 'Hill: '+mountainOffset
    renderIsometric()
    console.log('   \"mountainInputFunc()\" finished')
}
function gridXFunc() {
    console.log('\"gridXFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridXInput.value) ? "7" : gridXInput.value
    scheme.setAttribute('data-Xdim',val)
    console.log(scheme.getAttribute('data-Xdim'))
    renderIsometric()
    console.log('   \"gridXFunc()\" finished')
}
function gridYFunc() {
    console.log('\"gridYFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridYInput.value) ? "7" : gridYInput.value
    scheme.setAttribute('data-Ydim',val)
    console.log(scheme.getAttribute('data-Ydim'))
    renderIsometric()
    console.log('   \"gridYFunc()\" finished')
}
function resetSpread() {
    console.log('isoSpread -> 1')
    isoSpread = 1.0
    spreadInput.value = "1"
    SpLabel.innerText = 'Spread: '+isoSpread
    renderIsometric()
}
function resetScale() {
    console.log('tileScale -> 2')
    tileScale = 2.0
    scaleInput.value = "2"
    ScLabel.innerText = 'Scale: '+tileScale
    renderIsometric()
}
function resetMountain() {
    console.log('mountainOffset -> 0')
    mountainOffset = 0
    mountainInput.value = "0"
    MnLabel.innerText = 'Hill: '+mountainOffset
    renderIsometric()
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    isoSpread = 1.0
    spreadInput.value = "1"
    SpLabel.innerText = 'Spread: '+isoSpread
    tileScale = 2.0
    scaleInput.value = "2"
    ScLabel.innerText = 'Scale: '+tileScale
    mountainOffset = 0
    mountainInput.value = "0"
    MnLabel.innerText = 'Hill: '+mountainOffset
    renderIsometric()
    console.log('   \"loadFunc()\" finished')
}