function solve(array) {
    const productCatalogue={};
    array.forEach(element => {
        let [product,price]=element.split(" : ");
        price=Number(price);
        const index=product[0];
        if(!productCatalogue[index]) {
            productCatalogue[index]={}
        }
        productCatalogue[index][product]=price;
    });
    let sorted=Object.keys(productCatalogue).sort((a,b) => a.localeCompare(b));

    for(const key of sorted) {
        let product=Object
            .entries(productCatalogue[key])
            .sort((a,b) => a[0].localeCompare(b[0]));
        console.log(key);
        product.forEach(element => console
            .log(`  ${element[0]}: ${element[1]}`));
    }
}

// solve([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);