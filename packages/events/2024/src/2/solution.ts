export function part1(input: string) {
  const reports = input.split("\n").map((line) => line.split(" "));

  const safe = reports.reduce((acc, levels) => {
    for (let i = 0; i < levels.length; i++) {
      const current = Number(levels[i]);
      const next = Number(levels[i + 1]);

      const diff = Math.abs(next - current);
      if (diff > 2) {
        return acc;
      }
    }
    return acc + 1;
  }, 0);

  void safe;
  return "TODO";
}

export function part2(input: string) {
  void input;
  return "TODO";
}
