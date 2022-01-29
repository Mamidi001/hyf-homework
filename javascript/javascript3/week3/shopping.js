// sometimes it showing 403 failed loading error
const user1 = fetch(
  "https://api.github.com/search/repositories?q=user:benna100"
)
  .then((response) => response.json())
  .then((bennaData) => {
    return `FullName : ${bennaData.items[1].full_name}<br>
    url : ${bennaData.items[1].owner.url}<br>
    Owner : ${bennaData.items[1].owner.login}`;
  });

const user2 = fetch(
  "https://api.github.com/search/repositories?q=user:Mamidi001"
)
  .then((response) => response.json())
  .then((mamidiData) => {
    return `FullName : ${mamidiData.items[1].full_name}<br>
    url : ${mamidiData.items[1].owner.url}<br>
    Owner : ${mamidiData.items[1].owner.login}`;
  });

const user3 = fetch(
  "https://api.github.com/search/repositories?q=user:amritpandey"
)
  .then((response) => response.json())
  .then((amritData) => {
    return `FullName : ${amritData.items[3].full_name}<br>
    url : ${amritData.items[1].owner.url}<br>
    Owner : ${amritData.items[1].owner.login}`;
  });

let promiseArray = [user1, user2, user3];
Promise.all(promiseArray).then((result) => {
  console.log(result);
  const ul = document.createElement("ul");
  for (let i = 0; i < result.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = result[i];
    ul.appendChild(li);
    document.getElementById("userUrl").appendChild(ul);
  }
});
//shopping task using classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=d733fa2b8b4f475f2b6d9cb7772bcbea"
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.rates);
        const rateObj = data.rates;
        const objArray = Object.entries(rateObj);
        objArray.map((obj) => {
          if (currency.toUpperCase().includes(obj[0])) {
            console.log(this.name + ": " + this.price * obj[1] + " " + obj[0]);
          }
        });
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products.pop(product);
  }

  searchProduct(productName) {
    const productArray = this.products;
    console.log(productArray.filter(iphone));
    this.products.match((productName = this.products));
  }

  getTotal() {
    //Implement functionality here
    console.log(this.products);
    const total = this.products
      .map((product) => product.price)
      .reduce((sum, currentValue) => sum + currentValue);
    console.log(total);
  }

  renderProducts() {
    const shoppingList = document.getElementById("shoppingProducts");

    const myProducts = this.products.map((product) => {
      product.name;
      const li = document.createElement("li");
      li.innerHTML = product.name + " " + product.price;
      shoppingList.appendChild(li);
      console.log(this.products);
    });
  }

  getUser(user) {
    // Implement functionality here
    fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => console.log(data.name));
    //return promise
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const iphone = new Product("iphone", 5000);
const e_bike = new Product("ebike", 3500);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(e_bike);
shoppingCart.removeProduct(e_bike);
//shoppingCart.searchProduct(productName.name);
console.log(shoppingCart);
shoppingCart.getTotal();
shoppingCart.getUser(2);
shoppingCart.renderProducts();
