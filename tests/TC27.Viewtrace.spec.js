import{test,expect} from '@playwright/test'

test('TC27: Verify viewtrace ',async function({page}) {
    
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Amola');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('amola123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#logout2')).toContainText('Log out');
  await expect(page.locator('#nameofuser')).toContainText('Welcome Amola');

})



// playwright.config.js
// trace: "on",
// npx playwright test viewTrace.spec.js --headed --project chromium  
// npx playwright show-trace test-results\viewTrace-test-chromium\trace.zip 