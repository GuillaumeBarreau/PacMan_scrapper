import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // default is true
  const page = await browser.newPage();
  await page.goto('https://ca.indeed.com/');

  if (await page.$('#text-input-what') !== null) {
    const myLocalValue = 'javascript';  
    const inputFocus = "#text-input-what";
    // await page.keyboard.type("password");
    // await page.keyboard.type('인간지능 제로초봇 동작중... 페이스북은 제로초봇에게 점령당했습니다.');
     await page.type("password",'照片', {
    delay: 500 // 控制 keypress 也就是每个字母输入的间隔
   });
    // await page.$eval(inputFocus, (el, value) => el.value = value, myLocalValue);
    // await page.focus(inputFocus)
  }
  // text-input-what
  // await page.screenshot({ path: 'example.png' });

  // await browser.close();
})();