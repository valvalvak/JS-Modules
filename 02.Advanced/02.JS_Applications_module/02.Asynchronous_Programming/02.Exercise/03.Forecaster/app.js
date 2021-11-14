async function attachEvents() {
    const elements = {
        userInput: document.getElementById('location').value.trim(),
        forecast: document.getElementById(forecast),
        currentWeather: this.forecast.children[0],
        currentWeather: this.forecast.children[1],
    }
    document.getElementById('submit').onclick = await getForecast(elements.userInput)
    elements.userInput.value = ''
}
attachEvents();

async function getForecast(name) {
    const cityCode = await getCityCode(name);
    console.log(cityCode)
    const [currentForecast, upcomingForecast] = await Promise.all([
        getCurrent(cityCode),
        getUpcoming(cityCode)
    ])
    console.log(currentForecast)
    console.log(upcomingForecast)
}
async function getCityCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const location = data.find(l => l.name == name);
        return location.code
    } catch (error) {
        console.log("Error")
        // ....textContent = `${error.message}`;
    }
}
async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code
    const response = await fetch(url);
    const data = await response.json();
    return data
}
async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code
    const response = await fetch(url);
    const data = await response.json();
    return data
}