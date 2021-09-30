function factory(library, orders) {
    const result = [];
    for (let order of orders) {
        const current = Object.assign({}, order.template);
        for (let part of order.parts) {
            current[part] = library[part];
        }
        result.push(current);
    }
    return result;
}
<<<<<<< HEAD

=======
>>>>>>> 855cf9d9e83a24a6e631fd2c7007cb407fbcbeed
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
<<<<<<< HEAD
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);
=======
// const orders = [
//     {
//         template: { name: 'ACME Printer' },
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner' },
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo' },
//         parts: ['play']
//     }
// ];
// const products = factory(library, orders);
// console.log(products);
>>>>>>> 855cf9d9e83a24a6e631fd2c7007cb407fbcbeed
