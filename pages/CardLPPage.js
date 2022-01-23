export default class CardLPPage {
	async visit() {
		await page.goto('https://zozo.jp/_card/')
		await page.waitForSelector('.p-card-wrapper')
	}

	async checkBalloonAndScreenshot() {
		await page.evaluate(() => {
			window.scroll(0, 500)
		})
		await page.waitForSelector('.p-card-application-balloon')
		await page.screenshot({ path: 'screenshot/screenshot.png' })
	}
}
