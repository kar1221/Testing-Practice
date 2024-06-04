const Calculator = {
  add(firstNum: number, secondNum: number): number {
    return firstNum + secondNum;
  },

  substract(firstNum: number, secondNum: number): number {
    return firstNum - secondNum;
  },

  multiply(firstNum: number, secondNum: number): number {
    return firstNum * secondNum;
  },

  divide(firstNum: number, secondNum: number): number | string {
    if (secondNum === 0) {
      return "Cannot divide by zero";
    }
    return firstNum / secondNum;
  }
}

export default Calculator;