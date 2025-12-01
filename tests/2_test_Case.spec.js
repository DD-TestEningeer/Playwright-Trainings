const { test, expect } = require('@playwright/test');

test('Verify page title of example.com', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    console.log('Page Title:', title);
    expect(title).toBe('Example Domain');
});