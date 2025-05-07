import { test, expect } from "@playwright/test"

test('TC12. Verify dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    await page.click('.btn-group')

    // to count options
    let options = await page.locator('ul > li >a > label >input')
    await expect(options).toHaveCount(11)

    let options2 = await page.$$('ul > li >a > label >input')
    await expect(options2.length).toBe(11)

    //to print options
    let options3 = await page.$$('ul > li >a > label')
    for (let opn of options3) {
        console.log(await opn.textContent())
    }

    // to find presence of option
    let status = false
    for (let opn of options3) {
        let optionName = await opn.textContent()
        if(optionName.includes(' MS SQL Server')){
            status=true
            break;
        }
    }
    await expect(status).toBeTruthy()

    await page.waitForTimeout(5000)

})