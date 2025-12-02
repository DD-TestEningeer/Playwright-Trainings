


import {test} from '@playwright/test'


test('Verify the User login with valid details', async({page})=>{

// open the url 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// find the username field 
await page.getByPlaceholder('Username').fill('Admin')

// find the password field
await page.getByRole('textbox', {name : 'password'}).fill('admin123')

// find the login button
await page.getByRole('button', {name : 'Login'}).click()

}





)