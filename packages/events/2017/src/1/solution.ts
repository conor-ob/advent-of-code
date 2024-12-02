function part1(input: string) {
  const digits = input.split("").map(Number);
  const sum = digits.reduce((acc, digit, index) => {
    return acc + (digit === digits[(index + 1) % digits.length] ? digit : 0);
  }, 0);
  return sum;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
