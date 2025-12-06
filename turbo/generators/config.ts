import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("day", {
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
            parseInt(input, 10) < 2015 ||
            parseInt(input, 10) > new Date().getFullYear()
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
          if (parseInt(input, 10) < 1 || parseInt(input, 10) > 25) {
            return "please enter a day between 1 and 25";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "addMany",
        destination:
          "{{ turbo.paths.root }}/packages/events/{{ year }}/src/{{ day }}",
        templateFiles: "templates/puzzle/**",
        base: "templates/puzzle",
      },
    ],
  });
  plop.setGenerator("year", {
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
          // if (
          //   parseInt(input) < 2015 ||
          //   parseInt(input) > new Date().getFullYear()
          // ) {
          //   return "please enter a valid year";
          // }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{ turbo.paths.root }}/packages/events/{{ year }}",
        templateFiles: "templates/package/**",
        base: "templates/package",
      },
      {
        type: "addMany",
        data: { day: 1 },
        destination:
          "{{ turbo.paths.root }}/packages/events/{{ year }}/src/{{ day }}",
        templateFiles: "templates/puzzle/**",
        base: "templates/puzzle",
      },
    ],
  });
}
