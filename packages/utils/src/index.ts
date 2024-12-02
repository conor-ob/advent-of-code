import { readFileSync } from "fs";

export type Puzzle = {
  part1: (input: string) => string | number;
  part2: (input: string) => string | number;
};

export function readFile(filePath: string) {
  return readFileSync(filePath, "utf-8");
}
