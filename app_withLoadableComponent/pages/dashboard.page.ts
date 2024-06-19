import { expect } from "@playwright/test";
import { AppComponent } from "../appComponent";
import { LoadableComponent } from "../IloadableComponent";

export class Dashboard extends AppComponent implements LoadableComponent {
  async open() {
    await this.page.goto("/dashboard");
  }

  async expectLoaded() {
    await expect(
      this.page.locator(".admin .account"),
      "Dashboard page is not loaded"
    ).toBeVisible();
  }
}
