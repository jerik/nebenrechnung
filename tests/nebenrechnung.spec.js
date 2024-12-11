// @ts-check
const { test, expect } = require('@playwright/test');

// @todo setup web server with correct ssl, perhaps via docker?
// disable HTTPS errors
// https://stackoverflow.com/a/75547151/1933185
test.use({
  ignoreHTTPSErrors: true,
});

// test nebenrechnung
test('initial start of page', async ({ page }) => {
  await page.goto('https://localhost:8008');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/nebenrechnung/);
});

test('test button', async ({ page }) => {
  await page.goto('https://localhost:8008');

  // Expect a title "to contain" a substring.
  await page.locator('button:text("Add line")').click();
  // https://www.marketingscoop.com/tech/web-scraping/playwright-how-to-find-elements-by-xpath-in-playwright/
  const clines = await page.locator('//calc-line').count()
  console.log(clines)
});
