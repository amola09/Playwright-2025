import {test,expect} from "@playwright/test"

test('TC13: Verify autosugeestive dropdoen on redbus:',async function({page}){

    await page.goto('https://www.redbus.in/')
    
    await page.locator('input[id="src"]').fill('nag')
    await page.waitForSelector('ul > li.sc-iwsKbI >div >text.placeHolderMainText')
    let fromOptions = await page.$$('ul > li.sc-iwsKbI >div >text.placeHolderMainText')

    for(let opn of fromOptions){
        //console.log(await opn.textContent())
       let opnText = await opn.textContent()
        if(opnText=='Chatrapathi'){
            await opn.click()
            break;
        }

    }

    await page.waitForTimeout(3000)
})
//

//npx playwright test TC13.autoSuggestiveDopdown.spec.js --headed --project chromium