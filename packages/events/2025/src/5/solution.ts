/**
 * https://adventofcode.com/2025/day/5
 */
export function part1(input: string) {
  const lines = input.split("\n");
  const freshIdRanges = lines.filter(
    (line) => line.includes("-") && line !== "",
  );
  const ingredientIds = lines.filter(
    (line) => !line.includes("-") && line !== "",
  );

  return ingredientIds.reduce((acc, ingredientId) => {
    for (const range of freshIdRanges) {
      const [start, end] = range.split("-").map(Number);

      if (start === undefined || end === undefined) {
        throw new Error(`Invalid range: ${range}`);
      }

      if (Number(ingredientId) >= start && Number(ingredientId) <= end) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);
}

export function part2(input: string) {
  void input;
  return "TODO";
  // const lines = input.split("\n");
  // const freshIdRanges = lines.filter(
  //   (line) => line.includes("-") && line !== "",
  // );
  // return freshIdRanges.reduce((acc, range) => {
  //   const [start, end] = range.split("-").map(Number);
  //   if (start === undefined || end === undefined) {
  //     throw new Error(`Invalid range: ${range}`);
  //   }
  //   for (let i = start; i <= end; i++) {
  //     acc.add(i);
  //   }
  //   return acc;
  // }, new Set<number>()).size;
}
