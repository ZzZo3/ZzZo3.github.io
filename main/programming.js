const mainBody = document.getElementById("mainBody")
let smoothing = false

function twinkleToggle() {
    if (!smoothing) {
        if(mainBody.classList.contains("staticStars")) {
            mainBody.classList.replace("staticStars","slowStars")
        } else if(mainBody.classList.contains("slowStars")) {
            mainBody.classList.replace("slowStars","fastStars")
        } else {
            mainBody.classList.replace("fastStars","staticStars")
        }
    } else {
        if(mainBody.classList.contains("staticStars")) {
            mainBody.classList.replace("staticStars","slowSmoothStars")
        } else if(mainBody.classList.contains("slowSmoothStars")) {
            mainBody.classList.replace("slowSmoothStars","fastSmoothStars")
        } else {
            mainBody.classList.replace("fastSmoothStars","staticStars")
        }
    }
}
function smoothTwinkleToggle() {
    smoothing = !smoothing
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    console.log('   \"loadFunc()\" finished')
}

