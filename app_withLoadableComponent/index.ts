
import { AppComponent } from "./appComponent";
import { Confirmation } from "./pages/confirmation.page";
import { Dashboard } from "./pages/dashboard.page";
import { Home } from "./pages/home.page";
import { Login } from "./pages/login.page";
import { Product } from "./pages/product.page";
import { Products } from "./pages/products.page";

export class Application extends AppComponent {
  home = new Home(this.page);
  login = new Login(this.page);
  products = new Products(this.page);
  product = new Product(this.page);
  confirmation = new Confirmation(this.page);
  dashboard = new Dashboard(this.page)
}
