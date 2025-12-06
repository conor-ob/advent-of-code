/**
 * https://adventofcode.com/2025/day/4
 */
export function part1(input: string) {
  const lines = input.split("\n");
  const lineLength = lines[0]?.length ?? 0;
  const positions = input.split("\n").flatMap((line) => line.split(""));
  return removeRolls(positions, lineLength).removedRolls;
}

export function part2(input: string) {
  const lines = input.split("\n");
  const lineLength = lines[0]?.length ?? 0;
  let positions = input.split("\n").flatMap((line) => line.split(""));

  let totalRemovedRolls = 0;
  while (true) {
    const { removedRolls, newPositions } = removeRolls(positions, lineLength);
    totalRemovedRolls += removedRolls;
    positions = newPositions;

    if (removedRolls === 0) {
      break;
    }
  }
  return totalRemovedRolls;
}

function removeRolls(positions: string[], lineLength: number) {
  let removedRolls = 0;
  const newPositions = [...positions];
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === "@") {
      const check1 =
        i % lineLength === 0 ? undefined : positions[i - lineLength - 1];
      const check2 = positions[i - lineLength];
      const check3 =
        i % lineLength === lineLength - 1
          ? undefined
          : positions[i - lineLength + 1];
      const check4 = i % lineLength === 0 ? undefined : positions[i - 1];
      const check5 =
        i % lineLength === lineLength - 1 ? undefined : positions[i + 1];
      const check6 =
        i % lineLength === 0 ? undefined : positions[i + lineLength - 1];
      const check7 = positions[i + lineLength];
      const check8 =
        i % lineLength === lineLength - 1
          ? undefined
          : positions[i + lineLength + 1];

      const checks = [
        check1,
        check2,
        check3,
        check4,
        check5,
        check6,
        check7,
        check8,
      ];
      if (checks.filter((it) => it === "@").length < 4) {
        removedRolls++;
        newPositions[i] = "x";
      }
    }
  }
  return { removedRolls, newPositions };
}
