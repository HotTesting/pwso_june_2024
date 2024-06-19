import { AppComponent } from "../appComponent";

export class Products extends AppComponent {
  async selectProductByName(name: string) {
    await this.page.getByRole("link", { name }).click();
  }
  async open(path = "/shop/brand/Nizhyn") {
    await this.page.goto(path);
  }
}
