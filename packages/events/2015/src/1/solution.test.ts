import { describe, expect, test } from "vitest";

import { readFile } from "@pkg/utils";

import { part1, part2 } from "./solution";

describe("day 1", () => {
  test("part 1 example", () => {
    expect(part1(readFile("./src/1/example.txt"))).toBe("TODO");
  });

  test("part 1", () => {
    expect(part1(readFile("./src/1/input.txt"))).toBe("TODO");
  });

  test("part 2 example", () => {
    expect(part2(readFile("./src/1/example.txt"))).toBe("TODO");
  });

  test("part 2", () => {
    expect(part2(readFile("./src/1/input.txt"))).toBe("TODO");
  });
});
