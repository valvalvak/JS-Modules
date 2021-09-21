function solve(x1_, y1_, x2_, y2_,) {
    function calculateDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        return distance
    }
    const deltas = [
        [[x1_, y1_],[0, 0]],
        [[x2_, y2_],[0, 0]],
        [[x1_, y1_],[x2_, y2_]]
    ]

    for (let i = 0; i < deltas.length; i++) {
        let [x1, y1] = deltas[i][0]
        let [x2, y2] = deltas[i][1]
        let result = calculateDistance(x1, y1, x2, y2)
        let a = [x1, y1].join(", ")
        let b = [x2, y2].join(", ")
        if (Number.isInteger(result)) {
            console.log(`{${a}} to {${b}} is valid`)
        } else {
            console.log(`{${a}} to {${b}} is invalid`)
        }
    }
}
// solve(3, 0, 0, 4);
// solve(2, 1, 1, 1);
