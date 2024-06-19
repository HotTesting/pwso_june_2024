import { AppComponent } from "../appComponent";

export class Login extends AppComponent {
  async doLogin(email: string, password: string) {
    await this.page
      .getByRole("main")
      .getByPlaceholder("Please Enter Your Email")
      .fill(email);
    await this.page
      .getByPlaceholder("Please Enter Your Password")
      .fill(password);
    await this.page
      .getByPlaceholder("Please Enter Your Password")
      .press("Enter");
  }
}
