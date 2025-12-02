
import {test} from '@playwright/test'


test('User Actions on the web elements ', async({page})=>{

// open the url 
await page.goto('https://dd-demo-tau.vercel.app/web_elements.html')

// anchor tag - actions 
  await page.locator('//nav[@id="sideMenu"]//a[@href="#1-text-input"]').click()


// textbox with css selector and perform the user actions 

await page.locator('#textInputField').clear()

await page.locator('#textInputField').fill("Test")

await page.locator('#textInputField').click()

// anchor tag for radio button 
await page.locator('[href="#5-radio"]').click()

await page.locator('#maleRadio').check()


}





)