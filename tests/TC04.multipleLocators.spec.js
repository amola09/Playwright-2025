const {test,expect} = require('@playwright/test')

test('Verify Multiple Locator in Playwright:',async function ({page}) {

    await page.goto('https://www.demoblaze.com/index.html')

    const links = await page.$$('//a')

    for(let el of links){
        let linkText = await el.textContent()

        console.log(linkText.trim())
    }

    
    await page.waitForSelector('[id="tbodyid"] > div > div > div > h4 > a')

    const products = await page.$$('[id="tbodyid"] > div > div > div > h4 > a')
    let count = await page.locator('[id="tbodyid"] > div > div > div > h4 > a')
    console.log(`product count ${count}`)

    for(let product of products){
        let productName = product.textContent()
        console.log(`product name is:${productName}`)
    }
    await page.waitForTimeout(3000)
})