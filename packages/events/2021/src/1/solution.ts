/** biome-ignore-all lint/performance/noAccumulatingSpread: todo */
/** biome-ignore-all lint/style/noNonNullAssertion: todo */
function part1(input: string) {
  const lines = input.split("\n").map((line) => parseInt(line, 10));
  const aggregated = lines.reduce(
    (acc, depth) => {
      if (depth > acc.lastDepth) {
        return {
          lastDepth: depth,
          increases: acc.increases + 1,
        };
      } else {
        return {
          ...acc,
          lastDepth: depth,
        };
      }
    },
    {
      lastDepth: lines[0]!,
      increases: 0,
    },
  );
  return aggregated.increases;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
