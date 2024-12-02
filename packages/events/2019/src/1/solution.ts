function part1(input: string) {
  const lines = input.split("\n").map((line) => parseInt(line, 10));
  const sum = lines.reduce((acc, line) => {
    const fuel = Math.floor(line / 3) - 2;
    return acc + fuel;
  }, 0);
  return sum;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
