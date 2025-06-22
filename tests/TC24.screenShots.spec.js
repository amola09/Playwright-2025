const { test, expect } = require('@playwright/test')

test('TC24: Capture Screenshot in playwright:',async({page})=>{
     await page.goto('https://www.flipkart.com/', { 
    timeout: 60000,
    waitUntil: 'networkidle'
  });
    await page.waitForTimeout(3000)
    await page.screenshot({path: "screenshots/" + "homepage.png"})
})

test.only('TC002: Capture Screenshot in playwright2:',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: "screenshots/" + Date.now() + "homepage.png"})
})
test.only('TC003: Capture Screenshot in playwright3 fullpage:',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000)
    await page.screenshot({path: "screenshots/" + Date.now() + "homepage.png", fullPage:true})
})

test.only('TC004: Capture Screenshot in playwright4:',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000)
    await page.locator('[class="card h-100"]').first().screenshot({path: "screenshots/" + Date.now() + "element.png"})
})

//npx playwright test TC24.screenShots.spec.js -- headed --project chormium 


/*
Theory:

1 - {path: "screenshots/" + "homepage.png"})
What it does:

Captures a screenshot of the entire visible viewport (not the full scrollable page unless configured).

Saves it as homepage.png in the screenshots folder.

2 -  ({path: "screenshots/" + Date.now() + "homepage.png", fullPage:true})

Default behavior captures only the currently visible area.

For full-page screenshots (including scrolled content), add:

3 - When to Use Which:

page.screenshot(): Recording the overall page state.Debugging layout issues.

locator.screenshot():Testing individual components (e.g., buttons, cards).Comparing UI changes over time
*/

