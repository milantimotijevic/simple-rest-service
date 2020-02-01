const Joi = require('@hapi/joi');

const reservationIdParam = {
	id: Joi.string().length(24).required(),
};

module.exports = {
	reservationIdParam,
};
