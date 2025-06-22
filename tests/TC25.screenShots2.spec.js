const { test, expect } = require('@playwright/test')

test("TC25: Verify basic locators in playwright", async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]', 'Amola')
    await page.fill('[id="loginpassword"]', 'amola123')
    await page.waitForTimeout(3000)

    await page.click('[onclick="logIn()"]')
    
    await page.waitForTimeout(3000)
    const logOutTxt = await page.locator('[id="logout2"]')

    await expect(logOutTxt).toBeVisible()

    const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain('Amola')
     await page.waitForTimeout(3000)

})

// npx playwright test TC25.screenShots2.spec.js -- headed --project chormium 