import{test,expect} from '@playwright/test'
import { waitForDebugger } from 'inspector'

test('TC15: Verify simple JS alert in playwright:',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    

    await page.locator('[id="alertBtn"]').click()

    await page.waitForTimeout(4000)

  
})
test('TC002:Verify confirm JS alert for Ok in playwright:',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
    })
    

    await page.locator('[id="confirmBtn"]').click()
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(4000)

  
})
test('TC003:Verify confirm JS alert for Cancel in playwright:',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()
    })
    

    await page.locator('[id="confirmBtn"]').click()
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(4000)

  
})
test('TC004:Verify prompt JS alert for Ok in playwright:',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Amol')
        await page.waitForTimeout(5000)
    })

    await page.locator('[id="promptBtn"]').click()
    await expect(page.locator('[id="demo"]')).toHaveText('Hello Amol! How are you today?')

    await page.waitForTimeout(5000)
})

test('TC005:Verify prompt JS alert for Cancel in playwright:',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.dismiss()
        await page.waitForTimeout(5000)
    })

    await page.locator('[id="promptBtn"]').click()
    await expect(page.locator('[id="demo"]')).toHaveText('User cancelled the prompt.')

    await page.waitForTimeout(5000)
})

//npx playwright test TC15.jsAlerts.spec.js --headed --project chromium


