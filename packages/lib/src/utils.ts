import { readFileSync } from "fs";

export function readFile(filePath: string) {
  return readFileSync(filePath, "utf-8");
}
