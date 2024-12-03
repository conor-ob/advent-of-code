# Advent of Code

## Setup

### Generate new advent calendar

Example year 2024:

```sh
pnpm codegen
```

```sh
? Select generator to run   year: create a new advent of code project
? What is the year of the new project? 2024
>>> Changes made:
  • 3 files added
 -> /packages/events/2024/eslint.config.js
 -> /packages/events/2024/package.json
 -> /packages/events/2024/tsconfig.json (addMany)
  • 3 files added
 -> /packages/events/2024/src/1/input.txt
 -> /packages/events/2024/src/1/solution.test.ts
 -> /packages/events/2024/src/1/solution.ts (addMany)
```

### Generate code for a day

Example year 2024 day 1:

```sh
pnpm codegen
```

```sh
? Select generator to run   day: create a new daily puzzle
? What is the year of the new puzzle? 2024
? What is the day of the new puzzle? 1
>>> Changes made:
  • 3 files added
 -> /packages/events/2024/src/1/input.txt
 -> /packages/events/2024/src/1/solution.test.ts
 -> /packages/events/2024/src/1/solution.ts (addMany)
```

## Development

### Start development on a single day with hot reloading

Example year 2024 day 1:

```sh
pnpm dev 2024 1
```
