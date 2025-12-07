import { readFile } from "@aoc/lib/utils";
import { describe, expect, test } from "vitest";

import { part1, part2 } from "./solution";

describe("day 6", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/6/input.txt"))).toBe(4951502530386);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/6/input.txt"))).toBe(8486156119946);
  });
});
