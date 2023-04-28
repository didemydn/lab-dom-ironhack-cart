// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.getElementsByTagName("input")[0];
  const subTotal = price.innerHTML * quantity.value;
  //alert('Calculate Prices clicked!' + quantity.value);

  product.querySelector('.subtotal span').innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productArray = document.getElementsByClassName('product');
  let total = 0;

  for(let i = 0; i < productArray.length; i++){
    total += updateSubtotal(productArray.item(i));
  }
  // ITERATION 3
  document.getElementById('total-value').innerHTML = 'Total: $' + total;
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});