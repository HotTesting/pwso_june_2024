import { expect } from "@playwright/test";
import { AppComponent } from "../appComponent";

export class Confirmation extends AppComponent {
  expectOrderPlaced() {
    return expect(
      this.page.locator("h2", { hasText: "Thank you for your order." })
    ).toBeVisible();
  }
}
