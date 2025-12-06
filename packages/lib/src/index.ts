/** biome-ignore-all lint/suspicious/noConsole: debug logging */
import type { Puzzle } from "./types";
import { readFile } from "./utils";

async function main() {
  const args = process.argv.slice(2);
  const year = args[0];
  const day = args[1];

  if (!year || !day) {
    console.log("Run with 'pnpm dev {year} {day}'");
    process.exit(1);
  }

  console.log(`\nSolving year ${year} day ${day}\n`);

  try {
    const input = readFile(`../events/${year}/src/${day}/input.txt`);

    const { part1, part2 } = (await import(
      `../../events/${year}/src/${day}/solution.ts`
    )) as Puzzle;

    console.log("Part 1");
    console.log("------");
    console.log("answer:", part1(input));

    console.log("\nPart 2");
    console.log("------");
    console.log("answer:", part2(input));
  } catch (error) {
    console.error(error);
  }
}

void main();
