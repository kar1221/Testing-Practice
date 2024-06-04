import analyzeArray from "./analyzeArray";
import { expect } from "chai";

describe("Analyze array test", () => {
  it("should analyze an array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).to.deep.equal({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  it("should return an object with everything 0 if the array is empty", () => {
    expect(analyzeArray([])).to.deep.equal({
      average: 0,
      min: 0,
      max: 0,
      length: 0
    });
  });
})