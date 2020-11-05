const controller = require('./controller');

const routes = [
	{
		method: 'GET',
		path: '/breaking-news',
		handler: controller.getBreakingNews,
		options: {
			description: 'Get breaking news',
			tags: ['api'],
		},
	},
	{
		method: 'GET',
		path: '/konov-izvestaj-o-dzigijevoj-faci',
		handler: controller.report,
		options: {
			description: 'Get report',
			tags: ['api'],
		},
	},
];

module.exports = routes;
