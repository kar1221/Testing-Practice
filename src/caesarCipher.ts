function caesarCipher(input: string, shiftLevel: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseAlphabet = alphabet.toUpperCase();

  return input.split("").map(char => {
    if(alphabet.includes(char)) {
      let newIndex = (alphabet.indexOf(char) + shiftLevel) % 26;

      if(newIndex < 0) newIndex += 26;

      return alphabet[newIndex];
    } else if(uppercaseAlphabet.includes(char)) {
      let newIndex = (uppercaseAlphabet.indexOf(char) + shiftLevel) % 26;

      if(newIndex < 0) newIndex += 26;

      return uppercaseAlphabet[newIndex];
    } else {
      return char;
    }
  }).join("");
}

export default caesarCipher;