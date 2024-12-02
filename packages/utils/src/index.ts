import { readFileSync } from "fs";

export function readFile(filePath: string) {
  return readFileSync(filePath, "utf-8");
}

export function readLines(filePath: string) {
  return readFile(filePath).split("\n");
}
