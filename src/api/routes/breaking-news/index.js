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
];

module.exports = routes;
