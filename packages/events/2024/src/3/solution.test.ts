import { readFile } from "@aoc/lib/utils";
import { describe, expect, test } from "vitest";

import { part1, part2 } from "./solution";

describe("day 3", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/3/input.txt"))).toBe(187833789);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/3/input.txt"))).toBe(94455185);
  });
});
