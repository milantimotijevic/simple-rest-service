const controller = require('./controller');
const validation = require('./validation');

const routes = [
	{
		method: 'GET',
		path: '/reservation',
		handler: controller.getAllReservationsHandler,
		options: {
			description: 'Get all reservations',
			tags: ['api'],
		},
	},
	{
		method: 'GET',
		path: '/reservation/{id}',
		handler: controller.getOneReservationHandler,
		options: {
			description: 'Get a single reservation',
			tags: ['api'],
			validate: {
				params: validation.reservationIdParam,
			},
		},
	},
];

module.exports = routes;
