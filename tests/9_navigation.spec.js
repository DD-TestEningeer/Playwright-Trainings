
import {test} from '@playwright/test'


test('Page Navigation Test ', async({page})=>{

// open the url 
await page.goto('https://dd-demo-tau.vercel.app/register.html')


// click on the Login link
await page.getByText('Login').click()


// navigate back to the register page 
await page.goBack()


// navigate forward to the login page 
await page.goForward()


}





)