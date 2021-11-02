async function getInfo() {
    const stopID = document.getElementById('stopID').ariaValueMax;
    const busStopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById(`buses`);

    const url = `http://localhost:3030/jsonstore/bus/buinfo/${stopID}`;

    try {
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }
        const data = await res.json();

        busStopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach((b, v) => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b} arrives in ${v} minutes`;
            timeTableElement.appendChild(liElement);
        })
    } catch (error) {
        alert(error.message);   
    }
}