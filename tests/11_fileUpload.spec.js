import { test } from "@playwright/test";

test("File Upload Test 1", async ({ page }) => {


  // page navigation  
  await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

  // find the file upload element and click on it
  await page.locator('[href="#9-file-upload"]').click()

  // find the choose file element 

  await page.locator('#fileUploadField').setInputFiles('testData.txt')



});



// https://the-internet.herokuapp.com/upload

test("File Upload Test 2", async ({ page }) => {


  // page navigation  
  await page.goto("https://the-internet.herokuapp.com/upload");

  // find the file upload element and upload the file 
  await page.locator('#file-upload').setInputFiles('testData.txt')

  // click on the upload button 
  await page.locator('#file-submit').click()





});
