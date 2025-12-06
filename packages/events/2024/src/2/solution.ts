export function part1(input: string) {
  const lines = input.split("\n");

  const safe = lines.reduce((acc, line) => {
    const report = line.split(" ").map(Number);
    let state = "";
    for (let i = 0; i < report.length; i++) {
      const current = report[i]!;
      const next = report[i + 1]!;

      if (current === next) {
        return acc;
      }

      if (Math.abs(next - current) > 3) {
        return acc;
      }

      if (next > current) {
        const previousState = state;
        state = "increasing";
        if (previousState === "decreasing") {
          return acc;
        }
      }

      if (next < current) {
        const previousState = state;
        state = "decreasing";
        if (previousState === "increasing") {
          return acc;
        }
      }
    }
    return acc + 1;
  }, 0);

  return safe;
}

export function part2(input: string) {
  function isSafe(report: number[]) {
    let state = "";
    for (let i = 0; i < report.length; i++) {
      const current = report[i]!;
      const next = report[i + 1]!;

      if (current === next) {
        return false;
      }

      if (Math.abs(next - current) > 3) {
        return false;
      }

      if (next > current) {
        const previousState = state;
        state = "increasing";
        if (previousState === "decreasing") {
          return false;
        }
      }

      if (next < current) {
        const previousState = state;
        state = "decreasing";
        if (previousState === "increasing") {
          return false;
        }
      }
    }
    return true;
  }

  const lines = input.split("\n");
  const safe = lines.reduce((acc, line) => {
    const report = line.split(" ").map(Number);
    for (let i = 0; i < report.length; i++) {
      const newReport = [...report];
      newReport.splice(i, 1);
      if (isSafe(newReport)) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);

  return safe;
}
