import { test, expect } from '@playwright/test';
import { getgroups } from 'process';


// Test Case 
test('Video Demo', async ({ page }) => {

    // open the home page url
  await page.goto('https://playwright.dev/');

  // verify the home page "Get started" element text
  
  const getStartedElement = await page.locator('.getStarted_Sjon')

  await expect(getStartedElement).toHaveText('Ended')

  await page.waitForTimeout(10000)


  
});