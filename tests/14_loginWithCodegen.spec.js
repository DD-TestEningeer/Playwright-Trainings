import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Test login');
  await expect(page.locator('h2')).toMatchAriaSnapshot(`- heading "Test login" [level=2]`);
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
});