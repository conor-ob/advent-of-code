function part1(input: string) {
  const lines = input.split("\n").map((line) => parseInt(line, 10));
  const result = lines.reduce((acc, value) => acc + value, 0);
  return result;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
