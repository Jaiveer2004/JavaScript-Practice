const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]  
    }

    return color;
}

let interval;

const startShowingColors = function() {
    if(!interval) {
        interval = setInterval(changeColors, 1000)
    }
    console.log("Started");

    function changeColors() {
        document.body.style.backgroundColor = randomColor()
    }
} 

const stopShowingColors = function() {
    clearInterval(interval)
    interval = null
    console.log("Stopped")
}



start.addEventListener('click', startShowingColors)
stop.addEventListener('click', stopShowingColors)
