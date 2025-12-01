import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/register.html');
  await page.getByRole('textbox', { name: 'User Name:' }).click();
  await page.getByRole('textbox', { name: 'User Name:' }).fill('DDUser');
  await page.getByRole('textbox', { name: 'User Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email:' }).fill('DemoEmail@gmail.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Test@34');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Register' }).click();
});