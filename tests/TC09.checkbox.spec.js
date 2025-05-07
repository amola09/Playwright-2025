import {test,expect} from '@playwright/test'

test('TC09- Verify Checkboxes on testautomationpractice', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

        await page.locator('#sunday').click()
        await page.waitForTimeout(3000)
        await page.locator('#sunday').click()
        await page.waitForTimeout(3000)

    //check multiple check box
    const checkBoxes = [
        '#sunday',
        '#monday',
        '#tuesday',
        '#wednesday',
        '#thursday',
        '[id="friday"]',
        '//*[@id="saturday"]'
    ]

    for (let checkb of checkBoxes) {
        await page.check(checkb)
    }
    await page.waitForTimeout(3000)

    for(let cb of checkBoxes){
        if(await page.locator(cb).isChecked()){
            await page.uncheck(cb)
        }
    }
    await page.waitForTimeout(3000)
})