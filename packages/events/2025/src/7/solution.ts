/**
 * https://adventofcode.com/2025/day/7
 */
export function part1(input: string) {
  const lines = input.split("\n");
  const tachyonBeamPositions = new Set([lines[0]?.indexOf("S") ?? 0]);
  let numSplits = 0;
  for (let i = 1; i < lines.length; i++) {
    const splitterPositions = [];
    for (let j = 0; j < lines[i]!.length; j++) {
      if (lines[i]![j] === "^") {
        splitterPositions.push(j);
      }
    }
    for (const splitterPosition of splitterPositions) {
      if (tachyonBeamPositions.has(splitterPosition)) {
        numSplits++;
        tachyonBeamPositions.delete(splitterPosition);
        tachyonBeamPositions.add(splitterPosition - 1);
        tachyonBeamPositions.add(splitterPosition + 1);
      }
    }
    console.log(tachyonBeamPositions);
  }
  return numSplits;
}

export function part2(input: string) {
  void input;
  return "TODO";
}
