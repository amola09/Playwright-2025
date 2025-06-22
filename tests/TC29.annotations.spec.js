import {test,spec, expect} from '@playwright/test'

test.skip('skip this test',async function ({page}) {
    //this test is not going to run
    console.log('skip this test')
})

test.skip('skip this test-2',async function ({page,browserName}) {
    //this test is not going to run
    console.log('skip this test-2 before')

    // if(browserName === 'firefox'){
    //     test.skip
    // }

    test.skip(browserName ==='chromium','not suitable for chromium')
    console.log('skip this test-2 after')
})

//fixme()

test('fixme test case',async function({page,browserName}) {
    console.log('fixMe before')
    
    if(browserName === 'firefox'){
        test.fixme()
    }
     console.log('fixMe before')
})

// fail()
test('fail test case',async function ({page}) {
   console.log('fail before') 
   test.fail() // expected to fail
   expect(1).toBe(4) // actual to fail
})
// test('fail test case',async function ({page}) {
//    console.log('fail before') 
//    test.fail() // expected to fail
//    expect(1).toBe(1) // actual to fail
// })

//slow()

test('slow test case',async function ({page}) {
   await page.goto('https://testautomationpractice.blogspot.com/')
})



