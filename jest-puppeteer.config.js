module.exports = {
	launch: {
		// dumpio: true,
		// headless: process.env.HEADLESS !== 'false',
		headless: false,
		slowMo: 50,
		defaultViewport: {
			width: 1600,
			height: 1200
		}
	},
	browserContext: 'default'
}
