const mainBody = document.getElementById("mainBody")

function twinkleToggle() {
    if(mainBody.classList.contains("tileStarry")) {
        mainBody.classList.replace("tileStarry","tileStarryAlt")
    } else {
        mainBody.classList.replace("tileStarryAlt","tileStarry")
    }
}