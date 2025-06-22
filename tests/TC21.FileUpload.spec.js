import {test,expect} from '@playwright/test'

test("TC21: Verify file uplaod in playwright:", async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')

     const file1 = "C:/Users/Amol/Downloads/sampleFile.jpeg"
     await page.locator('#singleFileInput').setInputFiles(file1)

     await page.getByText('Upload Single File').click()
     await page.waitForTimeout(3000)

     let singleFileTxt = await page.locator('#singleFileStatus').textContent()
     await expect(singleFileTxt).toContain('sampleFile.jpeg')
     await page.waitForTimeout(5000)

})
test("TC002: Verify file uplaod in playwright:", async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/')
    const file1 = "C:/Users/Amol/Downloads/postmanGoRest.docx"
    const file2 = "C:/Users/Amol/Downloads/Steps to Execute the Collection in Postman.docx"

    await page.locator('#multipleFilesInput').setInputFiles([file1,file2])
    await page.getByText('Upload Multiple Files').click()
    await page.waitForTimeout(3000)

    let multipleFileTxt = await page.locator('#multipleFilesStatus').textContent()
    await expect(multipleFileTxt).toContain('postmanGoRest.docx')
    await expect(multipleFileTxt).toContain('Steps to Execute the Collection in Postman.docx')
    await page.waitForTimeout(5000)
})


//npx playwright test TC21.FileUpload.spec.js -- headed --project chormium  