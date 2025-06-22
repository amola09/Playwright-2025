//import {test,expect} from "@playwright/test"

const {test,expect} = require('@playwright/test')

test('TC03-Verify Login Functionality',async function ({page}){
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('[id="login2"]').click()
    await page.locator('[id="loginusername"]').fill('Amola')
    await page.locator('[id="loginpassword"]').fill('amola123')
    await page.waitForTimeout(3000)
    await page.locator('[onclick="logIn()"]').click()

    const logoutText = await page.locator('[id="logout2"]')

    await expect(logoutText).toHaveText('Log out')

    
    // //Type - 2
    await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]','Amola')
    await page.fill('[id="loginpassword"]','amola123')

    await page.waitForTimeout(3000)

    await page.click('[onclick="logIn()"]')

    await page.waitForTimeout(3000)
    const logOutTxt = await page.locator('[id="logout2"]')

    await expect(logOutTxt).toBeVisible()

    const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain('Amola')
    await page.waitForTimeout(3000)
})


//npx playwright test TC03.basicLocator.spec.js --headed --project chromium



