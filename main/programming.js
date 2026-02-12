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
//RENDER VARIABLES
let isoSpread = 1.6
let tileScale = 1.6
let mountainOffset = 4
let positionOffsetX = 100
let positionOffsetY = 100

//KEY LISTENER
document.addEventListener('keydown', function(event) {
  console.log('Key:', event.key);
  if (event.key == 'w') {
    shiftDown()
    console.log('   isometric render shifted up')
  }
  if (event.key == 's') {
    shiftUp()
    console.log('   isometric render shifted down')
  }
  if (event.key == 'a') {
    shiftRight()
    console.log('   isometric render shifted left')
  }
  if (event.key == 'd') {
    shiftLeft()
    console.log('   isometric render shifted right')
  }
  if (event.key =='i') {
    shiftDown()
    shiftRight()
    console.log('   isometric render shifted -y')
  }
  if (event.key =='k') {
    shiftUp()
    shiftLeft()
    console.log('   isometric render shifted +y')
  }
  if (event.key =='j') {
    shiftDown()
    shiftLeft()
    console.log('   isometric render shifted -x')
  }
  if (event.key =='l') {
    shiftUp()
    shiftRight()
    console.log('   isometric render shifted +x')
  }
});


//ISOMETRIC RENDER

function setSchematic() {
    let clonesToKill = document.querySelectorAll('.cloneSchemTile')
    clonesToKill.forEach((node) => {
        node.remove()
    })
    let isoScale = isoSpread * tileScale
    console.log('\"setSchematic()\" began')
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
        let off = 0
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
        xf += positionOffsetX
        yf += positionOffsetY
        schemTile.style.left = xf + "px"
        schemTile.style.top = yf + "px"
        schemTile.style.zIndex = yi - xi - 1
        schemTile.style.width = 64*tileScale + "px"
        schemTile.style.height = 256*tileScale + "px"
        schemTile.style.visibility = "visible"
        isometricParent.appendChild(schemTile)
      }
    }
}

function renderIsometric() {
    console.log('\"renderIsometric()\" began')
    setSchematic()
    console.log('   schematic finished rendering...')
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
        xf += positionOffsetX
        yf += positionOffsetY
        tile.style.left = xf + "px"
        tile.style.top = yf + "px"
        tile.style.zIndex = yi - xi
        tile.style.width = 64*tileScale + "px"
        tile.style.height = 256*tileScale + "px"
        return tile
    })
    console.log('   \"renderIsometric()\" finished')
}

function shiftUp() {
    positionOffsetY -= 11 * tileScale
    renderIsometric()
}
function shiftDown() {
    positionOffsetY += 11 * tileScale
    renderIsometric()
}
function shiftLeft() {
    positionOffsetX -= 32 * tileScale
    renderIsometric()
}
function shiftRight() {
    positionOffsetX += 32 * tileScale
    renderIsometric()
}


//RENDER INPUTS

function spreadInputFunc() {
    console.log('\"spreadInputFunc()\" began')
    isoSpread = parseFloat(spreadInput.value)
    isoSpread = Number.isNaN(isoSpread) ? 1.0 : isoSpread
    SpLabel.innerText = 'Sp: '+isoSpread
    console.log('   '+isoSpread)
    renderIsometric()
    console.log('   \"spreadInputFunc()\" finished')
}
function scaleInputFunc() {
    console.log('\"scaleInputFunc()\" began')
    tileScale = parseFloat(scaleInput.value)
    tileScale = Number.isNaN(tileScale) ? 2.0 : tileScale
    ScLabel.innerText = 'Sc: '+tileScale
    console.log('   '+tileScale)
    renderIsometric()
    console.log('   \"scaleInputFunc()\" finished')
}
function mountainInputFunc() {
    console.log('\"mountainInputFunc()\" began')
    mountainOffset = parseInt(mountainInput.value)
    mountainOffset = Number.isNaN(mountainOffset) ? 0 : mountainOffset
    MnLabel.innerText = 'Mn: '+mountainOffset
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
    SpLabel.innerText = 'Sp: '+isoSpread
    renderIsometric()
}
function resetScale() {
    console.log('tileScale -> 2')
    tileScale = 2.0
    scaleInput.value = "1"
    ScLabel.innerText = 'Sp: '+tileScale
    renderIsometric()
}
function resetMountain() {
    console.log('mountainOffset -> 0')
    mountainInput.value = "1"
    MnLabel.innerText = 'Sp: '+mountainOffset
    mountainOffset = 0
    renderIsometric()
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    renderIsometric()
    resetSpread()
    resetScale()
    resetMountain()
    console.log('   \"loadFunc()\" finished')
}