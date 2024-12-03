function part1(input: string) {
  const lines = input.split("\n").reduce(
    (acc, line) => {
      const parts = line.split("   ").map((part) => parseInt(part, 10));
      return {
        left: acc.left.concat(parts[0] ?? 0),
        right: acc.right.concat(parts[1] ?? 0),
      };
    },
    { left: new Array<number>(), right: new Array<number>() },
  );

  const left = lines.left.sort((a, b) => a - b);
  const right = lines.right.sort((a, b) => a - b);

  let distance = 0;
  for (let i = 0; i < left.length; i++) {
    distance += Math.abs(Number(left[i]) - Number(right[i]));
  }

  return distance;
}

function part2(input: string) {
  const lines = input.split("\n").reduce(
    (acc, line) => {
      const parts = line.split("   ").map((part) => parseInt(part, 10));
      return {
        left: acc.left.concat(parts[0] ?? 0),
        right: acc.right.concat(parts[1] ?? 0),
      };
    },
    { left: new Array<number>(), right: new Array<number>() },
  );

  const left = lines.left.sort((a, b) => a - b);
  const right = lines.right.sort((a, b) => a - b);

  const rightMap = right.reduce((acc, curr) => {
    if (acc.get(curr) === undefined) {
      acc.set(curr, 1);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      acc.set(curr, acc.get(curr)! + 1);
    }
    return acc;
  }, new Map<number, number>());

  let similarity = 0;
  for (const value of left) {
    const frequency = rightMap.get(value);
    if (frequency !== undefined) {
      similarity += Number(value) * frequency;
    }
  }

  return similarity;
}

export { part1, part2 };
