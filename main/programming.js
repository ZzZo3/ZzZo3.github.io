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
        let x = tile.classList[1].slice(1)
        let y = tile.classList[2].slice(1)
        //translate x's and y's to isometric tiles
        tile.style.left = x + "px";
        tile.style.top = y + "px";
        console.log('   realized success')
        return tile
    })
    console.log('   \"positionTiles()\" finished')
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    positionTiles()
    console.log('   \"loadFunc()\" finished')
}

