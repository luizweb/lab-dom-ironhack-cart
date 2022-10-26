// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector(".subtotal span");  
  const result = +price.innerText*+quantity.value;

  subTotal.innerText = result
  //console.log(result);
  return result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  
  let total = 0
  for (let i=0; i < products.length; i++){    
    total += updateSubtotal(products[i]);
  }

  //console.log(total);
  
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // you need to access its parent node and call removeChild on it
  // You can access the parent of a DOM node from its property parentNode.
 
  const productLine = target.parentNode.parentNode;
  productLine.parentNode.removeChild(productLine);

  // Make sure the price gets updated accordingly when you remove products
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  
  
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  const productLine = target.parentNode.parentNode;
  const inputs = productLine.querySelectorAll('input');

  const productName = inputs[0];
  const productPrice = inputs[1];

  const tableProducts = document.querySelector('tbody')
  const newLine = `<tr class="product"> \
                   <td class="name"><span>${productName.value}</span></td> \
                   <td class="price">$<span>${productPrice.value}</span></td> \
                   <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td> \
                   <td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td> \
                  </tr>`
  
  tableProducts.insertAdjacentHTML("beforeend", newLine);
  
  // cleaning inputs
  productName.value = "";
  productPrice.value = "";

  // last remove button
  const lastRemoveBtn = tableProducts.lastChild.querySelector('.btn');
  lastRemoveBtn.addEventListener('click', removeProduct);
  
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn btn-remove');  
  for(let i=0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});

