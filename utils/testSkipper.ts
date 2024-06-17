import test from "@playwright/test";

export const skipIfWebkit = (message = "Not supported for safari") => {
  test.skip(() => test.info().project.name.includes("safari"), message);
};

export const skipIfMobile = (message = "Not supported for safari") => {
  test.skip(() => test.info().project.name.includes("mobile"), message);
};
