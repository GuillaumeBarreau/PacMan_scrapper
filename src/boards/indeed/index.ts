import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // default is true
  const myLocalValue = 'javascript';  
  const inputFocus = "#text-input-what";

  const page = await browser.newPage();
  await page.goto('https://ca.indeed.com/');

  await page.waitForSelector(inputFocus);

  if (await page.$(inputFocus) !== null) {
    await page.$eval('input[name=q]', el => el.value = myLocalValue);
  };
   
})()
  // await page.screenshot({ path: 'example.png' });

  // await browser.close();
// ();