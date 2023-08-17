function Product(name, price) {
  // private Properties
  const _name = name;
  const _price = price;

  // Public Methods
  this.getName = function () {
    return _name;
  };

  this.getPrice = function () {
    return _price;
  };
}

function ShoppingCart() {
  // Private properties
  let _items = [];

  // Public Methods
  this.addItem = function (item) {
    _items.push(item);
  };

  this.removeItem = function (name) {
    const filteredItems = _items.filter(item => item.getName() !== name);

    _items = filteredItems;
  };

  this.getTotal = function () {
    return _items.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.getPrice();
    }, 0);
  };

  this.getCartItems = function () {
    return _items;
  };
}

// Create some products
const product1 = new Product("Product 1", 10);
const product2 = new Product("Product 2", 20);
const product3 = new Product("Product 3", 30);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 3);
cart.addItem(product3, 1);

// Display cart items and total
console.log("Cart Items:", cart.getCartItems());
console.log("Total:", cart.getTotal());

// Remove an item from the cart
cart.removeItem("Product 2");

// Display updated cart items and total
console.log("Updated Cart Items:", cart.getCartItems());
console.log("Updated Total:", cart.getTotal());
