// ---------saving node to clone
const nodeToClone = document.querySelector('.product')
// ITERATION 1

  function updateSubtotal(product) {
    //... your code goes here
    // Steps 1 & 2
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    // Step 3
    const subtotal = Number(price * quantity);
    // Step 4
    const subtotalElement = product.querySelector('.subtotal span');
    // Step 5
    subtotalElement.innerHTML = subtotal;
    return subtotal;
  }

  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test
  
    // ITERATION 2
    //... your code goes here
    const productList = document.querySelectorAll('.product');
  
    let total = 0;
    productList.forEach((singleProduct) => {
      total += updateSubtotal(singleProduct);
    });
  
    // ITERATION 3
    //... your code goes here
    const totalValue = document.querySelector('#total-value span');
    totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const childToRemove  = target.parentNode.parentNode;
  const parent = childToRemove.parentNode

  parent.removeChild(childToRemove);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //----------- Declare consts and getting elements  and  data
  const  newProduct = document.querySelector('.create-product')
  const newProductName  = newProduct.querySelectorAll('input')[0].value
  const newProductPrice  = newProduct.querySelectorAll('input')[1].value
  const newRowProduct = nodeToClone.cloneNode('deep')

  newRowProduct.querySelectorAll('span')[0].innerHTML  = newProductName
  newRowProduct.querySelectorAll('span')[1].innerHTML  = newProductPrice
  document.querySelector('tbody').appendChild(newRowProduct)
  const removeProductBtn  = document.querySelectorAll('.btn-remove')

  //------------ erasing values after creating
  newProduct.querySelectorAll('input')[0].value =''
  newProduct.querySelectorAll('input')[1].value =0

  // -----------  run forEach to implement the  onclick to new buttnns
  removeProductBtn.forEach((element)=>{element.onclick = removeProduct})
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn  = document.querySelectorAll('.btn-remove')
  console.log(removeProductBtn)
  removeProductBtn.forEach((element)=>{element.onclick = removeProduct})
  
  const createNewProductBtn = document.getElementById('create');
  createNewProductBtn.addEventListener('click',createProduct)
  

  //... your code goes here
});
