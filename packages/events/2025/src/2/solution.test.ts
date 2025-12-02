import { describe, expect, test } from "vitest";

import { readFile } from "@aoc/lib/utils";

import { part1, part2 } from "./solution";

describe("day 2", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/2/input.txt"))).toBe(43952536386);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/2/input.txt"))).toBe(54486209192);
  });
});
