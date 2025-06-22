import {test,expect} from '@playwright/test'

test('TC14: Verify Hidden dropdown in playwright:', async function({page}){

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.fill('[placeholder="Username"]','Admin')
    await page.fill('[placeholder="Password"]','admin123')
    await page.click('[type="submit"]')

    await page.getByText('PIM').click()

    await page.locator('[class="oxd-select-text--after"]').nth(2).click()
    
    let jobText = await page.$$('[role="listbox"] >  [role="option"] > span')
    await page.waitForTimeout(3000)
    for(let el of jobText){
        let text1 = await el.textContent()
        console.log(text1)
    }
    await page.locator('div[data-v-d130bb63]>span[data-v-13cf171c]').nth(1).click()
    await page.waitForTimeout(5000)
})


//npx playwright test TC14.hiddenDropdown.spec.js -- headed --project chormium 