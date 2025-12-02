/**
 * https://adventofcode.com/2025/day/2
 */
export function part1(input: string) {
  const idRanges = input.split(",");
  const invalidIdsSum = idRanges.reduce((acc, idRange) => {
    const [start, end] = idRange.split("-").map(Number);
    if (start === undefined || end === undefined) {
      throw new Error(`Invalid id range: ${idRange}`);
    }
    for (let i = start; i <= end; i++) {
      const isInvalid = isInvalidIdPart1(i);
      if (isInvalid) {
        acc += i;
      }
    }
    return acc;
  }, 0);
  return invalidIdsSum;
}

function isInvalidIdPart1(id: number) {
  const stringId = id.toString();
  const stringIdLength = stringId.length;
  if (stringIdLength % 2 !== 0) {
    return false
  }

  const firstHalf = stringId.slice(0, stringIdLength / 2);
  const secondHalf = stringId.slice(stringIdLength / 2);
  
  if (firstHalf === secondHalf) {
    return true;
  }
  return false;
}

export function part2(input: string) {
  const idRanges = input.split(",");
  const invalidIdsSum = idRanges.reduce((acc, idRange) => {
    const [start, end] = idRange.split("-").map(Number);
    if (start === undefined || end === undefined) {
      throw new Error(`Invalid id range: ${idRange}`);
    }
    for (let i = start; i <= end; i++) {
      const isInvalid = isInvalidIdPart2(i);
      if (isInvalid) {
        acc += i;
      }
    }
    return acc;
  }, 0);
  return invalidIdsSum;
}

function isInvalidIdPart2(id: number) {
  const stringId = id.toString();
  const stringIdLength = stringId.length;
  
  const factors = getFactors(stringIdLength);

  for (const factor of factors) {
    const partLength = stringIdLength / factor;
    const parts: string[] = [];
    for (let i = 0; i < factor; i++) {
      const part = stringId.slice(i * partLength, (i + 1) * partLength);
      parts.push(part);
    }
    if (parts.every((part) => part === parts[0])) {
      return true;
    }
  }
  return false;
}

function getFactors(id: number) {
  const factors = [];
  for (let i = 2; i <= id; i++) {
    if (id % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}