
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let maxProduct = array[0] * array[1];
     for (let i = 1; i < array.length; i++) {
        product = array[i] * array[i + 1];
        if (product > maxProduct)
           maxProduct = product;
     }
    return maxProduct; 
}
  
  