import { describe, expect, test } from "vitest";

import { readFile } from "@aoc/lib/utils";

import { part1, part2 } from "./solution";

describe("day 1", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/1/input.txt"))).toBe(918339);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/1/input.txt"))).toBe("TODO");
  });
});
