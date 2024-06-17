import { type FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  console.log("GlobalSetup!");
}

export default globalSetup;
