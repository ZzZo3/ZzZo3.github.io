const mainBody = document.getElementById("mainBody")

function twinkleToggle() {
    if(mainBody.classList.contains("tileStarry")) {
        mainBody.classList.replace("tileStarry","tileStarryAlt")
    } else if(mainBody.classList.contains("tileStarryAlt")) {
        mainBody.classList.replace("tileStarryAlt","tileStarryAlt1")
    } else {
        mainBody.classList.replace("tileStarryAlt1","tileStarry")
    }
}