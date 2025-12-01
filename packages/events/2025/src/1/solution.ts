/**
 * https://adventofcode.com/2025/day/1
 */
export function part1(input: string) {
  const instructions = input.split("\n");
  return applyInstructions(instructions).password;
}

export function part2(input: string) {
  const instructions = input.split("\n").flatMap((instruction) => {
    const direction = instruction[0];
    const distance = parseInt(instruction.slice(1));
    return Array.from({ length: distance }, (_) => `${direction}1`);
  });
  return applyInstructions(instructions).password;
}

function applyInstructions(instructions: string[]) {
  return instructions.reduce((acc, instruction) => {
    const direction = instruction[0];
    const distance = parseInt(instruction.slice(1));
    
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
  }, { position: 50, password: 0 });
}