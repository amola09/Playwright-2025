import { test, expect } from "@playwright/test"

test('TC11: Verify dropdown in playwright on testautomation', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors', ["Red", "Blue", "Yellow"])

    //action and assertion to count options
    let colorCount = await page.locator('#colors option')
    await expect(colorCount).toHaveCount(7)

    let colorCount2 = await page.$$('#colors option')
    await expect(colorCount2.length).toBe(7)

    // action and assertion to check presence of option

    let colorText = await page.locator('#colors').textContent()
    //console.log(colorText)
    await expect(colorText.includes('Red')).toBeTruthy()

    await expect(colorText.includes('Black')).toBeFalsy()

    //to print options with loop
    //yellow
    let colorCount3 = await page.$$('#colors option')
    for (let colors of colorCount3) {
        const colorTxt = await colors.textContent()
        console.log(`color options are : ${colorTxt}`)
    }
    await page.waitForTimeout(5000)

})


//npx playwright test TC11.multiselectdopdown.spec.js --headed --project chromium