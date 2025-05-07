import {test,expect} from "@playwright/test"


test('TC08- Verify Radio buttons on testautomationpractice',async({page})=>{
    //AAA
    //Arrangment
     await page.goto('https://testautomationpractice.blogspot.com/')
    //Action and Assertion

    await page.fill('#name','Amol')
    //await page.locator('#name').fill('Amol')
    await page.fill('#email', 'amoldeshmukh@gmail.com')
    await page.fill('#phone', '9722553322')
    await page.fill('#textarea', 'hello')

     //radio buttons
     let male = await page.locator('#male')
     await expect(male).not.toBeChecked()
     await male.check()
     await expect(male).toBeChecked()
     await expect(male.isChecked()).toBeTruthy()
 
     expect(await page.locator('//*[@id="female"]').isChecked()).toBeFalsy()
     await page.waitForTimeout(3000)

    
})