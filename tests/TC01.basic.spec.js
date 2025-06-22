import {test,expect} from "@playwright/test"

test('TC01: Verify Title and url of web page:',async function({page}){
    

    //AAA -> Arrangements, Actions, Assertions

    //Arrangements
    await page.goto('https://www.demoblaze.com/')

    //Actions
    const pageTitle = await page.title()
    
    //Assertion

    await expect(pageTitle).toEqual("STORE")

    await expect(page).toHaveTitle("STORE")

    await expect(page).toHaveURL("https://www.demoblaze.com/")
})
//npx playwright test TC01.basic.spec.js --headed --project chromium  