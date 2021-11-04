async function getInfo() {
    const busStopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');
    const stopID = document.getElementById('stopID').value;

    const url = `http://localhost:3030/jsonstore/bus/buinfo/${stopID}`;
    // const res = await fetch(url);
    // const data = await res.json();

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }  


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