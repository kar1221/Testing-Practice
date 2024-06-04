import { expect } from "chai";
import reverseString from "./reverseString";

describe("Reverse string test", () => {
  it("should reverse the string", () => {
    expect(reverseString("hello")).to.equal("olleh");
  })

  it("should return nothing if the string is empty", () => {
    expect(reverseString("")).to.equal("");
  });

  it("should works with white spaces", () => {
    expect(reverseString("this is some random text")).to.equal("txet modnar emos si siht");
  });

  it("should works with numbers", () => {
    expect(reverseString("12345")).to.equal("54321");
  });
});