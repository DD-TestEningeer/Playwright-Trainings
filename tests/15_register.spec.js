import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/register');
  await expect(page.getByText('Username')).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('DemoUser1234');
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test1234');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test1234');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('#flash')).toContainText('Successfully registered, you can log in now.');
});