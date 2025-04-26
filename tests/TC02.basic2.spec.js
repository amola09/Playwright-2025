//import {test,expect} from "@playwright/test"

const {test,expect} = require("@playwright/test")

test("TC02-Verify login functionality from demoblaze:", async function({page}) {

    /// AAA

    //Arrangements

    await page.goto('https://www.demoblaze.com/')

    //Actions
    const pageTitle = await page.title()

    console.log(`page title${pageTitle}`)
    console.log(await page.title())

    await expect(page).toHaveTitle("STORE")

    //Assertions
    const pageUrl = await page.url()
    console.log(pageUrl)

    await expect(page).toHaveURL('https://www.demoblaze.com/')
    
})