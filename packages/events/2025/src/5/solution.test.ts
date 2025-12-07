import { readFile } from "@aoc/lib/utils";
import { describe, expect, test } from "vitest";

import { part1, part2 } from "./solution";

describe("day 5", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/5/input.txt"))).toBe(761);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/5/input.txt"))).toBe(345755049374932);
  });
});
