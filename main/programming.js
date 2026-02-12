//BASE
const mainBody = document.getElementById("mainBody")
const spreadInput = document.getElementById("spreadInput")
const scaleInput = document.getElementById("scaleInput")
const mountainInput = document.getElementById("mountainInput")

//ISOMETRIC RENDER
let isoSpread = 1.5
let tileScale = 2.0
let mountainOffset = 0

function positionTiles() {
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

spreadInput.oninput = ()=>{
    isoSpread = parseFloat(spreadInput)
}
scaleInput.oninput = ()=>{
    tileScale = parseFloat(scaleInput)
}
mountainInput.oninput = ()=>{
    mountainOffset = parseInt(mountainInput)
}


//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    positionTiles()
    console.log('   \"loadFunc()\" finished')
}

