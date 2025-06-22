const {test,expect} = require ("@playwright/test")


test('test1@sanity',async function ({page}){
     console.log("i am test1")
})
test('test2@regression',async function ({page}){
     console.log("i am test2")
})
test('test3@sanity',async function ({page}){
     console.log("i am test3")
})
test('test4@sanity', async ({ page }) => {
    console.log('i m in test4')
})
test('test5@regression', async ({ page }) => {
    console.log('i m in test5')
})
test('test6@regression@sanity', async ({ page }) => {
    console.log('i m in test6')

})

//npx playwright test tags.spec.js --headed --project chromium --grep "@sanity"
//npx playwright test tags.spec.js --headed --project chromium --grep "@regression"
// npx playwright test tags.spec.js --headed --project chromium --grep "@regression" --grep invert "@sanity"
/*
Why use
--grep: Quickly run a subset of tests (e.g., sanity checks before a deploy).

--headed: Debug tests visually.

--project: Test browser-specific behavior.

What This Command Does:
Executes only the tests in tags.spec.js that are tagged with @sanity.

Runs them in a visible Chromium window (for debugging/watchability).


*/