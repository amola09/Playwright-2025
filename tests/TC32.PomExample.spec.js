//POM (Page Object Model) in Playwright is a design pattern used to create an object repository for web elements.
//It helps in maintaining, scaling, and reusing test automation code by separating the test logic from the page structure.
import { expect ,test} from "@playwright/test";
import { myClass } from "../Pages/dataforTC32";
import productList from "../Payload/productListFor32.json";

test('TC32: Verify POM design Pattern in playwright: ',async({page})=>{
    await page.setDefaultTimeout(60000)
    const hp= new myClass(page)
    await hp.visitUrl()
    await hp.login('dipanshu','dipanshu@123')

    await page.waitForTimeout(2000)
    //await hp.addToCart('phone',productList.phone)
    await hp.addToCart('laptop',productList.laptop)
  
})