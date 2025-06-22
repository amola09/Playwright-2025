import {test,expect} from '@playwright/test'

test('TC16: Verify iframe in playwright:',async function({page}){

    await page.goto('https://ui.vision/demo/webtest/frames/')

     // get total of frame 
       let frameCount = await page.frames()
       console.log(`Total Frames Count:${frameCount.length}`)

       // Type-1

       const frameInputBox = await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]')
       await frameInputBox.fill("Amol")


       const frame2 = await page.frameLocator('[src="frame_2.html"]')
       await frame2.locator('[name="mytext2"]').fill('Rakesh')


       
    //type 2 
    //get by name or get by url
    //let frameName = await page.frame('name')

    //get by url
    // 'url:https://ui.vision/demo/webtest/frames/frame_4.html'
    const frame4 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_4.html' })
    await frame4.fill('[name="mytext4"]', 'Rohan')


      //getting child frames

      const frame3 =  await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
      await frame3.fill('[name="mytext3"]', 'David')
      

      const childframe3 = await frame3.childFrames() // in array 
      //await childframe3[0].locator('[id]="16"').click()

      const child1F3 = await childframe3[0]
      await child1F3.click('[id="i6"]')
      await child1F3.click('[id="i9"]')
      
      await page.waitForTimeout(5000)

})



//npx playwright test TC16.iframe.spec.js --headed --project chromium  