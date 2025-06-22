const {test,expect} = require('@playwright/test')

// import {test,expect} from '@playwright/test'


test('TC20: Verify keyboard Actions in playwright:', async function({page}){
  await page.goto('https://gotranscript.com/text-compare')

   //ctrl + A -press is used when we want two keys to press
  await page.keyboard.press('Control+A')

  //Ctrl + C -press is used when we want two keys to press
  await page.keyboard.press('Control+C')

  //Tab - down and up is used when single key to press
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')
   
  //ctrl + V - press is used when we want two keys to press
  await page.keyboard.press('Control+V')

  await page.waitForTimeout(3000)


})

// press is used when we want two keys to press
// down and up is used when single key to press
// Control+key for window
// Meta+key for mac

//npx playwright test TC20.keyBoards.spec.js -- headed --project chormium  