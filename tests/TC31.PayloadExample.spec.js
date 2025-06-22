import { expect, test } from "@playwright/test";
import data from "../Payload/dataForFile.json"

data.forEach((el, index) => {
    test(`TC31: Verify payload in playwright for user ${index + 1}:`, async ({ page }) => {
        // console.log(data)  data [0].username ,el.username
        await page.goto('https://www.demoblaze.com/index.html')
        await page.click('#login2')
        await page.fill('#loginusername', el.username)
        await page.fill('#loginpassword', el.password)
        await page.click('[onclick="logIn()"]')
        await page.waitForTimeout(3000)
        await expect(page.locator('#logout2')).toBeVisible()
        await expect(page.locator('#nameofuser')).toContainText(el.username)
        await page.waitForTimeout(3000)

    })
})