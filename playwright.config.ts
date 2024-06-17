/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 * require('dotenv').config();
 */
// import 'dotenv/config'
import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["list"],
    ["html"],
  ],
  use: {
    baseURL: "https://shopdemo-alex-hot.koyeb.app",
    headless: process.env.CI ? true : false,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
