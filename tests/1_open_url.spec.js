// import statement
import { test } from "@playwright/test";

// test case 1
test("Test Case 1 - Open the url", async ({ page }) => {
  // test steps

  // page => as reference for calling respective methods
  // goto() => is used for page navigation
  await page.goto("https://dd-demo-tau.vercel.app/register.html");
});
