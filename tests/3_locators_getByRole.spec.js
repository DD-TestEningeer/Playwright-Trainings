

import { test } from "@playwright/test"

// test case 
test("Locators Demo", async({page})=>{

// test steps 

// Open the url 
await page.goto('https://dd-demo-tau.vercel.app/web_elements.html')

// Click on the buttons link 
await page.getByRole('link', { name: '12. Buttons' }).click()

// Click on the 'Click Me' button
// await page.getByRole('button', {name:'Click Me'}).click()



})




test ("Login Demo", async ({page})=>{

// open login page 
await page.goto('https://dd-demo-tau.vercel.app/login.html')

// Find the login page header text element 
await page.getByRole('heading', {name : 'Login Page'})

// find the email/username field 
await page.getByRole('textbox', {name : 'username'}).fill('demoUser')

// find the password field
await page.getByRole('textbox', {name : 'password'}).fill('Demo@123')

// find Login button 
await page.getByRole('button', {name : 'Login'}).click()



})