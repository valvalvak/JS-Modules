function attachEvents() {
    
    
}

attachEvents();
function myLog() {
    console.log()
}
async function getForecast(name) {
    const cityCode = await getCityCode(name);
    const [todayForecast, upcomingForecast] = Promise.all([
        getTodayForecast(cityCode),
        getUpcomingForecast(cityCode)
    ])
    return {todayForecast, upcomingForecast}
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
async function getTodayForecast(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code
    const response = await fetch(url);
    const data = await response.json();
    return data
}
async function getUpcomingForecast(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code
    const response = await fetch(url);
    const data = await response.json();
    return data
}