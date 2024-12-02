function part1(input: string) {
  const lines = input.split("\n");
  const sum = lines.reduce((acc, line) => {
    let firstDigit = 0;
    for (const char of line) {
      if (isNaN(parseInt(char))) {
        continue;
      } else {
        firstDigit = parseInt(char);
        break;
      }
    }
    let lastDigit = 0;
    for (let i = line.length - 1; i >= 0; i--) {
      const char = line[i];
      if (!char) {
        throw new Error("No last digit found");
      }
      if (isNaN(parseInt(char))) {
        continue;
      } else {
        lastDigit = parseInt(char);
        break;
      }
    }
    return acc + Number(`${firstDigit}${lastDigit}`);
  }, 0);
  return sum;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
