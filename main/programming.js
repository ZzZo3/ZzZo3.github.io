let tileStarry = document.get_elements_by_class("tileStarry")
let tileStarryAlt = document.get_elements_by_class("tileStarryAlt")

function twinkleToggle() {
    tileStarry.forEach(element => {
        element.classList.replace("tileStarry","tileStarryAlt")
    });
    tileStarry.forEach(element => {
        element.classList.replace("tileStarryAlt","tileStarry")
    });
    let tileStarry = document.get_elements_by_class("tileStarry")
    let tileStarryAlt = document.get_elements_by_class("tileStarryAlt")
}