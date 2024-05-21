import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://www.together.ai/");
 
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
})();
