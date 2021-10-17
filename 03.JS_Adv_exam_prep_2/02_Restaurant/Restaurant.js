class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let stringResultLog = [];

        products.forEach(element => {

            [productName, productQuantity, productTotalPrice] = element.split(" ");

            if (productTotalPrice <= this.budgetMoney) {

                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                };

                this.budgetMoney -= productTotalPrice;
                stringResultLog.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                stringResultLog.push(`There was not enough money to load ${productQuantity} ${productName}`)
            };

            return stringResultLog.join('\n');
        });


    }

    countObjProp(obj) {
        let counter = 0;
        for (let _ in obj) {
            counter++;
        }
        return counter;
    }

    addToMenu(meal, neededProducts, price) {
        [productName, productQuantity] = neededProducts.split(" ");
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.` // must be: "The meal is on the menu".
        } else {
            let mealsOnMenu = this.countObjProp(this.menu);
            if (mealsOnMenu == 1) {
                
            }
        }

    }
    showTheMenu() {

    }
    makeTheOrder() {

    }

}

//input #1
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// Output #1
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey



//input #2
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Output #2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?


//input #3
let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

// Output #3
// frozenYogurt - $ 9.99
// Pizza - $ 15.55
