/**
 * https://adventofcode.com/2025/day/7
 */
export function part1(input: string) {
  const lines = input.split("\n");

  const beamPositions = new Set([lines[0]?.indexOf("S") ?? 0]);

  return lines.reduce((acc, line) => {
    const splitterPositions = [];

    for (let j = 0; j < line.length; j++) {
      if (line[j] === "^") {
        splitterPositions.push(j);
      }
    }

    for (const splitterPosition of splitterPositions) {
      if (beamPositions.has(splitterPosition)) {
        beamPositions.delete(splitterPosition);
        beamPositions.add(splitterPosition - 1);
        beamPositions.add(splitterPosition + 1);
        acc++;
      }
    }

    return acc;
  }, 0);
}

export function part2(input: string) {
  void input;
  return "TODO";
}
