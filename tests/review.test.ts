import { expect, test } from "@playwright/test";

test(`user can post review for product`, async ({ page }) => {
  await page.goto("https://shopdemo-alex-hot.koyeb.app/register");

  await page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email")
    .fill(`test+${Date.now()}@test.com`);

  await page.getByPlaceholder("Please Enter Your First Name").fill("test");

  await page.getByPlaceholder("Please Enter Your Last Name").fill("test");

  await page.getByPlaceholder("Please Enter Your Password").fill("xotabu4@gmail.com");
  await page.getByRole("button", { name: "Sign Up" }).click();

  await page.waitForTimeout(2000); // wait for the user to be created
    
  await page.goto(
    "https://shopdemo-alex-hot.koyeb.app/product/cherry-tomatoes"
  );

  await page.getByPlaceholder("Enter Review title").fill("review title");
  await page.getByPlaceholder("Write Review").fill("review comment");
  await page.locator('.react-stars [data-index="4"] .fa-star').click();

  await page.getByRole("button", { name: "Publish Review" }).click();
  await expect(page.locator(".notification-title")).toHaveText(
    "Your review has been added successfully and will appear when approved!"
  );
});
