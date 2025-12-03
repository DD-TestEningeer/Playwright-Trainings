import { expect, test } from "@playwright/test";

test("Verify the login with assertions", async ({ page }) => {
  // page navigation
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // find the header with text Test login
  const headerElement = await page.getByText("Test login");

  // assert for the text of header element
  await expect(headerElement).toHaveText("Test login");

  // find the username field and check for element visibility
  const usernameInput = await page.locator("#username");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("student");

  // find the password field and check for element visibility
  const passwordInput = await page.locator("#password");
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill("Password123");

  //  driver.findElement(By.xpath('//h')).sendKeys('demo')
  // WebElement username = driver.findElement(By.xpath('//h'))
  // username.sendKeys('demo')

  // find the submit button and check for element visibility

  const submitButton = await page.locator("#submit");
  await expect(submitButton).toBeVisible();
  await submitButton.click();


  // After login success check for message "Logged In Successfully"

  const successMessage = await page.locator('.post-title')
  await expect(successMessage).toHaveText('Logged In Successfully')

});
