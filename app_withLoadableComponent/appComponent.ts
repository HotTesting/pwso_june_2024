import { type Page } from "@playwright/test";

export abstract class AppComponent {
  constructor(protected page: Page) {}
}
