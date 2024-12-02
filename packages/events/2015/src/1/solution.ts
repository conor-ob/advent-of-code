function part1(input: string) {
  const instructions = input.split("");
  const floor = instructions.reduce((acc, instruction) => {
    if (instruction === "(") {
      return acc + 1;
    } else if (instruction === ")") {
      return acc - 1;
    }
    return acc;
  }, 0);
  return floor;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
