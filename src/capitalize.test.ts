import { expect } from "chai";
import capitalize from "./capitalize";

describe("Capitalize test", () => {
  it("should capitalize the first letter", () => {
    expect(capitalize("amongus")).to.equal("Amongus");
  })

  it("should work even with white spaces", () => {
    expect(capitalize("chatgpt help me generate the test pls")).to.equal("Chatgpt help me generate the test pls");
  })

  it("should return nothing if the string is empty", () => {
    expect(capitalize("")).to.equal("");
  })

  it("should works with numbers", () => {
    expect(capitalize("this is some random numbers 2917")).to.equal("This is some random numbers 2917");
  })
})