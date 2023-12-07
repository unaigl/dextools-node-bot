function deleteRepeted(obj1) {
  
    const uniqueChainValues = new Set();
    const finalObject = [];
  
    obj1.forEach((item) => {
      if (item.pool !== undefined) {
        if (!uniqueChainValues.has(item.pool)) {
          uniqueChainValues.add(item.pool);
          finalObject.push(item);
        }
      }
    });
  
    return finalObject;
  }
  
  module.exports={deleteRepeted}