//BASE
const mainBody = document.getElementById("mainBody")

var CLUBNINE = document.getElementById("CLUBNINE");

var isometricTilesQuery = document.querySelectorAll(".isometricTile");
isometricTilesQuery.forEach((element) => {
    console.log(tile.classList)
    console.log(tile.classList[1])
    console.log(tile.classList[1].slice(1))
    console.log(tile.classList[1].slice(1) + "px")
    console.log('predicted success')
    let tile = element
    let x = tile.classList[1].slice(1)
    let y = tile.classList[2].slice(1)
    tile.style.left = x + "px";
    tile.style.top = y + "px";
    console.log('realized success')
    return tile
})

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    console.log('   \"loadFunc()\" finished')
}

