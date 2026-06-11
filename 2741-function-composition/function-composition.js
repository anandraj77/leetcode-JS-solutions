function compose(functions) {
  if (functions.length === 0) {
    return function(x) {
      return x; // Identity function
    };
  }
  
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}