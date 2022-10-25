const pricePerMonth = document.getElementById('ppm')
const pageViews = document.getElementById('pageviews')
const dragRange = document.getElementById('drag')
const toggle = document.getElementById('toggle')

dragRange.addEventListener('input', () => {
    displayViews()
    pricePerMonth.textContent = `$${calculatePrice()}`
})

function displayViews() {
    if (dragRange.value > 0) {
        pageViews.textContent = `${dragRange.value}K `
    } else {
        pageViews.textContent = dragRange.value
    }
}

toggle.addEventListener('change', () => {
    pricePerMonth.textContent = `$${calculatePrice()}`
})

function calculatePrice() {
    views = dragRange.value * 1000
    if (!toggle.checked) {
        price = views * 0.00016
        return price.toFixed(2)
    } else {
        price = views * 0.00012
        return price.toFixed(2)
    }
}

/* Thanks Stackoverflow for helping me with the .checked property: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener */

// @ 100 = 16.00
// @ 0 = 0.00
// @ 200 = 32.00 
// 0.00016 per view 
// 0.00012 at discount