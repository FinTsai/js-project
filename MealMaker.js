/*
Meal Maker

A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/



const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if(typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
get todaysSpecial() {
  if (this._meal && this._price) {
    return `Today's Special is ${this._meal} for $${this._price}!`;
  } else {
  return 'Meal or price was not set correctly!';
  }
}
};
//{} for creates an empty object
//with _ should not be directly manipulated


menu.meal = 'pizza';
//can change or set the value of a property in an object
menu.price = 100;


console.log(menu.todaysSpecial);
//print Today's Special is pizza for $100!


