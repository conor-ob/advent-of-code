/** biome-ignore-all lint/performance/noAccumulatingSpread: todo */
function part1(input: string) {
  const directions = input.split(", ");
  const hq = directions.reduce(
    (acc, direction) => {
      if (direction.startsWith("L")) {
        if (acc.heading === "N") {
          return {
            ...acc,
            x: acc.x - Number(direction.slice(1)),
            heading: "W",
          };
        } else if (acc.heading === "E") {
          return {
            ...acc,
            y: acc.y + Number(direction.slice(1)),
            heading: "N",
          };
        } else if (acc.heading === "S") {
          return {
            ...acc,
            x: acc.x + Number(direction.slice(1)),
            heading: "E",
          };
        } else if (acc.heading === "W") {
          return {
            ...acc,
            y: acc.y - Number(direction.slice(1)),
            heading: "S",
          };
        } else {
          throw new Error(`Invalid heading: ${acc.heading}`);
        }
      } else if (direction.startsWith("R")) {
        if (acc.heading === "N") {
          return {
            ...acc,
            x: acc.x + Number(direction.slice(1)),
            heading: "E",
          };
        } else if (acc.heading === "E") {
          return {
            ...acc,
            y: acc.y - Number(direction.slice(1)),
            heading: "S",
          };
        } else if (acc.heading === "S") {
          return {
            ...acc,
            x: acc.x - Number(direction.slice(1)),
            heading: "W",
          };
        } else if (acc.heading === "W") {
          return {
            ...acc,
            y: acc.y + Number(direction.slice(1)),
            heading: "N",
          };
        } else {
          throw new Error(`Invalid heading: ${acc.heading}`);
        }
      } else {
        throw new Error(`Invalid direction: ${direction}`);
      }
    },
    { x: 0, y: 0, heading: "N" },
  );
  return Math.abs(hq.x + hq.y);
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
