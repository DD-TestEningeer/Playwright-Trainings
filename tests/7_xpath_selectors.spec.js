






import {test} from '@playwright/test'


test('Verify the User login with valid details', async({page})=>{

// open the url 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// find the username field 
await page.locator('//input[@name="username"]').fill('Admin')

// find the password field
await page.locator('//input[@name="password"]').fill('admin123')

// find the login button
await page.locator('//button[@type="submit"]').click()

}





)