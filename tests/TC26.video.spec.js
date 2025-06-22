import {test,expect} from '@playwright/test'

test('TC26: Verify video functionality in playwright:',async function({page}){
    
    await page.goto('https://demoblaze.com/')

    await page.locator('[id="login2"]').click()

    await page.locator('[id="loginusername"]').fill('Amola')
    await page.locator('[id="loginpassword"]').fill('amola@123')

    await page.locator('[onclick="logIn()"]').click()

    let logoutBtn = await page.locator('[id="logout2"]')
    await expect(logoutBtn).toBeVisible()

    await page.setDefaultTimeout(3000)

})

//https://playwright.dev/docs/videos
//npx playwright test TC26.video.spec.js -- headed --project chormium
// for default video and screenshot
//     screenshot : 'on',
//     video: 'on'

//for on failure
    // screenshot : 'only-on-failure',
    // video: 'retain-on-failure'