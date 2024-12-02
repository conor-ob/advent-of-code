import { describe, expect, test } from "vitest";

import { readFile } from "@pkg/utils";

import { part1, part2 } from "./solution";

describe("day 1", () => {
  test("part 1", () => {
    expect(part1(readFile("./src/1/input.txt"))).toBe(307);
  });

  test("part 2", () => {
    expect(part2(readFile("./src/1/input.txt"))).toBe("TODO");
  });
});