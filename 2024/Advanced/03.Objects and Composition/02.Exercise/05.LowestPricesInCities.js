function solve(array) {
    const catalogue = {}
    for (const list of array) {
        let [town, product, price] = list.split(' | ');
        price = Number(price)
        if (!catalogue[product]) {
            catalogue[product] = {}
        }
        catalogue[product][town] = price
    }
    for (let product in catalogue) {
        let sorted = Object.entries(catalogue[product]).sort((a,b) => a[1] - b[1]);
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)