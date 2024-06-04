import { expect } from "chai";
import caesarCipher from "./caesarCipher";

describe("Caesar cipher test", () => {
  it("should return nothing if the string is empty", () => {
    expect(caesarCipher("", 3)).to.equal("");
  });

  it("should preserve the case", () => {
    expect(caesarCipher("Hello", 7)).to.equal("Olssv");
  })

  it("should work with white spaces", () => {
    expect(caesarCipher("i am out of creativity", 9)).to.equal("r jv xdc xo lanjcrerch");
  });

  it("should work with numbers", () => {
    expect(caesarCipher("shock your mom for 100 years", 5)).to.equal("xmthp dtzw rtr ktw 100 djfwx");
  })

  it("should work with special characters", () => {
    expect(caesarCipher("F is for friends who do stuff 2gether U is for you & me", 8)).to.equal("N qa nwz nzqmvla epw lw abcnn 2ombpmz C qa nwz gwc & um");
  });

  it("should shift to the other side when the shift level is negative", () => {
    expect(caesarCipher("Greetings, I am Chara.", -7)).to.equal("Zkxxmbgzl, B tf Vatkt.");
  });
})