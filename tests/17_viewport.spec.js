

import { test, expect } from '@playwright/test';

test('Viewport demo', async ({ page }) => {

    // open the home page url
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');

  await page.waitForTimeout(10000)

  
});