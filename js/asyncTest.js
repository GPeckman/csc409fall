let timeoutID
let clickTimer = 0
const timeout = 10

function startTimeout() {
    clickTimer = 0
    timeoutID = setInterval(() => {
        clickTimer += 1
        if (clickTimer >= timeout) {
            alert("Timeout is reached")
            clickTimer = 0
        }
    }, 1000) 
}

window.onload = () => {
    document.body.addEventListener("click", () => clickTimer = 0)
    startTimeout()
    timeDisplay = document.querySelector("#time")
    delayInput = document.querySelector("#delay")
}

let isCounting = false
function startCounting() {
    if (isCounting) {
        return
    }
    
    let delay = parseInt(delayInput.value)
    if (!isNaN(delay)) {
        let counter = 0
        timeDisplay.textContent = 0
        isCounting = true
        let selfInterval = setInterval(() => {
            counter += 1
            timeDisplay.textContent = counter
            if (counter >= delay) {
                clearInterval(selfInterval)
                isCounting = false
            }
        }, 1000)
    }
}

function toggle(checkbox) {
    if (checkbox.checked) {
        clearInterval(timeoutID)
        startTimeout()
    } else {
        clearInterval(timeoutID)
    }
}