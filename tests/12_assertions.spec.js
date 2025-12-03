

import { expect, test } from "@playwright/test";

test("Assertions Demo", async ({ page }) => {


  // page navigation  
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


  // find the header with text Login 

  const headerElement = await page.locator('h5')

  await expect(headerElement).toHaveText('Login')



});