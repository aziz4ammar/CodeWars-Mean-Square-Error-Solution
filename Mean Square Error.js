function solution(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
      throw new Error('Input arrays must have the same length');
    }
  
    const squaredErrors = arrayA.map((numA, index) => {
      const numB = arrayB[index];
      const error = numA - numB;
      return error * error;
    });
  
    const meanSquareError = squaredErrors.reduce((sum, error) => sum + error, 0) / arrayA.length;
    return meanSquareError;
  }  