
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  await page.getByRole('link', { name: 'Tables & Lists' }).click();
  await expect(page.getByRole('heading', { name: 'Tables & Lists' })).toBeVisible();
  await expect(page.locator('#sampleTable').getByRole('columnheader', { name: 'Name' })).toBeVisible();
  await expect(page.locator('#sampleTable').getByRole('columnheader', { name: 'Age' })).toBeVisible();
  await expect(page.locator('#sampleTable')).toContainText('John');
  await expect(page.locator('#sampleTable')).toContainText('28');
});