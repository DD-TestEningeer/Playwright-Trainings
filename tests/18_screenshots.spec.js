



import { test, expect } from '@playwright/test';

test('Screenshot demo', async ({ page }) => {

    // open the home page url
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');


  // capture the full screenshot 
  await page.screenshot({ path: 'FullPageScreenshot.png', fullPage: true });

 // element screenshot

 await page.locator('//section[@id="1-text-input"]').screenshot({ path: 'SectionElementScreenshot.png' });

  await page.waitForTimeout(10000)

  
});