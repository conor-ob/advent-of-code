/**
 * https://adventofcode.com/2025/day/2
 */
export function part1(input: string) {
  const idRanges = input.split(",");
  return sumOfInvalidIds(idRanges, (_) => [2]);
}

export function part2(input: string) {
  const idRanges = input.split(",");
  return sumOfInvalidIds(idRanges, getAllFactors);
}

function sumOfInvalidIds(idRanges: string[], getFactors: (id: number) => number[]) {
  return idRanges.reduce((acc, idRange) => {
    const [start, end] = idRange.split("-").map(Number);

    if (start === undefined || end === undefined || start > end) {
      throw new Error(`Invalid id range: ${idRange}`);
    }

    for (let id = start; id <= end; id++) {
      const isInvalid = isInvalidId(id, getFactors);
      if (isInvalid) {
        acc += id;
      }
    }

    return acc;
  }, 0);
}

function isInvalidId(id: number, getFactors: (id: number) => number[]) {
  const stringId = id.toString();
  const idLength = stringId.length;
  
  const factors = getFactors(idLength);
  for (const factor of factors) {
    const partLength = idLength / factor;
    const parts = new Set<string>();

    for (let i = 0; i < idLength; i+=partLength) {
      const part = stringId.slice(i, i + partLength);
      parts.add(part);
    }
    
    if (parts.size === 1) {
      return true;
    }
  }
  return false;
}

function getAllFactors(id: number) {
  const factors = [];
  for (let i = 2; i <= id; i++) {
    if (id % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}