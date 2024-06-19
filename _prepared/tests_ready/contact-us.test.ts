import { randomUUID } from "node:crypto";
import { shopTest } from "../../fixture";

shopTest("can submit contact us form", async ({ app }) => {
  await app.contactus.open();
  await app.contactus.submitContactUsForm({
    email: `xotabu4+${randomUUID()}@gmail.com`,
    fullName: "test name",
    message: "test message",
  });
  // TODO: add success popup appears expectation
});
