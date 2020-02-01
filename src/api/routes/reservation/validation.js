const Joi = require('@hapi/joi');

const reservationIdParam = {
	id: Joi.string().length(24).required(),
};

const createReservationSchema = Joi.object().keys({
	startDate: Joi.string().required(),
	endDate: Joi.string().required(),
	hotelName: Joi.string().required(),
	guestName: Joi.string().required(),
}).label('CreateReservationSchema');


const updateReservationSchema = Joi.object().keys({
	startDate: Joi.string().optional(),
	endDate: Joi.string().optional(),
	hotelName: Joi.string().optional(),
	guestName: Joi.string().optional(),
}).label('UpdateReservationSchema');

module.exports = {
	reservationIdParam,
	createReservationSchema,
	updateReservationSchema,
};
