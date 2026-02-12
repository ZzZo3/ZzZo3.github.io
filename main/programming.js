//BASE
const mainBody = document.getElementById("mainBody")

var CLUBNINE = document.getElementById("CLUBNINE");

function positionTiles() {
    console.log('\"positionTiles()\" began')
    var isometricTilesQuery = document.querySelectorAll(".isometricTile");
    isometricTilesQuery.forEach((element) => {
        let tile = element
        console.log(tile.classList)
        console.log('   '+tile.classList[1])
        console.log('   '+tile.classList[1].slice(1))
        console.log('   '+tile.classList[1].slice(1) + "px")
        console.log('   predicted success')
        let xi = parseInt(tile.classList[1].slice(1))
        let yi = parseInt(tile.classList[2].slice(1))
        //translate x's and y's to isometric tiles
        //for x (+32,-11) ->^
        //for y (+32,+11) ->v
        let xf = 0
        let yf = 0
        for(let step = 1; step <= xi; step++) {
            xf += 32
            yf -= 11
        }
        for(let step = 1; step <= yi; step++) {
            xf += 32
            yf += 11
        }
        tile.style.left = xf + "px";
        tile.style.top = yf + "px";
        console.log('   realized success')
        return tile
    })
    console.log('   \"positionTiles()\" finished')
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    //positionTiles()
    console.log('   \"loadFunc()\" finished')
}

