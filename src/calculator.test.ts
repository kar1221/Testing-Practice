import { expect } from "chai";
import Calculator from "./calculator";

describe("Calculator test", () => {
  describe("Add Test", () => {
    it("should add two numbers", () => {
      expect(Calculator.add(1, 2)).to.equal(3);
    });
  });

  describe("Substract Test", () => {
    it("should substract two numbers", () => {
      expect(Calculator.substract(1, 2)).to.equal(-1);
    });
  });

  describe("Multiply Test", () => {
    it("should multiply two numbers", () => {
      expect(Calculator.multiply(1, 2)).to.equal(2);
    });
  });

  describe("Divide Test", () => {
    it("should divide two numbers", () => {
      expect(Calculator.divide(1, 2)).to.equal(0.5);
    });

    it("should not divide by zero", () => {
      expect(Calculator.divide(1, 0)).to.equal("Cannot divide by zero");
    });
  });
})