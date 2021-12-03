console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


function renderProducts(){
        const productsUl = document.querySelector(' main ul');
       
 for(let i = 0; i < products.length; i++){
        console.log('for');
        const productLi = document.createElement('li');
        const product = products[i];
        console.log(productLi);

productLi.innerHTML=`title : ${product.name}<br> price :${product.price}<br>${product.rating}`;
productsUl.appendChild(productLi);
}
}

renderProducts(products);
