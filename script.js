import puppeteer from 'puppeteer';

// take screenshot of the website
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(process.argv[2], {waitUntil: 'load'});
  // we need to wait for the page to load
  await page.screenshot({path: process.argv[3] + '/project-screenshot.png'});
  await browser.close();
})();