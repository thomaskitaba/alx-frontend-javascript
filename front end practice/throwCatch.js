function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('can not devide by zero');
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return null;
  }
  return (a / b);
}

console.log(divide(8, 2));
