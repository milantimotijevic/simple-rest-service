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
	{
		method: 'POST',
		path: '/reservation',
		handler: controller.createReservationHandler,
		options: {
			description: 'Create a new reservation',
			tags: ['api'],
			validate: {
				payload: validation.createReservationSchema,
			},
		},
	},
	{
		method: 'PUT',
		path: '/reservation',
		handler: controller.updateReservationHandler,
		options: {
			description: 'Update existing reservation',
			tags: ['api'],
			validate: {
				payload: validation.updateReservationSchema,
			},
		},
	},
	{
		method: 'DELETE',
		path: '/reservation/{id}',
		handler: controller.deleteReservationHandler,
		options: {
			description: 'Delete existing reservation',
			tags: ['api'],
			validate: {
				params: validation.reservationIdParam,
			},
		},
	},
];

module.exports = routes;
