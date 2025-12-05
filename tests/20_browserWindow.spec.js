import { test, expect } from "@playwright/test";
import { getgroups } from "process";

// // Test Case
// test('Window Popup Demo', async ({ page }) => {

//     // open the home page url
//   await page.goto('https://dd-demo-tau.vercel.app/index.html');

//     // await page.waitForTimeout(5000)

//   // click on the register button to open the new window in side tab
//     await page.locator('[href="register.html"]').click()

//     await page.waitForTimeout(10000)

// });

test("Windows Pop-up", async ({ page }) => {
  // page navigation to the homepage
  await page.goto("https://dd-demo-tau.vercel.app/index.html");

  // Check for the register button visibility
  await expect(page.getByRole("link", { name: "Register" })).toBeVisible();

  // user action event
  const page1Promise = page.waitForEvent("popup");

  // click on the register button
  await page.getByRole("link", { name: "Register" }).click();

  // page1 instance
  const page1 = await page1Promise;

  // new window/tab
  const registerFormElement = page1.getByRole("heading", {
    name: "Register Form",
  });
  await expect(registerFormElement).toBeVisible();
});

test("Test Case 2 - For popup", async ({ page }) => {
  // Home page navigation
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Click on the link from same

  const page2Promise = page.waitForEvent("popup");
  await page.locator('[href="http://www.orangehrm.com"]').click();

  const page2 = await page2Promise;

  const headerElement = await page2.locator(
    '//h1[contains(text(),"Streamline All Your HR Needs on One")]'
  );
  await expect(headerElement).toContainText("Streamline All Your HR");

  await page.waitForTimeout(5000)
});
