console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


function renderProducts(){
        const productsUl = document.querySelector('ul');
for(let i = 0;i<products.lenght;i++){
        const productLi = document.createElement('li');
productLi.innerHTML=`title : ${product.name}<br> price :${product.price}<br>${product.rating}`;
productsUl.appendChild(productLi);
}
}

renderProducts(products);