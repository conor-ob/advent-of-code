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
  const lines = input.split("\n");
  const freshIdRanges = lines.filter(
    (line) => line.includes("-") && line !== "",
  );

  const sortedFreshIdRanges = freshIdRanges.sort((a, b) => {
    const [startA, endA] = a.split("-").map(Number);
    const [startB, endB] = b.split("-").map(Number);

    if (
      startA === undefined ||
      endA === undefined ||
      startB === undefined ||
      endB === undefined
    ) {
      throw new Error(`Invalid range: ${a} or ${b}`);
    }

    return startA - startB;
  });

  let currentMaxId = 0;
  return sortedFreshIdRanges.reduce((acc, range) => {
    const [start, end] = range.split("-").map(Number);

    if (start === undefined || end === undefined) {
      throw new Error(`Invalid range: ${range}`);
    }

    if (start > currentMaxId) {
      acc += end - start + 1;
    } else if (end > currentMaxId) {
      acc += end - currentMaxId;
    }

    currentMaxId = Math.max(currentMaxId, end);

    return acc;
  }, 0);
}
