const secondHand = document.querySelector('.sec-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const htmlTimeDisplay = document.getElementById('displayingTime')


function setDate() {
    const now = new Date();

    const second = now.getSeconds()
    const secondsDegree = ((second / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const minute = now.getMinutes()
    const minDegree = ((minute / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minDegree}deg)`

    const hour = now.getHours()
    const hourDegree = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`


    let html = `${hour} : ${minute} : ${second}`
    htmlTimeDisplay.innerHTML = html

}



setInterval(() => {
    setDate()
}, 1000);