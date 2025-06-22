import {test,expect} from '@playwright/test'

test("TC18: Verify datepicker in palywright: ",async function ({page}){

    // JS function for date

    let todaysDate = new Date()
    console.log(`Todays date is:${todaysDate}`)

    let tDate = todaysDate.getDate()
    console.log(`Todays date is:${tDate}`)

    let tMonth = todaysDate.getMonth()
    console.log(`Todays Month is:${tDate}`)

    let tMonthShort = todaysDate.toLocaleDateString('default',{month:'short'})
    console.log(`Todays Month is:${tMonthShort}`)

    let tMonthLong = todaysDate.toLocaleDateString('default',{month:'long'})
    console.log(`Todays Month is:${tMonthLong}`)

    let tYear = todaysDate.getFullYear()
    console.log(`Current Year is:${tYear}`)

 //find future date
    console.log('future dates are')
    let futureDate = new Date()
    console.log(`todays date is ${todaysDate}`)

    let fDate1 = futureDate.setDate(futureDate.getDate() + 90)
    console.log(fDate1)
    let Datef = futureDate.getDate()
    console.log(`todays date is ${Datef}`)

    let fMonth = futureDate.getMonth()
    console.log(`todays month number is ${fMonth + 1}`) //print index wise starts with 0

    let fmonthShort = futureDate.toLocaleDateString('default', { month: 'short' })
    console.log(`todays month short is ${fmonthShort}`)

    let fmonthLong = futureDate.toLocaleDateString('default', { month: 'long' })
    console.log(`todays month long is ${fmonthLong}`)

    let fYear = futureDate.getFullYear()
    console.log(`todays year is ${fYear}`)

    //slecting dates from web page

    await page.goto('https://testautomationpractice.blogspot.com/')

    //type1 -----------
    //await page.fill('#datepicker','06/25/2025')

    //type2-----------Datef,fmonthLong,fYear

    await page.locator('#datepicker').click()

    while (true) {
        let currentMonth = await page.locator('.ui-datepicker-month').textContent()
        let currentYear = await page.locator('.ui-datepicker-year').textContent()

        if (currentMonth == fmonthLong && currentYear == fYear) {
            break;
        }

        await page.locator('[data-handler="next"]').click()
    }
 //select date type 1
    //await page.locator(`[data-date="${Datef}"]`).click()

    //select date type 2 with loop
    let dates = await page.$$('[data-handler="selectDay"] a')
    for(let dt of dates){
        if(await dt.textContent()==Datef){
           await dt.click()
           break;
        }
    }


    await page.waitForTimeout(5000)
    
})

//npx playwright test TC18.datepicer.spec.js --headed --project chromium