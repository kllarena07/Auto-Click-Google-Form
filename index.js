const puppeteer = require('puppeteer')

const url = "https://docs.google.com/forms/d/e/1FAIpQLSfCYQAo1h0q27W4d9KZLxbHt-L6ekXcBpG-xuhEh1CpsSZxQg/viewform"
async function start() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  await page.goto(url)

  await page.evaluate(() => {
    document.querySelector('div.DE3NNc.CekdCb div.lRwqcd span.l4V7wb.Fxmcue').click()
  })
  await page.waitForNavigation()

  setTimeout(() => {
    browser.close()
  }, 200)
}

setInterval(start, 1000)