import { shopTest } from "../fixture";

shopTest.skip(
  "Shop response can be mocked",
  async ({ app, page, newAdminUser }) => {
    await page.route("**/api/product/list**", async (route) => {
      if (route.request().method() === "GET") {
        route.fulfill({
          json: {
            products: [
              {
                _id: "64e106888e01260021ea480c",
                taxable: false,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "CHERRY_TOMATOES",
                name: "CHERRY TOMATOES",
                description:
                  "cherry tomatoes, salt, sugar, greens, acetic acid, garlic, spices",
                quantity: 98720,
                price: 95,
                created: "2023-08-19T18:14:32.255Z",
                slug: "cherry-tomatoes",
                __v: 0,
                isLiked: false,
                totalRatings: 2045,
                totalReviews: 410,
                averageRating: 4.987804878048781,
              },
              {
                _id: "64e105d58e01260021ea480b",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "MARINATED_SWEET_PEPPER_SLICED",
                name: "MARINATED SWEET PEPPER (SLICED)",
                description:
                  "sweet pepper, salt, sugar, acetic acid, garlic, spices",
                quantity: 0,
                price: 75,
                created: "2023-08-19T18:11:33.920Z",
                slug: "marinated-sweet-pepper-sliced",
                __v: 0,
                totalRatings: 3,
                totalReviews: 1,
                averageRating: 3,
              },
              {
                _id: "64c4fdd89bb0c600219b4280",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "MARINATED_CUCUMBERS_NEZHIN_STYLE",
                name: "MARINATED CUCUMBERS NEZHIN STYLE",
                description:
                  "COMPOSITION: cucumbers, greens, salt, sugar, acetic acid, garlic, spices",
                quantity: 999617,
                price: 120,
                created: "2023-07-29T11:54:00.642Z",
                slug: "MARINATED_CUCUMBERS_NEZHIN_STYLE",
                __v: 0,
                totalRatings: 0,
                totalReviews: 0,
                averageRating: 0,
              },
              {
                _id: "64bbbc98e9d7a367fcb1d463",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "SWEET_PEPPER_PASTE",
                name: "SWEET PEPPER PASTE",
                description:
                  "sweet pepper, carrot, tomato paste, sunflower oil, sugar, wheat flour, greens, spices",
                quantity: 999940,
                price: 100,
                created: "2023-07-22T11:25:12.046Z",
                slug: "SWEET_PEPPER_PASTE",
                __v: 0,
                totalRatings: 0,
                totalReviews: 0,
                averageRating: 0,
              },
              {
                _id: "64e106888e01260021ea480c",
                taxable: false,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "CHERRY_TOMATOES",
                name: "CHERRY TOMATOES",
                description:
                  "cherry tomatoes, salt, sugar, greens, acetic acid, garlic, spices",
                quantity: 98720,
                price: 95,
                created: "2023-08-19T18:14:32.255Z",
                slug: "cherry-tomatoes",
                __v: 0,
                isLiked: false,
                totalRatings: 2045,
                totalReviews: 410,
                averageRating: 4.987804878048781,
              },
              {
                _id: "64e105d58e01260021ea480b",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "MARINATED_SWEET_PEPPER_SLICED",
                name: "MARINATED SWEET PEPPER (SLICED)",
                description:
                  "sweet pepper, salt, sugar, acetic acid, garlic, spices",
                quantity: 0,
                price: 75,
                created: "2023-08-19T18:11:33.920Z",
                slug: "marinated-sweet-pepper-sliced",
                __v: 0,
                totalRatings: 3,
                totalReviews: 1,
                averageRating: 3,
              },
              {
                _id: "64c4fdd89bb0c600219b4280",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "MARINATED_CUCUMBERS_NEZHIN_STYLE",
                name: "MARINATED CUCUMBERS NEZHIN STYLE",
                description:
                  "COMPOSITION: cucumbers, greens, salt, sugar, acetic acid, garlic, spices",
                quantity: 999617,
                price: 120,
                created: "2023-07-29T11:54:00.642Z",
                slug: "MARINATED_CUCUMBERS_NEZHIN_STYLE",
                __v: 0,
                totalRatings: 0,
                totalReviews: 0,
                averageRating: 0,
              },
              {
                _id: "64bbbc98e9d7a367fcb1d463",
                taxable: true,
                isActive: true,
                brand: {
                  name: "Nizhyn cannery",
                  _id: "64bbbc91e9d7a367fcb1d462",
                  isActive: true,
                },
                sku: "SWEET_PEPPER_PASTE",
                name: "SWEET PEPPER PASTE",
                description:
                  "sweet pepper, carrot, tomato paste, sunflower oil, sugar, wheat flour, greens, spices",
                quantity: 999940,
                price: 100,
                created: "2023-07-22T11:25:12.046Z",
                slug: "SWEET_PEPPER_PASTE",
                __v: 0,
                totalRatings: 0,
                totalReviews: 0,
                averageRating: 0,
              },
            ],
            totalPages: 1,
            currentPage: 1,
            count: 8,
          },
        });
      } else {
        await route.continue();
      }
    });

    await app.shop.open();
    console.log("Shop page is opened");
  }
);

shopTest("Set cookies", async ({ app, page, context }) => {
  await context.addCookies([
    {
      name: "test",
      value: "test",
      domain: "httpbin.org",
      path: "/",
    },
  ]);

  await page.goto("https://httpbin.org/cookies");
  console.log("test");
});
