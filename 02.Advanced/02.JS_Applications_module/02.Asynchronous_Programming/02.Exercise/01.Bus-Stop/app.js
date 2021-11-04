async function getInfo() {
    // console.log('It works')
    const stopID = document.getElementById('stopId').value;
    const busStopNameEl = document.getElementById('stopName');
    const timeTableEl = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try { 
        busStopNameEl.textContent = "Just a moment..."
        timeTableEl.replaceChildren();
        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }
        const data = await res.json();

        busStopNameEl.textContent = data.name;

        Object.entries(data.buses).forEach(el => {
            let [currentBus, minutes] = el;
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${currentBus} arrives in ${minutes} minutes`;
            timeTableEl.appendChild(liEl);
        })
    } catch (error) {
        busStopNameEl.textContent = 'Error';
    }
}