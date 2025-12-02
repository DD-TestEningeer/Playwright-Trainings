


import { test } from "@playwright/test"

// test case 
test("Locators Demo - Mixed ", async({page})=>{

// test steps 

// Open the url 
// await page.goto('https://dd-demo-tau.vercel.app/login.html')

// Find the register button and click on it 
// await page.getByText('Register').click()

// Find the element with getByLabel()
// await page.getByLabel('Email/Username:')
// await page.getByLabel('Password:')

// Navigate to the page https://dd-demo-tau.vercel.app/web_elements.html 

await page.goto('https://dd-demo-tau.vercel.app/web_elements.html')

// Find the element with getByPlaceholder()
// await page.getByPlaceholder('Type something').screenshot('test')

// Find the element with getByAltText 
// await page.getByAltText('Sample Image').click()

// Find the element with getByTitle
// await page.getByTitle('Sample iframe').click()


// Find the element with data-testid 
// <button data-testid="submit-btn">Submit</button>	
await page.getByTestId('submit-btn')


})