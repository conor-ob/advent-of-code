function part1(input: string) {
  const lines = input.split("\n");
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const a = parseInt(lines[i]!, 10);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const b = parseInt(lines[j]!, 10);
      if (a + b === 2020) {
        return a * b;
      }
    }
  }
  throw new Error("No solution found");
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
