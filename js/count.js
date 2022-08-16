var valueDisplays = document.querySelectorAll('.num')
let interval = 5000

valueDisplays.forEach((valueDisplay) => {
    var startValue = 0
    var endValue = parseInt(valueDisplay.getAttribute('data-val'))
    var duration = Math.floor(interval/endValue)

    var counter = setInterval(function() {
        startValue += 1
        valueDisplay.textContent = startValue
        if(startValue == endValue) {
            clearInterval(counter)
        }
    },duration)

})