const mainBody = document.getElementById("mainBody")

function twinkleToggle() {
    if(mainBody.classList.contains("tileStarryStatic")) {
        mainBody.classList.replace("tileStarryStatic","tileStarrySlow")
    } else if(mainBody.classList.contains("tileStarrySlow")) {
        mainBody.classList.replace("tileStarrySlow","tileStarryFast")
    } else {
        mainBody.classList.replace("tileStarryFast","tileStarryStatic")
    }
}