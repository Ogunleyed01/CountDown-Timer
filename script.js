const osu = document.getElementById('months')
const ojo = document.getElementById('days')
const wakati = document.getElementById('hours')
const iseju = document.getElementById('minutes')
const iseju_aaya = document.getElementById('seconds')


const christMas = '25 Dec 2025'

const countdown = () => {
    const christMasDate = new Date(christMas)
    const currentDate = new Date()

    const netTimeInSecs = (christMasDate - currentDate) / 1000;

    if (netTimeInSecs <= 0) {
        // Reset all values to 0
        osu.innerText = "0"
        ojo.innerText = "0"
        wakati.innerText = "0"
        iseju.innerText = "0"
        iseju_aaya.innerText = "0"
        return; // Stop further execution
    }

    const months = Math.floor(netTimeInSecs / 3600 / 24 / 30.44)
    const days = Math.floor(netTimeInSecs / 3600 / 24)
    const hours = Math.floor(netTimeInSecs / 3600) % 24
    const mins = Math.floor(netTimeInSecs / 60) % 60
    const secs = Math.floor(netTimeInSecs) % 60

    osu.innerText = months
    ojo.innerText = days
    wakati.innerText = hours
    iseju.innerText = mins
    iseju_aaya.innerText = secs
}

countdown()

setInterval(countdown, 1000)