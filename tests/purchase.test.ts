import { test, expect, Page } from "@playwright/test";

const doLogin = async (page: Page, email: string, password: string) => {
  await page.getByRole("link", { name: "Welcome! " }).click();
  await page.getByRole("menuitem", { name: "Login" }).click();
  await page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email")
    .fill(email);
  await page.getByPlaceholder("Please Enter Your Password").fill(password);
  await page.getByPlaceholder("Please Enter Your Password").press("Enter");
};

test("User can buy product", async ({ page }) => {
  await page.goto("/");
  await doLogin(page, "xotabu4@gmail.com", "xotabu4@gmail.com");

  await page.getByRole("link", { name: "MERN Store" }).click();
  await page.getByRole("link", { name: "Brands " }).click();
  await page.getByRole("menuitem", { name: "Nizhyn cannery" }).click();
  await page.getByRole("link", { name: "CHERRY TOMATOES By Nizhyn" }).click();

  await page.getByRole("button", { name: "Add To Bag" }).click();
  await page.getByRole("button", { name: "Place Order" }).click();

  await expect(
    page.locator("h2", { hasText: "Thank you for your order." })
  ).toBeVisible();
});
