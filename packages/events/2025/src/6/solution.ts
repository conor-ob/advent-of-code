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
  const lines = input.split("\n").map((line) => line.split(""));

  const rotated = rotateCounterClockwise(lines);

  let numExpressionsProcessed = 0;
  const expressions = rotated.reduce((acc, row) => {
    const line = row.filter((element) => element !== " ");
    if (line.length === 0) {
      numExpressionsProcessed++;
      return acc;
    }

    const operator = line.find((element) => element === "*" || element === "+");
    if (operator !== undefined) {
      const expression = acc.get(numExpressionsProcessed);
      if (expression === undefined) {
        acc.set(numExpressionsProcessed, {
          operator: operator,
          operands: [],
        });
      } else {
        expression.operator = operator;
      }
    }

    const operand = line
      .filter((element) => element !== "*" && element !== "+")
      .join("");
    const expression = acc.get(numExpressionsProcessed);
    if (expression === undefined) {
      acc.set(numExpressionsProcessed, {
        operator: "",
        operands: [Number(operand)],
      });
    } else {
      expression.operands.push(Number(operand));
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

function rotateCounterClockwise<T>(arr: T[][]): T[][] {
  const rows = arr.length;
  const cols = arr[0]?.length ?? 0;
  const rotated: T[][] = [];

  for (let col = cols - 1; col >= 0; col--) {
    const newRow: T[] = [];
    for (let row = 0; row < rows; row++) {
      const value = arr[row]?.[col];
      if (value !== undefined) {
        newRow.push(value);
      }
    }
    rotated[cols - 1 - col] = newRow;
  }

  return rotated;
}
