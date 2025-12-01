/**
 * https://adventofcode.com/2025/day/1
 */
export function part1(input: string) {
  const lines = input.split("\n");
  return lines.reduce((acc, line) => {
    const direction = line[0];
    const distance = parseInt(line.slice(1));
    
    let newPosition = acc.position;
    switch (direction) {
      case "L":
        newPosition = ((newPosition - distance) % 100 + 100) % 100;
        break;
      case "R":
        newPosition = ((newPosition + distance) % 100 + 100) % 100;
        break;
      default:
        throw new Error(`Invalid direction: ${direction}`);
    }
    if (newPosition === 0) {
      return { ...acc, position: newPosition, password: acc.password + 1 };
    } else {
      return { ...acc, position: newPosition };
    }
  }, { position: 50, password: 0 }).password;
}

export function part2(input: string) {
  const lines = input.split("\n");
  return lines.reduce((acc, line) => {
    const direction = line[0];
    const distance = parseInt(line.slice(1));
    
    let newPosition = acc.position;
    switch (direction) {
      case "L":
        newPosition = ((newPosition - distance) % 100 + 100) % 100;
        break;
      case "R":
        newPosition = ((newPosition + distance) % 100 + 100) % 100;
        break;
      default:
        throw new Error(`Invalid direction: ${direction}`);
    }
    if (newPosition === 0) {
      return { ...acc, position: newPosition, password: acc.password + 1 };
    } else {
      return { ...acc, position: newPosition };
    }
  }, { position: 50, password: 0 }).password;
}
