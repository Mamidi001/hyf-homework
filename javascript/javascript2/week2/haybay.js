
 console.log("Script loaded");





 //code from last week until calling render products

 /*const products = getAvailableProducts();
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

renderProducts(products);*/

 
 
// tried today with shuffling the code

 const products = getAvailableProducts();
 console.log(products);
 const productLi = document.createElement('li');
 
 const searchBar = document.getElementById('searchBar');
 const searchWithPrice = document.getElementById('productPrice');
 console.log(searchBar);

 searchBar.addEventListener('keyup',(e)=>{
 const searchProduct = e.target.value;
 
  const filteredProducts = products.filter(product =>{
         return product.name.toLowerCase().includes(searchProduct.toLowerCase())
 });
   
   renderProducts(filteredProducts)
});

  //searching for price products

  searchWithPrice.addEventListener('keyup',(e)=>{
        const searchProductWithPrice = e.target.value;
        
         const filteredProductsPrice = products.filter(product =>{
                return product.price < searchProductWithPrice
        });
          
          renderProducts(filteredProductsPrice)
       });


   console.log(products);
   function renderProducts(products){
        const productsUl = document.querySelector('main ul');
       productsUl.innerHTML= "";
 for(let i = 0; i < products.length; i++){
        console.log('for');
        const productLi = document.createElement('li');
        const product = products[i];
        console.log(productLi);

  productLi.innerHTML=`title : ${product.name}<br> price :${product.price}<br> rating:${product.rating}`;
  productsUl.appendChild(productLi);
  }
  }

   renderProducts(products);

 




