
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.


function mergeArrays(a, b) {
    const firstArrayLength = a.length
    const secondArrayLength = b.length
    let result = []
      for (let i = 0; i < Math.max(firstArrayLength,secondArrayLength ); i++) {
      if (i < a.length) {
       result.push(a[i]); 
      }
  
      if (i < b.length) {
       result.push(b[i]); 
      }
    }
  
    return result;
  }