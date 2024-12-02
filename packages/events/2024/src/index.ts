import { readFile } from "@pkg/utils";

import type { Puzzle } from "./types/puzzle";

async function main() {
  const args = process.argv.slice(2);
  const day = args[0];

  if (!day) {
    console.log("No day specified. Run with 'pnpm dev {day}'");
    process.exit(1);
  }

  console.log(`Solving day #${args[0]}`);

  try {
    const exampleInput = readFile(`./src/${day}/example.txt`);
    const input = readFile(`./src/${day}/input.txt`);

    const { part1, part2 } = (await import(`./${day}/solution.ts`)) as Puzzle;

    console.log("Part 1");
    console.log("------");
    console.log("example:", part1(exampleInput));
    console.log("answer:", part1(input));

    console.log("\nPart 2");
    console.log("------");
    console.log("example:", part2(exampleInput));
    console.log("answer:", part2(input));
  } catch (error) {
    console.error(error);
  }
}

void main();
