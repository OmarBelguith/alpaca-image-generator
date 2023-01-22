const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(process.argv[2]);
  await page.screenshot({path: process.argv[3] + '/project-screenshot.png'});
  await browser.close();
})();