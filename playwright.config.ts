import "dotenv/config";
import { env } from "./env";
import { defineConfig, devices } from "@playwright/test";
import { Tag } from "./tags";

// const projectsAll = [
//   {
//     name: "chromium",
//     use: {
//       ...devices["Desktop Chrome"],
//     },
//   },
//   {
//     name: "firefox",
//     use: {
//       ...devices['Desktop Firefox'],
//     },
//   },
//   {
//     name: "safari",
//     // grepInvert: new RegExp(Tag.NotForSafari),
//     use: {
//       ...devices['Desktop Safari'],
//     },
//   },
// ];

// const projects: any  = [
//   ...projectsAll.map(p => {
//     p.name = `smoke-${p.name}`;
//     // @ts-ignore
//     p.grep = new RegExp(Tag.Smoke);

//     return p;
//   }),
//   ...projectsAll,
// ]

// console.log(projects)

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: "90%",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["list", {
      printSteps: true,
    }],
    // [
    //   "monocart-reporter",
    //   {
    //     name: "My Test Report",
    //     outputFile: "./test-results/report.html",
    //   },
    // ],
    ["html"]
  ],
  use: {
    baseURL: env.FRONTEND_URL,
    headless: process.env.CI ? true : false,
    trace: 'on',
    screenshot: 'only-on-failure',
  },
  globalSetup: require.resolve("./globalSetup.ts"),
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "precondition-safari",
      testDir: "precondition",
      testMatch: "safari.precondition.ts",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "teardown-safari",
      testDir: "precondition",
      testMatch: "safari.precondition.ts",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      dependencies: ["precondition-safari"],
      teardown: "teardown-safari",
      name: "safari",
      grepInvert: new RegExp(Tag.NotForSafari),
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
