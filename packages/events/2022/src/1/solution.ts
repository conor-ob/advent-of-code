function part1(input: string) {
  const lines = input.split("\n");
  let maxCalories = 0;
  let currentCalories = 0;
  for (const line of lines) {
    if (line === "") {
      maxCalories = Math.max(maxCalories, currentCalories);
      currentCalories = 0;
    } else {
      const calories = parseInt(line);
      currentCalories += calories;
    }
  }
  return maxCalories;
}

function part2(input: string) {
  void input;
  return "TODO";
}

export { part1, part2 };
