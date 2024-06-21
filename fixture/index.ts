import { test } from "@playwright/test";
import { randomUUID } from "crypto";
import {
  UserCreateRequest,
  UserCreatedResponse,
} from "../api/models";
import { Application } from "../app";
import { DB } from "../db";
import { CreateDBUser } from "../_prepared/db/models";

interface UserContext {
  userModel: UserCreateRequest;
  createdUser: UserCreatedResponse;
}

export const shopTest = test.extend<
  // test level
  {
    app: Application;
    newAdminUser: CreateDBUser;
    newUser: UserContext;
    itemAddedInCart: {
      itemsInCart: { slug: string }[];
    };
    testOptions: {
      itemsToAddInCart: { slug: string; quantity?: number }[];
    };
  },
  // worker level
  { db: DB }
>({
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

  db: [
    async ({}, use) => {
      const db = await DB.connect();
      await use(db);
      await db.close();
    },
    { scope: "worker" },
  ],

  newAdminUser: async ({ db, app }, use) => {
    const admin = await db.createAdminUser();
    await app.headlessLogin({ email: admin.email, password: "xotabu4@gmail.com" });
    await app.home.open();
    await use({...admin, password: "xotabu4@gmail.com"});
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
