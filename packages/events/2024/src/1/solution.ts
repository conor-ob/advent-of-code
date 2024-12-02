function part1(input: string) {
  const lines = input.split("\n");

  const left: string[] = [];
  const right: string[] = [];

  const inputLines = lines.forEach((line) => {
    const parts = line.split("   ");
    left.push(parts[0]!);
    right.push(parts[1]!);
  });

  left.sort();
  right.sort();

  let distance = 0;
  for (let i = 0; i < left.length; i++) {
    distance += Math.abs(Number(left[i]) - Number(right[i]));
  }

  return distance;
}

function part2(input: string) {
  const lines = input.split("\n");

  const left: string[] = [];
  const right: string[] = [];

  const inputLines = lines.forEach((line) => {
    const parts = line.split("   ");
    left.push(parts[0]!);
    right.push(parts[1]!);
  });

  left.sort();
  right.sort();

  const rightMap = right.reduce((acc, curr) => {
    if (acc.get(curr) === undefined) {
      acc.set(curr, 1);
    } else {
      acc.set(curr, acc.get(curr)! + 1);
    }
    return acc;
  }, new Map<string, number>());

  let similarity = 0;
  for (let i = 0; i < left.length; i++) {
    const frequency = rightMap.get(left[i]!);
    if (frequency !== undefined) {
      similarity += Number(left[i]!) * frequency;
    }
  }

  return similarity;
}

export { part1, part2 };
