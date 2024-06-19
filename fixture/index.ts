import { test } from "@playwright/test";
import { randomUUID } from "crypto";
import { UserCreateRequest, UserCreatedResponse } from "../_prepared/api/models";
import { Application } from "../app";

interface UserContext {
  userModel: UserCreateRequest;
  createdUser: UserCreatedResponse;
}

export const shopTest = test.extend<{
  app: Application;
  newUser: UserContext;
  itemAddedInCart: {
    itemsInCart: { slug: string }[];
  };
  testOptions: {
    itemsToAddInCart: { slug: string; quantity?: number }[];
  };
}>({
  testOptions: [
    {
      itemsToAddInCart: [
        {
          slug: "cherry-tomatoes",
        },
      ],
    },
    {
      option: true,
    },
  ],

  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },

  newUser: async ({ app }, use) => {
    const userModel = {
      isSubscribed: false,
      email: `test+${randomUUID()}@test.com`,
      firstName: "test",
      lastName: "test",
      password: "xotabu4@gmail.com",
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin(userModel);
    await app.home.open();

    await use({ userModel, createdUser });
  },

  itemAddedInCart: async ({ app, testOptions }, use) => {
    for (const item of testOptions.itemsToAddInCart) {
      await app.product.open(`/product/${item.slug}`);
      if (item.quantity !== undefined) {
        await app.product.changeQuantity(item.quantity);
      }
      await app.product.addToBag();
    }
    await use({ itemsInCart: testOptions.itemsToAddInCart });
  },
});
