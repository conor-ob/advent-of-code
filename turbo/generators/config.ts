import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("New day", {
    description: "create a new daily puzzle",
    prompts: [
      {
        type: "input",
        name: "year",
        message: "What is the year of the new puzzle?",
        validate: (input: string) => {
          if (!input) {
            return "year is required";
          }
          if (
            parseInt(input) < 2015 ||
            parseInt(input) > new Date().getFullYear()
          ) {
            return "please enter a valid year";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "day",
        message: "What is the day of the new puzzle?",
        validate: (input: string) => {
          if (!input) {
            return "day is required";
          }
          if (parseInt(input) < 1 || parseInt(input) > 25) {
            return "please enter a day between 1 and 25";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/{{ day }}/input.txt",
        templateFile: "templates/input.txt.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/{{ day }}/solution.test.ts",
        templateFile: "templates/solution.test.ts.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/{{ day }}/solution.ts",
        templateFile: "templates/solution.ts.hbs",
      },
    ],
  });
  plop.setGenerator("New year", {
    description: "create a new advent of code project",
    prompts: [
      {
        type: "input",
        name: "year",
        message: "What is the year of the new project?",
        validate: (input: string) => {
          if (!input) {
            return "year is required";
          }
          if (
            parseInt(input) < 2015 ||
            parseInt(input) > new Date().getFullYear()
          ) {
            return "please enter a valid year";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/eslint.config.js",
        templateFile: "templates/eslint.config.js.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/1/input.txt",
        templateFile: "templates/input.txt.hbs",
      },
      {
        type: "add",
        data: { day: 1 },
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/1/solution.test.ts",
        templateFile: "templates/solution.test.ts.hbs",
      },
      {
        type: "add",
        data: { day: 1 },
        path: "{{ turbo.paths.root }}/packages/events/{{ year }}/src/1/solution.ts",
        templateFile: "templates/solution.ts.hbs",
      },
    ],
  });
}
