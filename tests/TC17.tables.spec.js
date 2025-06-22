import {test,expect} from '@playwright/test'

test('TC17: Verify Tables in playwright at automation practice:',async function({page}){
    // Arrangement
    await page.goto('https://testautomationpractice.blogspot.com')
    
    // Action
    let table = await page.locator('#productTable')

    //lets find rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`Total numbers of columns count:${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`Total number of rows count:${await rows.count()}`)
    
    //Assertion
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

     //get any one product and click to select
    let matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:'Wireless Earbuds'
    })
    // select one product by above code and below line will help to click on same
    await matchedRow.locator('input').click()
    await page.waitForTimeout(5000)


})
test('TC002: Select Any one product from table with function:',async function ({page}) {
    //Arrangement
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //Action
    let table = await page.locator('#productTable')

    let columns = await table.locator('thead tr th')
    console.log(`Total number of columns count:${await columns.count()}`)

    let rows = await table.locator('tbody tr')
    console.log(`Total number of rows count:${await rows.count()}`)
 
    // select one product with function

    async function selectProduct(rows,page,product){ // rows to find product and page to find td
        let matchedRow = rows.filter({
            has:page.locator('td'),
            hasText:product
        })
        matchedRow.locator('input').click()
    }
  await selectProduct(rows,page,'SmartWatch')// function call with parameter product
  await page.waitForTimeout(5000)
  await selectProduct(rows,page,'Wireless Earbuds')// function call with parameter product
  await page.waitForTimeout(5000)


})

test("TC003: to print all product from table using loop:",async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')

    let table = await page.locator('#productTable')

    const columns = await table.locator('thead tr th')

    const rows = await table.locator('tbody tr')

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    // to print all column of one page
    expect(await columns.count()).toBe(4)
    for(let i=0; i< await rows.count(); i++ ){
        const currentRow = rows.nth(i)
        const tdInRow = await currentRow.locator('td')
        for(let j =0;j < await tdInRow.count()-1; j++){
            console.log(await tdInRow.nth(j).textContent())
        }
    }


})


//npx playwright test TC17.tables.spec.js --headed --project chromium 
