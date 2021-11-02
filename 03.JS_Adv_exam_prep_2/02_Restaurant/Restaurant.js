class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this._menuItemsCount = Object.keys(this.menu).length;
    };
    
    loadProducts(products) {

        for (let el of products) {
            let [productName, productQuantity, productTotalPrice] = el.split(" ");
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            }
            else {this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)}
        };
        return this.history.join('\n');
    };

    addToMenu(meal, products, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`; // must be: "The meal is on the menu".
        } else {
            this.menu[meal] = {
                products: {},
                price: price
            };
            
            products.forEach(element => {
                let [productName, productQuantity] = element.split(" ");
                productQuantity = Number(productQuantity);
                this.menu[meal].products[productName] = productQuantity;
            });

            if (this._menuItemsCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${this._menuItemsCount} meals in the menu, other ideas?`;
            }
        }
    };

    showTheMenu() {
        if (this._menuItemsCount < 1) {
            return "Our menu is not ready yet, please come later..."
        }
        let menu = [];
        for (let meal in this.menu) {
            menu.push(`${meal} - $ ${this.menu[meal]}`)
        }
        return menu.join('\n')
    }
    makeTheOrder(meal) {

    }
}

//input #1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// Output #1
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey



//input #2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Output #2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?


//input #3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// Output #3
// frozenYogurt - $ 9.99
// Pizza - $ 15.55