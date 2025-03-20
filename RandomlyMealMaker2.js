//adding an array of meals and prices to randomly set and get Today’s Special!


const menu = {
  _meals: ['Pizza', 'Pasta', 'Burger', 'Salad'],
  _prices: [100, 120, 80, 50],
  get todaysSpecial() {
    const RedMeal = Math.floor(Math.random() * this._meals.length);
    const RedPrice = Math.floor(Math.random() * this._prices.length);
    return `Today's Special is ${this._meals[RedMeal]} for $${this._prices[RedPrice]}!`;
  }
};

console.log(menu.todaysSpecial);
//print Today's Special is Pasta for $50!
//print random meal and price


