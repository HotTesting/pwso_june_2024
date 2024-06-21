import { test, expect } from "@playwright/test";
import { skipIfWebkit } from "../utils/testSkipper";
import { Tag } from "../tags";
import { randomUUID } from "node:crypto";
import { shopTest } from "../fixture";
import { globalBeforeEach } from "../fixture/globalBeforeEach";

skipIfWebkit();

globalBeforeEach();

shopTest("can submit contact us form", async ({ app: { contactus }, page }) => {
  await contactus.open();
  await contactus.submitContactUsForm({
    email: `xotabu4+${randomUUID()}@gmail.com`,
    fullName: "test name",
    message: "test message",
  });
  await expect(
    page.getByPlaceholder("Please Describe Your Message")
  ).toBeEmpty();
});

test(
  "User can submit contact us form",
  {
    annotation: [{ type: "JIRA", description: "http://jira.com/CS-1232132" }],
    tag: [Tag.NotForSafari, Tag.Smoke],
  },
  async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact Us" }).first().click();

    await page.getByPlaceholder("You Full Name").fill("test");
    await page
      .getByPlaceholder("Your Email Address")
      .fill(`test+${Date.now()}@test.com`);
    await page
      .getByPlaceholder("Please Describe Your Message")
      .fill(
        "Hello there! I eat tomatoes every day. Why your cannery is so good?"
      );

    shopTest
      .info()
      .annotations.push({ type: "VIDEO_SESSION_ID", description: "123123" });
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByPlaceholder("Please Describe Your Message")
    ).toBeEmpty();
  }
);
