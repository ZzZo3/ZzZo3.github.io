//BASE
const mainBody = document.getElementById("mainBody")
const spreadInput = document.getElementById("spreadInput")
const scaleInput = document.getElementById("scaleInput")
const mountainInput = document.getElementById("mountainInput")
const gridXInput = document.getElementById("gridXInput")
const gridYInput = document.getElementById("gridYInput")
const isometricParent = document.getElementById("isometricParent")

//ISOMETRIC RENDER
let isoSpread = 1.0
let tileScale = 2.0
let mountainOffset = 0

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
        schemTile.style.left = xf + "px"
        schemTile.style.top = yf + "px"
        schemTile.style.zIndex = yi - xi - 1
        schemTile.style.width = 64*tileScale + "px"
        schemTile.style.height = 256*tileScale + "px"
        schemTile.style.visibility = "visible"
        isometricParent.appendChild(schemTile)
      }
    }
    
    console.log('   \"positionTiles()\" finished')
}

function positionTiles() {
    setSchematic()
    let isoScale = isoSpread * tileScale
    console.log('\"positionTiles()\" began')
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
        tile.style.left = xf + "px"
        tile.style.top = yf + "px"
        tile.style.zIndex = yi - xi
        tile.style.width = 64*tileScale + "px"
        tile.style.height = 256*tileScale + "px"
        return tile
    })
    console.log('   \"positionTiles()\" finished')
}

function spreadInputFunc() {
    console.log('\"spreadInputFunc()\" began')
    isoSpread = parseFloat(spreadInput.value)
    isoSpread = Number.isNaN(isoSpread) ? 1.0 : isoSpread
    console.log('   '+isoSpread)
    positionTiles()
    console.log('   \"spreadInputFunc()\" finished')
}
function scaleInputFunc() {
    console.log('\"scaleInputFunc()\" began')
    tileScale = parseFloat(scaleInput.value)
    tileScale = Number.isNaN(tileScale) ? 2.0 : tileScale
    console.log('   '+tileScale)
    positionTiles()
    console.log('   \"scaleInputFunc()\" finished')
}
function mountainInputFunc() {
    console.log('\"mountainInputFunc()\" began')
    mountainOffset = parseInt(mountainInput.value)
    mountainOffset = Number.isNaN(mountainOffset) ? 0 : mountainOffset
    positionTiles()
    console.log('   \"mountainInputFunc()\" finished')
}
function gridXFunc() {
    console.log('\"gridXFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridXInput.value) ? 6 : gridXInput.value
    scheme.setAttribute('data-Xdim',val)
    console.log(scheme.getAttribute('data-Xdim'))
    positionTiles()
    console.log('   \"gridXFunc()\" finished')
}
function gridYFunc() {
    console.log('\"gridYFunc()\" began')
    let scheme = document.getElementById('SchematicTile')
    let val = Number.isNaN(gridYInput.value) ? 6 : gridYInput.value
    scheme.setAttribute('data-Ydim',val)
    console.log(scheme.getAttribute('data-Ydim'))
    positionTiles()
    console.log('   \"gridYFunc()\" finished')
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    positionTiles()
    console.log('   \"loadFunc()\" finished')
}