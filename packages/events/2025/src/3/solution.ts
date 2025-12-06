/**
 * https://adventofcode.com/2025/day/3
 */
export function part1(input: string) {
  return input.split("\n").reduce((acc, line) => {
    let max = 0;
    for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j < line.length; j++) {
        const joltage = Number(`${line[i]}${line[j]}`);
        max = Math.max(max, joltage);
      }
    }
    return acc + max;
  }, 0);
}

export function part2(input: string) {
  return input.split("\n").reduce((acc, line) => {
    const joltages = [];
    let remainingJoltages = line;

    while (joltages.length < 12) {
      for (let i = 9; i >= 0; i--) {
        const index = remainingJoltages.indexOf(i.toString());
        if (
          index !== -1 &&
          remainingJoltages.slice(index).length >= 12 - joltages.length
        ) {
          joltages.push(i);
          remainingJoltages = remainingJoltages.slice(index + 1);
          break;
        }
      }
    }

    return acc + Number(joltages.join(""));
  }, 0);
}
