import { AppComponent } from "../appComponent";

export class Product extends AppComponent {
  async placeOrder() {
    await this.page.getByRole("button", { name: "Place Order" }).click();
  }
  async addToBag() {
    await this.page.getByRole("button", { name: "Add To Bag" }).click();
  }
  async open(path: string) {
    await this.page.goto(path);
  }
}
