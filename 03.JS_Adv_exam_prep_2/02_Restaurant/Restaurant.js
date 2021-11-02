class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };
    getObjArray(obj) {
        let meals = [];
        for (let meal in obj) {
            meals.push(meal)
        }
        return meals;
    }
    
    loadProducts(products) {
        let stringResultLog = [];

        for (let element of products) {

            let [productName, productQuantity, productTotalPrice] = element.split(" ");

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
        };
        return stringResultLog.join('\n');
    };

    

    addToMenu(meal, neededProducts, price) {
        for (let element of neededProducts) {
            let [productName, productQuantity] = element.split(" ");
            if (this.menu.hasOwnProperty(meal)) {
                return `The ${meal} is already in the our menu, try something different.` // must be: "The meal is on the menu".
            } else {
                if (this.getObjArray(this.menu).length == 1) {
                    this.menu[meal] = price * productQuantity;
                    this.menu[meal][products] = [];
                    this.menu[meal].products.push(productName)
                    return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                } else {
                    this.menu[meal] = price;
                    return `Great idea! Now with the ${meal} we have ${this.getObjArray(this.menu).length} meals in the menu, other ideas?`
                };
            };
        };
    };

    showTheMenu() {
        let result = [];
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal]}`);
        };
        if (result.length < 1) {
            return "Our menu is not ready yet, please come later..."
        } else {
            return result
        };
    };
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
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Output #2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?


//input #3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// Output #3
// frozenYogurt - $ 9.99
// Pizza - $ 15.55
