import { expect } from "@playwright/test";
import { AppComponent } from "../appComponent";
import { LoadableComponent } from "../IloadableComponent";

export class Home extends AppComponent implements LoadableComponent {
  async open() {
    await this.page.goto("/");
  }

  async expectLoaded() {
    await expect(
      this.page.locator(".homepage .home-carousel"),
      "Home page is not loaded"
    ).toBeVisible();
  }

  async openLoginPage() {
    await this.page.getByRole("link", { name: "Welcome! " }).click();
    await this.page.getByRole("menuitem", { name: "Login" }).click();
  }
}
