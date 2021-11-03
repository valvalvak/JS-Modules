async function solve() {


    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/depot`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();