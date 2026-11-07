import { test, expect } from "../fixtures/test";
import { getValidUser } from "../testData/users";

test("user can login with correct credentials", async ({ page, loginPage }) => {
  const { email, password } = getValidUser();
  await loginPage.login(email, password);
  await expect(page).not.toHaveURL(loginPage.url);
  await expect(loginPage.loginButton).not.toBeVisible();
});

test("user can not login with incorrect credentials", async ({ loginPage }) => {
  await loginPage.login("d emo@example.com", "demo1234");
  await expect(loginPage.loginButton).toBeVisible();
  await expect(loginPage.userEmailInputError).toContainText("Please enter a valid email address");
});
