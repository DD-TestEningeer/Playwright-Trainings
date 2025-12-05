

const { test, expect } = require('@playwright/test');

test('handle link-triggered popup', async ({ page }) => {
  // Navigate to the demo page
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  // Click on the "Links" section link
  await page.getByRole('link', { name: 'Links' }).click();
  // Prepare to wait for the popup (new tab/window)
  const page1Promise = page.waitForEvent('popup');
  // Click the external link that opens a new window
  await page.getByRole('link', { name: 'External Link' }).click();
  // Wait for the popup page to load
  const page1 = await page1Promise;
  // Verify the popup heading is visible
  await expect(page1.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  // Verify the popup heading contains the expected text
  await expect(page1.getByRole('heading')).toContainText('Example Domain');
});

