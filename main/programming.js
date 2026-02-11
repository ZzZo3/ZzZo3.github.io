const mainBody = document.getElementById("mainBody")
let smoothing = true

function twinkleToggle() {
    if(mainBody.classList.contains("staticStars")) {
        if (smoothing) {
            mainBody.classList.replace("staticStars","slowSmoothStars")
        } else {
            mainBody.classList.replace("staticStars","slowStars")
        }
    }
    if(mainBody.classList.contains("slowSmoothStars")) {
        mainBody.classList.replace("slowSmoothStars","fastSmoothStars")
    } else if(mainBody.classList.contains("fastSmoothStars")) {
        mainBody.classList.replace("fastSmoothStars","staticStars")
    }
    if(mainBody.classList.contains("slowStars")) {
        mainBody.classList.replace("slowStars","fastStars")
    } else if(mainBody.classList.contains("fastStars")) {
        mainBody.classList.replace("fastStars","staticStars")
    }
}
function smoothTwinkleToggle() {
    smoothing = !smoothing
    if(mainBody.classList.contains("slowStars")) {
        mainBody.classList.replace("slowStars","slowSmoothStars")
    } else if(mainBody.classList.contains("slowSmoothStars")) {
        mainBody.classList.replace("slowSmoothStars","slowStars")
    }
    if(mainBody.classList.contains("fastStars")) {
        mainBody.classList.replace("fastStars","fastSmoothStars")
    } else if(mainBody.classList.contains("fastSmoothStars")) {
        mainBody.classList.replace("fastSmoothStars","fastStars")
    }
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
    console.log('\"loadFunc()\" began')
    console.log('   \"loadFunc()\" finished')
}

