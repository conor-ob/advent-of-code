/**
 * https://adventofcode.com/2025/day/6
 */
export function part1(input: string) {
  const lines = input
    .split("\n")
    .map((line) => line.trim().replace(/\s+/g, " ").split(" "));

  const expressions = lines.reduce((acc, line) => {
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      if (element === "*" || element === "+") {
        const expression = acc.get(i);
        if (expression) {
          expression.operator = element;
        } else {
          acc.set(i, { operator: element, operands: [] });
        }
      } else {
        const expression = acc.get(i);
        if (expression) {
          expression.operands.push(Number(element));
        } else {
          acc.set(i, { operator: "", operands: [Number(element)] });
        }
      }
    }
    return acc;
  }, new Map<number, { operator: string; operands: number[] }>());

  return Array.from(expressions.values()).reduce((acc, expression) => {
    if (expression.operator === "*") {
      acc += expression.operands.reduce((acc, operand) => {
        return acc * operand;
      }, 1);
    } else if (expression.operator === "+") {
      acc += expression.operands.reduce((acc, operand) => {
        return acc + operand;
      }, 0);
    }
    return acc;
  }, 0);
}

export function part2(input: string) {
  void input;
  return "TODO";
}
