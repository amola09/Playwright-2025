import { test, expect } from "@playwright/test";

// mouse clicks -> dbclick,right click
// mouse click and hold
// mouse click drag and drop
// mouse hover

test('TC19: Verify mouse action in playwright', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds
  await page.goto('https://demoqa.com/buttons');
   //1.dbclick
  //await page.locator('#doubleClickBtn').dblclick()
  await page.dblclick('#doubleClickBtn')

    let dbclickMsg = await page.locator('#doubleClickMessage').textContent()
    await expect(dbclickMsg).toBe('You have done a double click')
 
 
  //2.rightclick

    await page.locator('#rightClickBtn').click({ button: 'right' })

    let rightclickMsg = await page.locator('#rightClickMessage').textContent()
    await expect(rightclickMsg).toBe('You have done a right click')

    
});

test('TC002: mouse hover action in Playwright:',async function({page}) {
  await page.goto('https://www.webdriveruniversity.com/Actions/index.html')

   //await page.locator('.dropbtn').first().hover()
    await page.getByText('Hover Over Me First!').hover()

  //await page.locator('.dropbtn').nth(1).hover()
    await page.getByText('Hover Over Me Second!').hover()
    expect(await page.getByText('Link 1').nth(1)).toBeVisible()

    //await page.locator('.dropbtn').nth(2).hover()
    await page.getByText('Hover Over Me Third!').hover()

    expect(await page.getByText('Link 1').nth(2)).toBeVisible()
    expect(await page.getByText('Link 1').nth(3)).toBeVisible()

    await page.waitForTimeout(5000)
})

test('TC003: mouse drag and drop actions at webdriver:', async ({ page }) => {
    //example 1 
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')

    let takeMe = await page.locator('#draggable')
    let dropHere = await page.locator('#droppable')

    await takeMe.dragTo(dropHere)

    let dropedMsg = await page.locator('#droppable p ').textContent()
    await expect(dropedMsg).toBe('Dropped!')
    await page.waitForTimeout(5000)

    //example 2
   // http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
})

// npx playwright test TC19.mouseAction.spec.js -- headed --project chormium