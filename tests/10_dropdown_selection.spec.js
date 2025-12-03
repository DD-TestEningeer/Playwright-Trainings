


import {test} from '@playwright/test'


test('Dropdown test ', async({page})=>{

// open home page url 
await page.goto('https://dd-demo-tau.vercel.app/web_elements.html')

// click on the dropdown link
await page.locator('[href="#7-dropdown"]').click()

// find the dropdown element 

// select by value
await page.locator('#dropdownField').selectOption('BMW')

// select by visible text
await page.locator('#dropdownField').selectOption({ label: 'Tesla' })


// navigate to the multi-select options element

await page.locator('[href="#8-multiselect"]').click()

await page.locator('#multiSelectField').selectOption(['Apple', 'Mango'])


}





)