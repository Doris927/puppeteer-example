import CardLPPage from '../pages/CardLPPage'

describe('card lp example', () => {
	let cardLPPage

	beforeAll(async () => {
		cardLPPage = new CardLPPage()
	})

	test('card lp page should work', async () => {
		await cardLPPage.visit()
	})

	test('card lp check balloon and screenshot', async () => {
		await cardLPPage.checkBalloonAndScreenshot()
	})
})
