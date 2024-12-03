/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * https://adventofcode.com/2024/day/3
 */
export function part1(input: string) {
  const valid = input.match(new RegExp(/mul\(\d+,\d+\)/, "g"));
  return valid?.reduce((acc, v) => {
    const parts = v.split(",");
    const firstHalf = parseInt(parts[0]?.substring(parts[0].indexOf("(") + 1)!);
    const secondHalf = parseInt(parts[1]?.substring(0, parts[1].indexOf(")"))!);
    return acc + firstHalf * secondHalf;
  }, 0);
}

export function part2(input: string) {
  const adjusted = JSON.stringify(`do()${input}don't()`);
  const valid = adjusted.match(new RegExp(/do\(\)(.*?)(?=don't\(\))/, "g"));
  return valid?.reduce((acc, v) => {
    return acc + part1(v)!;
  }, 0);
}
