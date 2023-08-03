import puppeteer from 'puppeteer';

const run = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: false }); // default is true
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2*60*1000);
        await page.goto('https://www.welcometothejungle.com/fr/jobs');
        await page.waitForTimeout(6000)

        if (await page.$(`button[id="axeptio_btn_acceptAll"]`) !== null) {
            await page.click(`button[id="axeptio_btn_acceptAll"]`);
        }

        if (await page.$(`button[data-testid="country-banner-stay-button"]`) !== null) {
            await page.click(`button[data-testid="country-banner-stay-button"]`);
        }

        await page.waitForSelector(`input[id="search-query-field"]`);
        await page.focus(`input[id="search-query-field"]`);
        await page.keyboard.type("javascript"); 
        await page.waitForSelector(`div[data-testid="autocomplete-item-0"]`);
        await page.focus(`div[data-testid="autocomplete-item-0"]`);
        await page.click(`div[data-testid="autocomplete-item-0"]`);
        await page.waitForTimeout(500)

        await page.waitForSelector(`input[data-testid="jobs-home-search-field-location"]`);
        await page.focus(`input[data-testid="jobs-home-search-field-location"]`);
        await page.click(`input[data-testid="jobs-home-search-field-location"]`);
        await page.$eval(`input[data-testid="jobs-home-search-field-location"]`, el => el.value = "");
        await page.keyboard.type("Montpellier, France"); 
        await page.waitForSelector(`div[data-testid="place-item-0"]`);
        await page.focus(`div[data-testid="place-item-0"]`);
        await page.click(`div[data-testid="place-item-0"]`);
        await page.waitForTimeout(500)

        await page.waitForSelector(`button[data-testid="jobs-search-filter-contract"]`);
        await page.focus(`button[data-testid="jobs-search-filter-contract"]`);
        await page.click(`button[data-testid="jobs-search-filter-contract"]`);
        await page.waitForSelector(`input[id="checked"]`);
        await page.focus(`input[id="checked"]`);
        await page.click(`input[id="checked"]`);
        await page.waitForSelector(`button[id="jobs-search-filter-contract-FULL_TIME"]`);
        await page.focus(`button[id="jobs-search-filter-contract-FULL_TIME"]`);
        await page.click(`button[id="jobs-search-filter-contract-FULL_TIME"]`);
        await page.waitForSelector(`button[data-testid="jobs-search-filter-contract"]`);
        await page.focus(`button[data-testid="jobs-search-filter-contract"]`);
        await page.click(`button[data-testid="jobs-search-filter-contract"]`);
        
        const html = await page.content();
        console.log(html);
    } catch(e){
        console.error('run failed', e);
    } finally {
        await browser?.close();
    }
}

export const welcomeToTheJungle = {
  run
}